---
title: 'Terraform'
description: 'Terraform reference documentation and tutorial'
---

Terraform is a tool for building, changing, and versioning infrastructure safely and efficiently. Terraform can manage existing and popular service providers as well as custom in-house solutions.

## Google Cloud Platform

In order to make requests against the GCP API, you need to authenticate. The method I'm going to use is a service account JSON key file. You must run first and then add this command in your `.bashrc`

```
export GOOGLE_APPLICATION_CREDENTIALS={{path}}
```

Where `path` is the path where you have your service account JSON key file.

### Create GCE instance

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
