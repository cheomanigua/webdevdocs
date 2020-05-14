---
title: "Docker"
description: "Docker main concepts and reference"
---

### Post installation

After installation, you have to make the user member of group `docker`:
```
sudo usermod -aG docker $USER
```

### Commands

- **docker version**: Checks docker version installed
- **docker info**: Info about the docker environment 
- **docker images**: Lists all available images in our host
- **docker pull nginx**: Pull the nginx image from docker hub to our host
- **docker rmi nginx**: Removes nginx image from our host
- **docker ps**: Lists all running containers
- **docker ps -a**: Lists all containers, running or not
- **docker run nginx**: Starts a container from the nginx image. If the image is not in our host, it will pull nginx image from docker hub and then run the nginx container
- **docker run -d nginx**: Starts a container in the background from the nginx image. If the image is not in our host, it will pull nginx image from docker hub and then run the nginx container
- **docker stop 'container_name'**: Stops a running container
- **docker rm 'container_name'**: Remove a non running container 
- **docker rm 'container_name' -f**: Remove a container 
- **docker rm $(docker ps -aq)**: Remove all non running containers
- **docker rm $(docker ps -aq) -f**: Remove all containers
- **docker login -u "username"**: Access your Docker Hub repository
- **docker exec -it 'container name' bash**: Access container file system command prompt 

### Creating a nginx container

`docker run -d -p 8080:80 --name mynginx nginx`

To run the server, we go to **localhost:8080**

To bash access the container, we issue:

`docker exec -it mynginx bash`

Pages are served from `/usr/share/nginx/html`

## Volumes

`docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html --name mywebsite nginx`

This command does the following:

- Create a **nginx** container in the background called **mywebsite**
- Use port 8080 to access the website
- Create a volume on the local directory where we issue the command (that's what `$(pwd)` does), for instance `~/.Public/www`
- The volume will have direct access to the container nginx server path `/usr/share/nginx/html/`. We can now create **index.html** and other files and directories directly in `~/.Public/www` 
- We can visit the website on **localhost:8080**


## Building our own image

Providing we have these files in the directory where we are going to issue the build command:
- about.html
- contact.html
- index.html
- services.html

We create and edit the following file: `Dockerfile`

```
FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY . .
```

And now we issue the build command:

`docker image build -t nginx-mywebsite .`

### Pushing our new own created image to Docker Hub

`docker push nginx-mywebsite`