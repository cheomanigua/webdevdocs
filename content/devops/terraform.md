---
title: 'Terraform'
description: 'Terraform reference documentation and tutorial'
---

Terraform is a tool for building, changing, and versioning infrastructure safely and efficiently. Terraform can manage existing and popular service providers as well as custom in-house solutions.

## Google Cloud Platform

In order to make requests against the GCP API, you need to authenticate with a GCP **service account** JSON key file.

### 1. Create a Service Account

This **service account** will provision GCE instances via Terraform using specific roles for that purpose.

1. Create service account:
```
gcloud iam service-accounts create [NAME] \
     --display-name "Service account for Ansible"
```

2. Check the full **service account** address created:
```
gcloud iam service-accounts list
```

3. Assign roles:
```
for role in \
  'roles/compute.instanceAdmin' \
  'roles/compute.instanceAdmin.v1' \
  'roles/compute.networkAdmin' \
  'roles/iam.serviceAccountUser'
do \
  gcloud projects add-iam-policy-binding \
    [PROJECT_ID]\
    --member='serviceAccount:[NAME]@[PROJECT_ID].iam.gserviceaccount.com' \
    --role="${role}"
done
```

4. Generate **service account** JSON key file
```
gcloud iam service-accounts keys create --iam-account [ACCOUNT] [FILE].json
```

The `[FILE].json` file will be downloaded into the path directory where you ran the command.

5. Activate service account
```
gcloud auth activate-service-account --key-file=[FILE].json
```

### Create GCE instance

**Note**: The source code can be found at [https://github.com/cheomanigua/devops/tree/master/terraform/gcp](https://github.com/cheomanigua/devops/tree/master/terraform/gcp)

1. Create a directory for your Terraform project, and create the file `main.tf`:

```
provider "google" {
  project = "vpn-server-sasp"
  region  = "us-central1"
  zone    = "us-central1-a"
}

#resource "google_compute_address" "static" {
#  name = "ipv4-address"
#}

resource "google_compute_instance" "vm_instance" {
  name         = "terraform-instance"
  machine_type = "f1-micro"
  tags = ["http-server", "https-server"]
  can_ip_forward = "true"

  metadata = {
    enable-oslogin: true
  }

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-10"
      size = 10
      type = "pd-standard"
    }
  }

  network_interface {
      # Creates a random external ephemeral address. To create static ip address uncomment the commented lines on this file.
      network = "default"
      access_config {
      }
    }

  #network_interface {
  #  # A default network is created for all GCP projects
  #  network = google_compute_network.vpc_network.self_link
  #  access_config {
  #    nat_ip = google_compute_address.static.address
  #  }
  #}
}

resource "google_compute_network" "vpc_network" {
  name                    = "terraform-network"
  auto_create_subnetworks = "true"
}
```

2. Initialize the project directory to let Terraform find out which modules to use by checking your `main.tf`:
```
terraform init
```

3. Generate a plan 

You can generate a plan to check if there is any error in your `main.tf` by running:
```
terraform plan 
```

When you fix all the errors, you have to send the plan to a file:
```
terraform plan -out=<filename>
```
You can then see the plan by running:
```
terraform show <filename>
```

4. Create the GCE instance

You can now create the instance by running:
```
terraform apply <filename>
```

Your instance will be created and a new file will be created: `terraform.tfstate`

`terraform.tfstate` keeps the state of your infrastructure. This state is required to modify and destroy your infrastructure, so keep it safe. To inspect the complete state run:
```
terraform show
```

### Delete GCE instance

You can check what is going to be deleted by running:
```
terraform plan -destroy
```

Once you are sure that you want to destroy a infrastructure managed by Terraform, issue:
```
terrafrom destroy
```
