---
title: "Kubernetes"
description: "Kubernetes installation and configuration"
---

For this tutorial, you need to install in your local machine **Vagrant** and **Virtual Box**

We'll generate three virtual machines using a *Vagrantfile* which will instantiatte the VMs with *Docker* installed, and *selinux* and *firewalld* disabled. Another file will be need for the *Vagrantfile* to succeed: *playbook_centos_install_docker.yaml*

1. Get config files:

```
mkdir MyCluster && cd MyCluster

curl -Lo Vagrantfile https://raw.githubusercontent.com/cheomanigua/webdevdocs/master/aux/Vagrantfile

curl -Lo playbook_centos_install_docker.yaml https://raw.githubusercontent.com/cheomanigua/webdevdocs/master/aux/playbook_centos_install_docker.yaml
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

4. Login as root user in the VMs:
```
su -
```
The password is **vagrant** for all the three VMs.

## Common configuration

The next steps have to be performed logged as root in all the three VMs

1. Configure Kubernetes repository
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

2. Install kubelet, kubeadm and kubectl
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

 Edit **kube-flannel.yml** and find all the lines with `- --iface=eth1`. These lines have tab indentation, which will yield an error when running `kubectl create`. Remove the tab indentation and add space indentation instead.

 Finally:
 ```
kubectl create -f kube-flannel.yml
```

4. Check status of cluster
```
kubectl get pods --all-namespaces
kubectl get nodes
```

## Adding a Worker Node to Cluster

1. Login as root in **worker1** VM

```
vagrant ssh worker1
su -
```

The password if *vagrant*

2. Join worker1 node to cluster
```
kubeadm join 192.168.2.10:6443 --token blablabla --discovery-token-ca-cert-hash sha256:blablabla
```

The token and hash are the ones generated when running `kubeadm init`

You can repeat the steps for the **worker2** node.

Once finished, you can check the status of the cluster from the master node:
```
kubectl get pods --all-namespaces
kubectl get nodes
```

### Removing a Worker Node from the Cluster
```
kubectl drain worker2 --delete-local-data --ignoredaemonsets
```

### Delete Worker Node defenitely from Cluster
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
```
[root@master ~]# kubectl run my-nginx --image=nbrown/nginxhello:1.12.1 --port=80

[root@master ~]# kubectl get pod

[root@master ~]# kubectl expose pod my-nginx --type=NodePort --name my-nginx-service

[root@master ~]# kubectl get service

NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE
kubernetes ClusterIP 10.96.0.1 <none> 443/TCP 21m
my-nginx-service NodePort 10.109.2.145 <none> 80:31606/TCP 32s
```

We can visit the application at [http://192.168.2.11:31606](http://192.168.2.11:31606)