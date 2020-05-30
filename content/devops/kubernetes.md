---
title: "Kubernetes"
description: "Kubernetes installation and configuration"
---

For this tutorial, you need to install in your local machine **Vagrant** and **Virtual Box**

We'll generate three virtual machines using a *Vagrantfile* which will instantiatte the VMs with *Docker* installed, and *selinux* and *firewalld* disabled. Another file will be need for the *Vagrantfile* to succeed: *playbook_centos_install_docker.yaml*

Follow these steps:

```
mkdir MyCluster && cd MyCluster
wget 