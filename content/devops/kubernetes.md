---
title: "Kubernetes"
description: "Kubernetes installation and configuration"
---

For this tutorial you need to install **Vagrant** and **Virtual Box** in your local machine.

We'll generate three virtual machines with Centos 7.6 installed using a *Vagrantfile*. 

Also, in the three VMs, we will install *Docker*, and disable *selinux* and *firewalld* using this file: *playbook_centos_install_docker.yaml*

1. Get the files:

```
mkdir MyCluster && cd MyCluster

wget https://raw.githubusercontent.com/cheomanigua/webdevdocs/master/aux/Vagrantfile

wget https://raw.githubusercontent.com/cheomanigua/webdevdocs/master/aux/playbook_centos_install_docker.yaml
```

2. Create the VMs:
```
vagrant up
```

3. How to access the VMs:
```
vagrant status

vagrant ssh master
or
vagrant ssh worker1
or
vagrant ssh worker2
```

4. Login as root user once inside the VM:

```
su -
```
The password is **vagrant** for all the three VMs.

## Common configuration

The next steps have to be performed logged as root in all the three VMs

1. Configure Kubernetes repository

Copy the whole text and paste it in the command line:

```
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
EOF
```

2. Install **kubelet**, **kubeadm** and **kubectl**
```
yum install -y kubelet kubeadm kubectl
systemctl enable kubelet
systemctl start kubelet
```

3. Disable SWAP
```
sed -i '/swap/d' /etc/fstab
swapoff -a
```

4. Set the *net.bridge.bridge-nf-call-iptables* to ‘1’ in your sysctl config file. This ensures that packets are properly processed by IP tables during filtering and port forwarding.

```
echo 'net.bridge.bridge-nf-call-ip6tables = 1' >> /etc/sysctl.conf
echo 'net.bridge.bridge-nf-call-iptables = 1' >> /etc/sysctl.conf
sysctl -p
```

## How to Deploy a Kubernetes Cluster

The next steps have to be performed logged as root in **master** VM

1. Initiate **kubeadm**
```
kubeadm init --ignore-preflight-errors=SystemVerification --apiserver-advertise-address=192.168.2.10 --pod-network-cidr=10.244.0.0/16
```

Don't forget to copy and keep the *'kubeadm join'* token and hash

2. Configure **kubectl**
```
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

3. Configure **flannel**

```
cd /root

curl -Lo kube-flannel.yml https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

sed -i.bak -e "s/ip-masq/ip-masq\\n - --iface=eth1/g" kube-flannel.yml
```

 **IMPORTANT**: Edit **kube-flannel.yml** and find all the lines with '`- --iface=eth1`'. These lines have tab indentation, which will yield an error when running `kubectl create`. Remove the tab indentation and add space indentation instead.

 Finally:
 ```
kubectl create -f kube-flannel.yml
```

It will take a minute or so for the pods and nodes to be ready.

4. Check status of cluster
```
kubectl get pods --all-namespaces
kubectl get nodes
```

## Adding a Worker Node to Cluster

1. Login as root in **worker1** node

```
vagrant ssh worker1
su -
```

The password is *vagrant*

2. Join worker1 node to cluster
```
kubeadm join 192.168.2.10:6443 --token blablabla --discovery-token-ca-cert-hash sha256:blablabla
```

The token and hash are the ones generated when running `kubeadm init`

You can repeat the steps for the **worker2** node.

Once finished, you can check the status of the cluster from the master node:
```
su -
kubectl get pods --all-namespaces
kubectl get nodes
```

### Removing a Worker Node from the Cluster
```
kubectl drain worker2 --delete-local-data --ignoredaemonsets
```

### Delete Worker Node definitely from Cluster
```
kubectl delete node worker2
```

### Generate new token

If the token has expired, you can generate a new one:
```
kubeadm token create --print-join-command
```

You can list all tokens:
```
kubeadm token list
```

## Deploying an application to the Cluster

From the **master** node as root, issue:
```
kubectl run my-nginx --image=nbrown/nginxhello:1.12.1 --port=80

kubectl get pod

kubectl expose pod my-nginx --type=NodePort --name my-nginx-service

kubectl get service

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
kubernetes ClusterIP 10.96.0.1 <none> 443/TCP 21m
my-nginx-service NodePort 10.109.2.145 <none> 80:31606/TCP 32s
```

We can visit the application at [http://192.168.2.11:31606](http://192.168.2.11:31606)
