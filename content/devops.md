---
title: "DevOps"
description: "DevOps main concepts"
---
import { Message } from '@theme-ui/components';

** ¿Qué es Docker Compose? **
Docker Compose permite desplegar y administrar aplicaciones compuestas por varios contenedores relacionados entre sí.

** En Docker, ¿cómo se ve el último contenedor creado? **

`docker ps -l`

** En Docker, ¿cómo ejecutar un contenedor exponiendo los puertos de forma automática? **

`docker run -dtiP httpd`

** ¿Qué motor utiliza Vagrant por defecto para crear máquinas virtuales? **
Virtualbox

** ¿Qué es Entrega Continua (Continuos Delivery)? **
La práctica de tener automatizado todos los procesos de validación del software y su despliegue en producción

** ¿Qué es un Pod en kubernetes?**

** ¿Qué es un service en kubernetes? **
Define como acceder a un pod o un grupo de Pods

** ¿Qué es Ansible? **
Es una herramienta que nos permite gestionar configuraciones, aprovisionamiento de recursos y despliegue automático de aplicaciones

** ¿Qué comando de Linux se puede utilizar para reparar un apagado incorrecto, o para reparar particiones corruptas despues de un mal apagado? **

`fsck`

** ¿Cuál es el orquestador de contenedores en Docker CE? **
Swarm

** ¿Qué comando se utilizar para actuar con Kubernetes? **
kubectl

# Docker

- **docker version**: Checks docker version installed
- **docker images**: Lists all available images in our host
- **docker pull nginx**: Pull the nginx image from docker hub to our host
- **docker rmi nginx**: Removes nginx image from our host
- **docker ps**: Lists all running containers
- **docker ps -a**: Lists all containers, running or not
- **docker run nginx**: Starts a container from the nginx image. If the image is not in our host, it will pull nginx image from docker hub and then run the nginx container
- **docker run -d nginx**: Starts a container in the background from the nginx image. If the image is not in our host, it will pull nginx image from docker hub and then run the nginx container
- **docker stop 'container_name'**: Stops a running container
- **docker rm 'container_name'**: Deletes a container 
