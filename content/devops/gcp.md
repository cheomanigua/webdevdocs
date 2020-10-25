---
title: "Google Cloud Platform"
description: "Google Cloud Platform reference commands"
---

## Command utils
- **gcloud**: primary CLI tool to create and manage Google Cloud resource. [Info](https://cloud.google.com/sdk/gcloud/) | [Install](https://cloud.google.com/sdk/install) | [Initialize](https://cloud.google.com/sdk/docs/initializing)
- **beta**: Beta release level of **gcloud**. Commands are functionally complete, but may still have some outstanding issues. Breaking changes to these commands may be made without notice.
- **alpha**: Alpha release level of **gcloud**. Commands are in early release and may change without notice.
- **kubectl**: tool for controlling Kubernetes clusters. [[Info]](https://cloud.google.com/kubernetes-engine/docs/quickstart) | Installation: `gcloud components install kubectl`
- **gsutil**: Python application that lets you access **Cloud Storage** from the command line. [info](https://cloud.google.com/storage/docs/gsutil_install)
- **bq**: Enables running queries and manipulating datasets, tables, and entities in **BigQuery** through the command line. [Info](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-command-line)

**Note**: To manage your gcloud installation, you can see the commands available by typing `gcloud components`.

## General information
```
gcloud init
gcloud info

gcloud auth list
gcloud auth login --no-launch-browser
gcloud config list // check active account and project
gcloud config set account john@doe.com // switch to specified account
gcloud config set project [PROJECT_ID] // switch to specified project
gcloud config set compute/zone [ZONE] // set default zone for gcloud

gcloud projects list
gcloud projects describe [PROJECT_ID]
gcloud projects get-ancestors [PROJECT_ID]
gcloud projects get-iam-policy [PROJECT_ID]
```

## Create a project
```
gcloud projects create [PROJECT_ID] --name="My Project"
gcloud beta billing accounts list
gcloud beta billing projects link [PROJECT_ID] --billing-account=0X0X0X-0X0X0X-0X0X0X
gcloud config set project [PROJECT_ID]
gcloud services list --available
gcloud services enable SERVICE_NAME
```
## Tip
After creating a project, set the created project as default so you don't need to specify the project in every command. Also, specify the zone or region for the same reason:
```
gcloud config set project [PROJECT_ID] // switch to specified project
gcloud config set compute/zone [ZONE] // set default zone for gcloud
```


## Compute Engine VM instance

In order to create a Compute Engine VM instance we must enable the service **compute.googleapis.com**. Also, be sure your account is set into the project.

```
gcloud config set project [PROJECT_ID]
gcloud services enable compute.googleapis.com

gcloud compute instances list
gcloud compute images list
gcloud compute machine-types list

gcloud compute instances create [INSTANCE_NAME] --boot-disk-device-name=debian-10 --zone=us-central1-a --boot-disk-type=pd-ssd --machine-type=f1-micro

gcloud compute instances add-tags [INSTANCE_NAME] --tags http-server,https-server --zone=us-central1-a

gcloud compute --project=[PROJECT_ID] firewall-rules create default-allow-http --allow tcp:80,tcp:3000,tcp:8000

gcloud compute --project=[PROJECT_ID] firewall-rules create default-allow-https --allow tcp:80,tcp:3000,tcp:8000

gcloud compute instances delete [INSTANCE_NAME] --zone=us-central1-a
```

### Connect to a VM instance by SSH
```
gcloud compute ssh --project [PROJECT_ID] --zone [ZONE] [INSTANCE_NAME]
```

**Tip**: If you want to know the IP of your instance, issue:
```
curl ifconfig.io
```

### Creating swap partition for VM micro instance
```
sudo fallocate -l 1G /swapfile
sudo dd if=/dev/zero of=/swapfile bs=1024 count=1048576
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```
Edit `/etc/fstab` and append this line:
```
/swapfile swap swap defaults 0 0
```
Now issue:
```
sudo mount -a
```

### Copy files/directorys from local to VM instance

#### Files
```
gcloud compute scp index.html [INSTANCE_NAME]:/home/myuser/
```

#### Directories
```
gcloud compute scp --recurse css/ [INSTANCE_NAME]:/home/myuser/
```
### Pro Tip: Set default project and zone

To work more confortably, we can set the default project and zone so we don't need to intruduce them every time we issue a command:

```
gcloud config set project [PROJECT_ID]
gcloud config set compute/zone us-central1-a
```

## Kubernetes Engine

In GCP, you can deploy a single container, or you can deploy a cluster. By default a cluster is created with three nodes, being one of the nodes the master node.

Cluster - Node - Pod - Container


### Create cluster
```
gcloud container clusters list
gcloud container clusters create [CLUSTER_ID]
gcloud container clusters get-credentials [CLUSTER_NAME] //configure kubectl so we can interact directly with the cluster
```

**Note**: By default, GKE creates 3 nodes. You can specify the number of nodes by adding the flag `--num-nodes=NUM_NODES`

### Deploy image

```
kubectl get nodes
kubectl create deployment [DEPLOYMENT_NAME] --image=httpd:latest
kubectl get pods
kubectl expose deployment [DEPLOYMENT_NAME] --type LoadBalancer --port 80 --target-port 8080
kubectl get services
```

`kubectl create deployoment` command will get the Apache image from Docker Hub. If we don't specify a registry, by default GKE search in Docker Hub. You can use a diffent registry, like in this example:
```
kubectl create deployment [DEPLOYMENT_NAME] --image=gcr.io/google-sample/hello-app:1.0
```

### Scale the deployment

```
kubectl scale deployment --replicas=3 [DEPLOYMENT_NAME]
kubectl get pods
```


## App Engine 

### App Engine Deploy

**Note**: A deployed App Engine instance cannot be deleted. It can be disabled from the console. The only way to delete the instance is to delete the whole project.

``` 
gcloud services enable appengine.googleapis.com
git clone https://github.com/cheomanigua/express-chat.git
cd express-chat
touch app.yaml
echo "runtime: nodejs12" > app.yaml
gcloud app deploy app.yaml
gcloud app browse
--copy url--
```


## Firewall rules

```
gcloud compute firewall-rules update default-allow-http --allow tcp:80,tcp:3000,tcp:8000
```

## Build a Custom Network

### Create the Custom Network and Subnets

1. Create the network:
```
gcloud compute networks create [MY-NETWORK] --subnet-mode custom
```

2. Create the subnet:
```
gcloud compute networks subnets create [MY-SUBNET-A] --network [MY-NETWORK] --region us-central1 --range 10.0.1.0/24
 
gcloud compute networks subnets create [MY-SUBNET-B] --network [MY-NETWORK] --region europe-west1 --range 10.0.2.0/24
 ```
 
3. List the created network:
```
gcloud compute networks subnets list --network [MY-NETWORK]
```

### Define the Firewall Rule
```
gcloud compute firewall-rules create [MY-ALLOW-SSH] --allow tcp:22,icmp --network [MY-NETWORK]
```

### Spin Up the VM Instances

1. Create the Compute Engine instances by running the following commands:
```
gcloud compute instances create [MY-VM-A] --subnet [MY-SUBNET-A] --zone us-central1-a

gcloud compute instances create [MY-VM-B] --subnet [MY-SUBNET-B] --zone europe-west1-b
```

### Test Via SSH

1. From the Compute Engine VM console page, click the SSH button for the `[MY-VM-A]` instance to open its SSH terminal.
2. In the SSH terminal, run the following command to ping the VM instance in Europe:
```
ping -c 3 [MY-VM-B_EXTERNAL_IP]
```

## Pub/Sub

1. Create a **topic**
2. Create a **suscription** and during creation select a **topic** to subscribe
4. Publish a message from the **topic**
```
gcloud pubsub topics publish [TOPIC] --message "this is a message"
```
5. Pull the message from the **subscription**
```
gcloud pubsub subscriptions pull [SUBSCRIPTION]
```

## Host a static site in Cloud Store

1. Start bucket creation by clicking **Create a bucket**.
2. Name the bucket with the domain name of your static site.
3. Verify domain ownership by adding the TXT to your domain host. If the option to verify the domain does not appear, open a new tab an go to [https://search.google.com](https://search.google.com) and add a new property by clicking on the drop down menu of the upper left corner with the domain name.
4. After verifiying the domain, create the following CNAME in your domain host: 
  - `yourdomain.com` pointing to `c.storage.googleapis.com`
  - `www.yourdomain.com` pointing to `c.storage.googleapis.com`
5. After verifying the domain ownerhips, continue with the bucket creation. You can leave the rest of steps with the default options.
6. Once the bucket is created, go to the tab **Permissions**.
7. Click on **Add members** button.
8. In the **New members** text field, type `allUsers`
9. In the **Select a role** drop down menu, select *Cloud Storage - Storage Object Viewer*.
10. Click on **Save button**.
11. Go back to the **Objects** tab.
12. Upload your local site files and folders by clicking on the buttons **Upload files** and **Upload folder**. Note that the index page has to be in the root, not in a folder.
13. Go back to previous page by clicking on the arrow next to **Bucket details**.
14. On the right of the list of buckets, there are 3 vertical dots for each bucket. Click on the three dots for your bucket and select **Edit website configuration**.
15. Select the index page for your static site and click **Save**.

That's it. You have now your static website hosted in Cloud Store.

Further information at [Codelabs](https://codelabs.developers.google.com/codelabs/cloud-webapp-hosting-gcs/index.html#0).

### Setting up a load balancer for backend buckets for CDN and SSL purposes

**Note**: The external HTTP(S) load balancer doesn't automatically balance traffic across backend buckets based on the user's region. Requests to /static/us/object always go to your US bucket, and requests to /static/eu/object always go to your EU bucket.

The purpose of setting up a load balancer with buckets is to add a *CDN* and/or *SSL certificates*. Also, note that adding a load balancer to a bucket eliminates the need to use a CNAME to access the bucket as we saw in the step 4 of section *Host a static site in Cloud Storage*.

#### CDN 
You can set up a load balancer for your bucket static site in order to add a CDN. Follow instructions at [Setting up a load balancer with backend buckets](https://cloud.google.com/load-balancing/docs/https/ext-load-balancer-backend-buckets)

#### SSL Certificate

You cannot add SSL certificates directly to your bucket, but you can add a SSL certificates in your external HTTPS load balancer IP address. For this example, we are going to use Google-managed SSL certificates. Follow the instructions at: [Using Google-managed SSL certificates](https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs)

**IMPORTANT**: Don't forget to add an **A record** in your domain host pointing to the load balancer IP address.

### Set up automatic builds from GitHub

If you don't feel like uploading manually a file to your bucket everytime you make a change, you can setup automatic builds with *Google Build*.

You will attach your *GitHub* repository to a trigger setup in *Google Build*. Everyting you update your GitHub repository, Google Build with update the bucket.

Follow the instructions at [Automated static website publishing with Cloud Build](https://cloud.google.com/community/tutorials/automated-publishing-cloud-build)

The `cloudbuild.yaml` file shoud be like this:
```
steps:
  - name: gcr.io/cloud-builders/gsutil
  args: ["-m", "rsync", "-r", "-c", "-d", ".", "gs://your.bucket.url"]
```

## LAMP + Wordpres
```
sudo apt install apache2 mariadb-server php-fpm libapache2-mod-php php-mysql
sudo apt install php-curl php-gd php-mbstring php-mcrypt php-xml php-xmlrpc
sudo mysql_secure_installation
```

To enable PHP 7.3 FPM in Apache2 do:
```
a2enmod proxy_fcgi setenvif
a2enconf php7.3-fpm
```

Edit /var/www/html/.htaccess and add:
`DirectoryIndex index.php`

## OpenVPN

You can install an OpenVPN server in your GCE instance by using the script `openvpn-install.sh` on [this Github repository](https://github.com/angristan/openvpn-install.git)

```
git clone https://github.com/angristan/openvpn-install.git
cd openvpn-install
sudo ./openvpn-install.sh
```

Most of the default answers will be fine. Be sure to check that the IP address is the same as the external IP address of your VM.

Once you finished, in order to copy the `.ovpn` file over ssh to your local machine, you must follow these steps:

1. Edit `/etc/ssh/sshd_config`

2. Change the following lines:
- `PermitRootLogin prohibit-password` to `PermitRootLogin yes`
- `PasswordAuthentication no` to `PasswordAuthentication yes`

3. Restart **ssh** service:
```
sudo service ssh restart
```

4. From your local machine, issue this command:
```
scp root@ip.of.your.gceinstance:/path/to/file.ovpn /home/user/file.ovpn
```
**Note**: If you have not setup a root password in your remote VM, do it so now prior to following step above:
```
sudo passwd
```

5. (Optional). Revert the ssh permissions by reverting the changes made on step 2, so you cannot ssh to your remote VM.


## OS Login

OS Login lets you securely SSH into GCE instances when using a service account

1. Enable OS Login in project-wide metadata so that it applies to all of the instances in your project
```
gcloud compute project-info add-metadata \
    --metadata enable-oslogin=TRUE
```

2. Configuring OS Login roles on a service account
```
gcloud compute instances add-iam-policy-binding [MY_INSTANCE] --member='user=[SERVICE_ACCOUNT]' --role='roles/compute.osAdminLogin'
gcloud compute instances add-iam-policy-binding [MY_INSTANCE] --member='user=[SERVICE_ACCOUNT]' --role='roles/compute.iam.serviceAccountUser'
```

3. Generating Service Account Key file
```
gcloud iam service-accounts keys create --iam-account [SERVICE_ACCOUNT] [FILE].json
```

4. Activate service account 
```
gcloud auth activate-service-account --key-file=Downloads/[FILE].json
```

5. Adding SSH keys to a user account
```
gcloud compute os-login ssh-keys add --key-file .ssh/id_rsa.pub
```

6. Switch back from service account
```
gcloud config set account your@gmail.com
```

7. Gather service account `uniqueId`
```
gcloud iam service-accounts describe \
    [SERVICE_ACCOUNT] \
        --format='value(uniqueId)'
```

8. SSH into an instance using a service account
```
ssh -i .ssh/id_rsa [sa_<uniqueId>]@[INSTANCE_IP]
```

Note that we prefixed the `uniqueId` with `sa_`


## Creating GCE instances with Ansible

1.First you must give user permissions to `~/.ansible/cp/` directory:
```
sudo chown -R $USER:$USER ~/.ansible/cp
```

2. If you are using the default Compute service account, you must generate the **Service Account key** and add the **SSH keys** as per [OS Login](#Os Login) prior to proceeding to next step.

3. If you followed the steps to setup [OS Login](#Os Login), you can now run the command:
```
ansible-playbook main.yml --user 'sa_<unique_Id>'
```
