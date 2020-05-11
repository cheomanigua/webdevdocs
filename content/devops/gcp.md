---
title: "Google Cloud Platform"
description: "Google Cloud Platform reference commands"
---

```
gcloud auth list
gcloud auth login --no-launch-browser
gcloud config list
gcloud config set project <myproject>
gcloud config set account john@doe.com

gcloud projects list
gcloud projects get-iam-policy <myproject>
```

### Create a project
```
gcloud projects create <myproject> --name="My Project"
gcloud beta billing accounts list
gcloud beta billing projects link <myproject> --billing-account=0X0X0X-0X0X0X-0X0X0X
gcloud services list --available
gcloud services enable SERVICE_NAME
```

### Compute Engine instance

In order to create a Compute Engine instance we must enable the service **compute.googleapis.com**

```
gcloud services enable compute.googleapis.com
gcloud compute instances list
gcloud compute images list
gcloud compute machine-types list
gcloud compute instances create <myinstance> --boot-disk-device-name=debian-10 --image-project=<myproject> --zone=us-central1-a --machine-type=f1-micro --tags http-server,https-server
gcloud compute --project=<myproject> firewall-rules create default-allow-http --allow tcp:80,tcp:3000,tcp:8000
gcloud compute instances delete <myinstance> --zone=us-central1-a
```

### Firewall rules

```
gcloud compute firewall-rules update default-allow-http --allow tcp:80,tcp:3000,tcp:8000
```