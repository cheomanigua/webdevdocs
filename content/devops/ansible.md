---
title: "Ansible"
description: "Ansible main concepts and reference"
---

## Installation on Ubuntu

```
sudo apt update
sudo apt install software-properties-common
sudo apt-add-repository --yes --update ppa:ansible/ansible
sudo apt install ansible
```
Installation [Official documentation](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installing-ansible-on-ubuntu)


## Google Cloud Platform
Ansible contains modules for managing Google Cloud Platform resources, including creating instances, controlling network access, working with persistent disks, managing load balancers, and a lot more.

The Ansible GCP modules require both the `requests` and the `google-auth` libraries to be installed:

```
sudo apt install python-pip
pip install requests google-auth
```


## Google Cloud Platform - GCE instance

In this example we are going to create a Playbook to provision and configure a GCE instance in a Debian 10 Buster disk, installing a Python Flask web server application.

These are the steps:

1. Create a service account
2. Set up OS Login
3. (Conditional) Set user permission to `~/.ansible/cp/`
4. Create Playbook

### 1. Create a Service Account

We are going to create a Service Account for provisioning and managing GCE instances via Ansible using specific roles for that purpose. 

- Create service account:
```
gcloud iam service-accounts create [NAME] \
     --display-name "Service account for Ansible"
```

- Check the full account address created:
```
gcloud iam service-accounts list
```

- Assign roles:
```
for role in \
  'roles/compute.instanceAdmin' \
  'roles/compute.instanceAdmin.v1' \
  'roles/compute.osAdminLogin' \
  'roles/iam.serviceAccountUser'
do \
  gcloud projects add-iam-policy-binding \
    [PROJECT_ID]\
    --member='serviceAccount:[NAME]@[PROJECT_ID].iam.gserviceaccount.com' \
    --role="${role}"
done
```
**Note**: If you want to use **Terraform** to provision GCE instances, you must also add the role `--role='roles/compute.networkAdmin'`

### 2. Set up OS Login

OS Login lets you securely SSH into GCE instances when using a service account

1. Enable OS Login in project-wide metadata so that it applies to all of the instances in your project
```
gcloud compute project-info add-metadata \
    --metadata enable-oslogin=TRUE
```

2. Generating Service Account Key file
```
gcloud iam service-accounts keys create --iam-account [ACCOUNT] [FILE].json
```

The [FILE].json file will be downloaded into the path directory where you ran the command.

3. Activate service account 
```
gcloud auth activate-service-account --key-file=[FILE].json
```

4. Adding SSH keys to a user account
```
gcloud config set account [ACCOUNT]
gcloud compute os-login ssh-keys add --key-file ~/.ssh/id_rsa.pub
```

5. Switch back from service account
```
gcloud config set account your@gmail.com
```

6. Gather service account `uniqueId`
```
gcloud iam service-accounts describe \
    [ACCOUNT] \
        --format='value(uniqueId)'
```

7. (Optional) SSH into an instance using a service account

If you have previous instances created, you can SSH into them:

```
ssh -i .ssh/id_rsa [sa_<uniqueId>]@[INSTANCE_IP]
```

Note that we prefixed the `uniqueId` with `sa_`

### 3. (Conditional) Set user permissions to .ansible/cp/ 

If you are using a Playbook with `add_host` module, you must give user permissions to `~/.ansible/cp/` directory:

```
sudo chown -R $USER:$USER ~/.ansible/cp
```

### 4. Create Playbook

You can download the git repository at [git repository](git repository)

`cd` into the downloaded directory and run:

```
ansible-playbook [FILE].yml -u [sa_<uniqueId>] 
```

### Useful commands for managing accounts

```
gcloud auth list
gcloud config list
gcloud config configurations list
gcloud config set account [your@gmail.com] or [ACCOUNT]
gcloud iam service-accounts list
gcloud iam service-accounts describe [ACCOUNT]
gcloud iam service-accounts keys list --iam-account=[ACCOUNT]
gcloud projects get-iam-policy [PROJECT_ID]
```


## Docker

If you want to install **Docker** via **Ansible** in a remote machine, you first must install the **python docker** module and the **Ansible Galaxy** plugin in your local machine:
```
sudo apt install python-docker
ansible-galaxy collection install community.general
```

You can check a whole Playbook project that provisions a GCE instance, install docker, creates an image and run a container: [https://github.com/cheomanigua/ansible/tree/main/nginx](https://github.com/cheomanigua/ansible/tree/main/nginx)


### TODO

1. **Solve issue when becoming an unprivilegded user and trying to run docker command**

`FAILED! => {"msg": "Failed to set permissions on the temporary files Ansible needs to create when becoming an unprivileged user (rc: 1, err: chown: changing ownership of '/var/tmp/ansible-tmp-1603916306.07-23747-73946564034153/': Operation not permitted`

- Check POSIX acl at [Understanding privilege escalation: become](https://docs.ansible.com/ansible/latest/user_guide/become.html#risks-of-becoming-an-unprivileged-user)
- Check [ansible.posix.authorized_key](https://docs.ansible.com/ansible/latest/collections/ansible/posix/authorized_key_module.html) module.
- Check [ansible.posix.acl](https://docs.ansible.com/ansible/latest/collections/ansible/posix/acl_module.html#ansible-collections-ansible-posix-acl-module) module.


## GCE Dynamic Inventory

The best way to interact with your hosts is to use the **gcp_compute** inventory plugin, which dynamically queries GCE and tells Ansible what nodes can be managed.

To be able to use this GCE dynamic inventory plugin, you need to enable it first by adding `gcp_compute` in the **[inventory]** section of the **ansible.cfg** file:

```
[inventory]
enable_plugins = host_list, virtualbox, yaml, constructed, gcp_compute
```

Then, create a file that ends in `.gcp.yml` in your root directory: `<filename>.gcp.yml`

The gcp_compute inventory script takes in the same authentication information as any module.

Here’s an example of a valid inventory file:

```
plugin: gcp_compute
zones: # populate inventory with instances in these regions
  - us-central1-a
projects:
  - vpn-server-sasp
# filters:
#   - machineType = n1-standard-1
#   - scheduling.automaticRestart = true AND machineType = n1-standard-1
service_account_file: /home/cheo/sergio/gce_sa_keys/ansible-sa.json
  #service_account_email: ansible-sa@vpn-server-sasp.iam.gserviceaccount.com
auth_kind: serviceaccount
scopes:
 - 'https://www.googleapis.com/auth/cloud-platform'
 - 'https://www.googleapis.com/auth/compute.readonly'
keyed_groups:
  # Create groups from GCE labels
  - prefix: gcp
    key: labels
  - prefix: zone 
    key: zone 
  # Create groups by filtering key-values on labels and lists
  - groups:
    cms: "'server' in (labels|list)"
    development: "'python' in name"
hostnames:
  # List host by name instead of the default public ip
  - name
compose:
  # Set an inventory parameter to use the Public IP address to connect to the host
  # For Private ip use "networkInterfaces[0].networkIP"
  ansible_host: networkInterfaces[0].accessConfigs[0].natIP
```
Executing `ansible-inventory --list -i <filename>.gcp.yml --graph` will show a list of GCP instances based on filters, labels, zones, etc populated in the inventory file. 

You can also execute ad hoc commands:
```
ansible -i <filename>.gcp.yml all -m ping -u [sa_<uniqueId>]
ansible -i <filename>.gcp.yml all -m shell -a 'uname -a' -u [sa_<uniqueId>]
```

You can add `<filename>.gcp.yml` under `[defaults]` in the `ansible.cfg` to avoid typing `-i <filename>.gcp.yml` each time:
```
[inventory]
enable_plugins = host_list, virtualbox, yaml, constructed, gcp_compute

[defaults]
inventory = <filename>.gcp.yml
```
