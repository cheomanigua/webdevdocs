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
You can provision and configure GCE instances, GC apps, load balancers, etc with Ansible.

The Ansible GCP modules require both the `requests` and the `google-auth` libraries to be installed:

```
sudo apt install python-pip
pip install requests google-auth
```


### Creating a GCE instance

- First you need to access your [GCP Project](https://console.cloud.google.com) and download the JSON credentials file of your **Compute Engine default service account**, or create a new Compute Engine service account and download the JSON credentials file: `IAM & Admin - Service Accounts - Click on the service account - ADD KEY`. This file is the one used in the next step under variable `gcp_cred_file`.

- Create the following playbook, and name it, for example, `myplaybook.yml`:

```
---

- name: Create an instance
  hosts: localhost
  gather_facts: no
  vars:
      gcp_project: vpn-server-sasp
      gcp_cred_kind: serviceaccount
      gcp_cred_file: /home/cheo/sergio/ansible-gce/vpn-server-sasp-d5e0d0f06446.json
      zone: "us-central1-a"
      region: "us-central1"

  tasks:
   - name: create a disk
     gcp_compute_disk:
         name: 'disk-instance'
         size_gb: 10
         source_image: 'projects/ubuntu-os-cloud/global/images/family/ubuntu-1604-lts'
         zone: "{{ zone }}"
         project: "{{ gcp_project }}"
         auth_kind: "{{ gcp_cred_kind }}"
         service_account_file: "{{ gcp_cred_file }}"
         scopes:
           - https://www.googleapis.com/auth/compute
         state: present
     register: disk
   - name: create a address
     gcp_compute_address:
         name: 'address-instance'
         region: "{{ region }}"
         project: "{{ gcp_project }}"
         auth_kind: "{{ gcp_cred_kind }}"
         service_account_file: "{{ gcp_cred_file }}"
         scopes:
           - https://www.googleapis.com/auth/compute
         state: present
     register: address
   - name: create a instance
     gcp_compute_instance:
         state: present
         name: ubuntu-sasp-test
         machine_type: f1-micro
         disks:
           - auto_delete: true
             boot: true
             source: "{{ disk }}"
         network_interfaces:
             - network: null # use default
               access_configs:
                 - name: 'External NAT'
                   nat_ip: "{{ address }}"
                   type: 'ONE_TO_ONE_NAT'
         zone: "{{ zone }}"
         project: "{{ gcp_project }}"
         auth_kind: "{{ gcp_cred_kind }}"
         service_account_file: "{{ gcp_cred_file }}"
         scopes:
           - https://www.googleapis.com/auth/compute
     register: instance

   - name: Wait for SSH to come up
     wait_for: host={{ address.address }} port=22 delay=10 timeout=60

   - name: Add host to groupname
     add_host: hostname={{ address.address }} groupname=new_instances
```

- Issue the command:
```
ansible-playbook myplaybook.yml
```

TODO:
1. How to select a standard SDD disk and source image boot disk
2. Allow http and https traffic
3. How to select IP Network Tier (Premium, Standard, etc)
