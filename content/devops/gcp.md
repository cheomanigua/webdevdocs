---
title: "Google Cloud Platform"
description: "Google Cloud Platform reference commands"
---

## Command utils
- **gcloud**: primary CLI tool to create and manage Google Cloud resource. [[Info](https://cloud.google.com/sdk/gcloud/) | [Install](https://cloud.google.com/sdk/install) | [Initialize](https://cloud.google.com/sdk/docs/initializing)]
- **beta**: Beta release level of **gcloud**. Commands are functionally complete, but may still have some outstanding issues. Breaking changes to these commands may be made without notice.
- **alpha**: Alpha release level of **gcloud**. Commands are in early release and may change without notice.
- **kubectl**: tool for controlling Kubernetes clusters. [[Info]](https://cloud.google.com/kubernetes-engine/docs/quickstart) | Installation: `gcloud components install kubectl`
- **gsutil**: Python application that lets you access **Cloud Storage** from the command line. [[info](https://cloud.google.com/storage/docs/gsutil_install)]
- **bq**: Enables running queries and manipulating datasets, tables, and entities in **BigQuery** through the command line. [[Info](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-command-line)]

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
curl ifconfig.me
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

## Kubernetes Engine

In GCP, you can deploy a single container, or you can deploy a cluster. By default a cluster is created with three nodes, being one of the nodes the master node.

Cluster - Node - Pod - Container

### Set default project and zone

To work more confortably, we can set the default project and zone so we don't need to intruduce them every time we issue a command:

```
gcloud config set project [PROJECT_ID]
gcloud config set compute/zone us-central1-a
```

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
3. Verify domain ownership by adding the TXT to your domain host.
4. After verifiying the domain, create the following CNAME in your domain host: 
  - `yourdomain.com` pointing to `c.storage.googleapis.com`
  - `www.yourdomain.com` pointing to `c.storage.googleapis.com`
5. After verifying the domain ownerhips, continue with the bucket creation. You can leave the rest of steps with the default options.
6. Once the bucket is created, go to the tab **Permissions**.
7. Click on **Add members** button.
8. In the **New members** text field, type `allUsers`.
9. In the **Select a role** drop down menu, select *Cloud Storage - Storage Object Viewer*.
10. Click on **Save button**.
11. Upload your local site files and folders by clicking on the buttons **Upload files** and **Upload folder**. Note that the index page has to be in the root, not in a folder.
12. Go back to previous page by clicking on the arrow besides **Bucket details**.
13. On the right of the list of buckets, there are 3 vertical dots for each bucket. Click on the three dots for your bucket and select **Edit website configuration**.
14. Select the index page for your static site and click **Save**.

That's it. You have now your static website hosted in Cloud Store.

