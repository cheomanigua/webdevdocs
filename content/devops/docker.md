---
title: "Docker"
description: "Docker main concepts and reference"
---

### Post installation

After installation, you have to make the user member of group `docker` :

``` 
sudo usermod -aG docker $USER
```

### Commands

#### General

* **docker version**: Checks docker version installed
* **docker info**: Info about the docker environment
* **docker login -u "username"**: Access your Docker Hub repository

#### Images

* **docker images**: Lists all available images in our host
* **docker pull nginx**: Pull the nginx image from docker hub to our host
* **docker rmi nginx**: Removes nginx image from our host

#### Containers

* **docker ps**: Lists all running containers
* **docker ps -a**: Lists all containers, running or not
* **docker run nginx**: Starts a container from the nginx image. If the image is not in our host, it will pull nginx image from docker hub and then run the nginx container
* **docker run -d nginx**: Starts a container in the background from the nginx image. If the image is not in our host, it will pull nginx image from docker hub and then run the nginx container
* **docker stop 'container_name'**: Stops a running container
* **docker rm 'container_name'**: Remove a non running container 
* **docker rm 'container_name' -f**: Remove a container, running or not 
* **docker rm $(docker ps -aq)**: Remove all non running containers
* **docker rm $(docker ps -aq) -f**: Remove all containers, running or not
* **docker exec -it 'container name' bash**: Access container file system command prompt
* **docker create nginx top**: Creates a writeable container layer over the specified image and prepares it for running the specified command.

### Creating a nginx container

`docker run -d -p 8080:80 --name mynginx nginx` 

To run the server, we go to **localhost:8080**

To bash access the container, we issue:

`docker exec -it mynginx bash` 

Pages are served from `/usr/share/nginx/html` 

## Volumes

### Volumes for development use

* Dockerfile:
```
FROM php:7.2-apache
COPY src/ /var/www/html/
EXPOSE 80
```
**home/user/mywebsite:~$**: `docker build -t myimage .`

The above command does the following:
* Build an image of an apache server with php
* Copy the content of `/home/user/mywebsite/src/` into the the apache `/var/www/html/` serving directory
* Expose port 80 so it can be reached

Next we run:

`docker run -d -p 8080:80 -v /home/user/mywebsite/src/:/usr/share/nginx/html --name mywebsite myimage` 

The above command does the following:

* Create a **nginx** container in the background called **mywebsite**
* Use port 8080 to access the website
* Mount the container directory `/var/www/html/` on to local directory `/home/user/mywebsite/src/` where the source code of the site is held. 
* We can now create and edit **index.php** and other files and directories directly in `/home/user/mywebsite/src/`, and it will update automatically.
* We can visit the website on **localhost:8080**

### Volumes for persistent storage

## Building our own image

Providing we have these files in the directory where we are going to issue the build command:

* about.html
* contact.html
* index.html
* services.html

We create and edit the following file: `Dockerfile` 

``` 
FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY . .
```

And now we issue the build command:

`docker image build -t nginx-mywebsite .` 

### Pushing our new created image to Docker Hub

``` 
docker tag nginx-mywebsite nginx-mywebsite:v1
docker tag nginx-mywebsite <dockerhubusername>/<nginx-mywebsite>|<fooimage>
docker login
docker push <dockerhubusername>/nginx-mywebsite
docker logout
```

**Note**: It takes 24-48 hours for Docker Hub to index the image


## Docker compose

```
docker-compose up -d
docker-compose down
docker-compose down --volumes
```

# Tips and Hints

* If there's a need to run Docker containers in production without Kubernetes, use the `--init` flag upon `docker run` . This injects a `PID 1` process, which handles its terminated children correctly, into the container to run.

* There are four important files that acts as contracts between deverlopers and sys admins:
  + **Dockerfile**: To build or application image
  + **docker-compose.yml**: To execute our application
  + **Dockerfile.test**: To build our application test image
  + **docker-test.yml**: Test our application
