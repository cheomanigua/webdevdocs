Vagrant is the Docker equivalent for VMs. Instead of instantiating containers, it instantiates VMs.

Vagrant by default use **Virtual Box** as a provider, so you need to have **Virtual Box** installed in your local machine. You can use other providers by using plugins.

Vagrant needs a Vagrant config file in order to power up. You have to launch the following commands from a directory with the Vagrang config file present.

- Launch a Vagrant machine
```
vagrant up
```

- Shutdown a Vagrant machine
```
vagrant halt
```

- Check status of VMs within Vagrant machine
```
vagrant status
```

- SSH into a VM
```
vagrant ssh [VM]
```

## Error UID

If you get an UID error where the UID of the machine does not match with the UID of the current user, edit this file for each VM and add your UID:

- `.vagrant/machines/[VM_NAME]/virtualbox/creator_uid`
