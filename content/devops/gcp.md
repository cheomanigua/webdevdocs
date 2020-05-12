---
title: "Google Cloud Platform"
description: "Google Cloud Platform reference commands"
---

## General information
```
gcloud auth list
gcloud auth login --no-launch-browser
gcloud config list // check active account and project
gcloud config set account john@doe.com // switch to specified account
gcloud config set project [PROJECT_ID] // switch to specified project

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
gcloud services list --available
gcloud services enable SERVICE_NAME
```

## Compute Engine VM instance

In order to create a Compute Engine VM instance we must enable the service **compute.googleapis.com**

```
gcloud services enable compute.googleapis.com
gcloud compute instances list
gcloud compute images list
gcloud compute machine-types list
gcloud compute instances create [INSTANCE_NAME] --boot-disk-device-name=debian-10 --zone=us-central1-a --machine-type=f1-micro
gcloud compute --project=[PROJECT_ID] firewall-rules update default-allow-http --allow tcp:80,tcp:3000,tcp:8000
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

## Firewall rules

```
gcloud compute firewall-rules update default-allow-http --allow tcp:80,tcp:3000,tcp:8000
```

