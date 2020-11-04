---
title: 'OpenSSH'
description: 'OpenSSH installation and basic and advance usage'
---

OpenSSH is an open source suite for SSH, a cryptographic network protocol 
for operating network services securely over an unsecured network. 

OpenSSH can install a client and also a server. 

- To check if you have the client installed, issue this command: `which ssh`
- To check if you have the server installed, issue this command: `which sshd`

### Installation

- Client: `sudo apt install openssh-client`
- Server: `sudo apt install openssh-server`

### Basic usage

- Connect to remote machine:

`$ ssh user@remote_machine_ip`

Upon issuing the above command, you will need to authenticate to the remote server. There are two methods for authentication:

1. User and password of remote user (you need to enter user and password everytime you ssh)
2. Public and private keys (you don't need to enter user and password)


### Public and private keys

- Generate a public and private key:

`$ ssh-keygen`

By default it will generate the file `~/.ssh/id_rsa`, but you can edit the name.

You can also select to generate a passphrase for the private key, which you will need to enter everytime you ssh. However, if you want to avoid entering the passphrase, you can add the private key to the **ssh-agent**, and you will only need to enter the passphrase once:

`$ ssh-add ~/.ssh/id_rsa`

- Copy the Public Key to remote machine(example: id_rsa.pub):

`$ ssh-copy-id -i id_rsa.pub user@remote_machine_ip`


### Copying files

- How to copy a file from local to remote (from local shell):

`scp file_name user@remote_machine_ip:/home/remoteuser/`

- How to copy a file from remote to local (from local shell):

`scp user@remote_machine_ip:file_name /home/localuser/`

### Connection error when using public and private keys

If the remote machine you used to ssh has been deleted and a new system has been installed with the same user and IP address, you will get an error when trying to ssh again.

To solve this issue, you must delete the remote host from the known_hosts file:

`ssh-keygen -R 192.168.1.43 -f ~/.ssh/known_hosts`

#### How to connect over the internet

If you want to ssh connect with a machine over the internet, these are 
the basic settings:

1. Port **22** must be open. If you have 
[ufw](https://help.ubuntu.com/community/UFW) running, 
open port 22: `sudo ufw allow 22/tcp`

2. Obtain your IP address.

Type `ip addr | grep inet` to get your ip address. If it starts with 
`192.168.`, `172.16.` up to `172.31.`, or `10.`, you have a local 
(aka private) ip address. Otherwise it is public (eg 74.125.224.51). 
If it is public, you have it easy. Anyone can try and connect with a 
command like `ssh bob@74.125.224.51`.

If you are stuck with a local IP address, you need to configure your 
router to forward port 22 to your computer. Then you can go to a site 
like [http://whatismyip.org/](http://whatismyip.org/) to get your 
public ip address, and anyone who has it can try and connect with a 
command like `ssh bob@74.125.224.51`.

3. Get a permanent IP address

Sign up with [http://dyndns.com/](http://dyndns.com/) for their free 
Host Services to link a dyndns name to your ip address. I'm assuming 
here that you have not bought a static ip address from your ISP.
