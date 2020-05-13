---
title: "ACE Certificate"
description: "Associate Cloud Engineer exam basic concepts"
---

## GCP Compute

* **App Engine**: Run applications for you (no need to configure servers or other resourses) - PaaS
* **Compute Engine**: virtual machines - IaaS
* **Kubernetes Engine**: orchestration platform that manages clusters and organize how containers can run efficiently on a cluster
* **Cloud Functions**: serverless, event-driven computing service

## GCP Storage

* NoSQL Databases
  + **Bigtable**: wide column database
  + **Datastore**: document database
  + **Firestore** (next generation): document database 
* Relational Databases
  + **SQL**: Managed database service (MySQL and PostgreSQL)
  + **Spanner**: Horizontally scalable global relational database
* File System
  + **Filestore**: Managed network file system (good for sharing)
* Object System
  + **Storage**: Data pockets for large amount of unestructured data.

**Hierarchy**

Organization -> Folder -> Project -> Resources

# IAM

## Identity

Represents a user or entity that has privileges to perform actions in GCP. There are 4 types of identities:

### Google Account

* Represents developer, admin or other person. 
* Email address associate with Google: myusername@gmail.com

### Cloud Identity or G Suite Account

* G Suite user is a member of an organization's G Suite domain
* Cloud Identity like G Suite domain, but without access to G Suite services.

### Google Group

* Collections of identities
* Useful for assigning roles to multiple users
* Identities in group acquire roles assigned to the group
* Identities lose roles when removed from group

### Service Account

* Account associated with an application or instance rather than a user
* Can create as many as needed
* Represented as an email: 727080621142-compute@developer.gserviceaccount.com

## Access Control Concepts

* Resources
* Permissions
* Roles
  + Predefined
  + Custom
  + Primitive

## Policies

* Collections of statements that define which users have access to some resource
* Attached to a resource
* Roles attached to identitites, policies attached to resources
* Policy hierarchy

# Compute Engine

## Instance Groups

* Collection of instances that are managed as single entity
* 2 Types:
  + managed instance group
  + unmanaged instance group

	

### Managed Instance Group

  + Multiple identical VMs
  + Configuration defined in instance template

Features:

  + Autoscaling
  + Autohealing
  + Multi-zone deployments
  + Auto-updating

### Unmanaged Instance Group (for legacy clusters)

  + Multiple possibly heterogeneous VMs
  + Used to apply load balancing accross heterogenerous group of instances
  + In generl, recommended for legacy clusters only
  + No autoscaling, autohealing, or auto-updating

### Autoscaling Configuration

  + Automatically add or remove instances based on workload
  + Set minimum and maximum number of instances
  + Based on target utilization
    - CPU utilization
    - HTTP load balancing servicing capacity
    - Stackdriver metrics

# Kubernetes Engine

* Managed service
* Provides Kubernetes Clusters
* Kubernetes
  + Runs containers on cluster of virtual or physical machines (VMs in GCP)
  + Known as container orchestration

### Features

  + Load balancing of workloads
  + Node pools to segment nodes within a cluster
  + Automatic scaling and updating
  + Stackdriver monitoring

### Kubernetes Process Objects

Services wraps Deployments which consists of Pods.

  + **Pods**:	Mecanism to encapsulate and run a container
  + **Deployment**: Especification of how pods run (pod replicas, etc)
  + **Services**: Mecanism for service discovery. For example, a way of assosiating a particular IP with a particular pod.

### Kubernetes Storage Objects

  + Persistent Volumes
  + Persistent Volume Claims
	
# App Engine

* Platform as a Service
* Serveless managed service
* Well suited to run microservices
* Originally limited to language specific runtimes
* Can now run containers
* Two types:
  + App Engine Standard
  + App Engine Flexible

### App Engine Standard

* Run applications in preconfigured containers
* Applications run in secure sandbox
* Autoscales
* Standard Runtines: Python, Java, Node.js, PHP, Ruby, Go
* Components: Application, Service, Version and Instance

### App Engine Flexible

* Runs customized Docker containers
* Not as restricted as sandbox used in App Engine Standard
* Support for Java, Python, Ruby, PHP and other languages but can be customized
* Run locally without App Engine SDK
* Custom health checks
* Higher CPU and memory limits
* Applications are run in regional managed instance groups, not zonal managed instance groups

### App Engine Scaling

* Applications execute on App Engine managed instances
* Scale based on load when running dynamic instances
* Cona configure resident instances to run at all times but when autoscaling enabled, use dynamic instances

#### Configuring Autoscaling

* Configured in `app.yaml` 
* Configuration options include:
  + Target_cpu_utilization
  + Target_throughput_utilization
  + Max_concurrent_requests
  + Max_pending-latency
  + Min_pending_latency

### App Engine Traffic Splitting

* If more than one version of an app is running, you can scplit traffic between versions
* 3 ways to split traffic
  + IP address
  + HTTP cookie
  + Random selection

####  Traffic Splitting by IP address

* Provides stickiness so all traffic from IP address handled by same instances
* Can create problems if state is maintained and user changes IP address

#### Traffic Splitting by Cookie (preferred)

* HTTP request header for cookie named GOOGAPPUID contains hash value
* Hash value determines instance to route traffic too
* Tolerates user changing IP address

#### Traffic Splitting by Random Selection

* Useful for stateless applications
* No need to ensure traffic from a client always goes to the same instance
* Used when no GOOGAPPUID cookie

 

# Cloud Functions

* Serveless compute service
* Execute code in response to events based on triggers
* Available for events in:
  + Cloud Storate
  + Cloud Pub/Sub
  + HTTP
  + Firebase
  + Stackdriver Logging

### Events

* Storage
  + Upload
  + Delete
  + Archive
* Cloud Pub/Sub
  + Publish a message
* HTTP
  + POST
  + GET
  + PUT
  + DELETE
  + OPTIONS

### Triggers

* Declaration of interest in an event
* Bind function to a trigger to execute it
* May be associated with a resource
  + Cloud Storage bucket
  + Cloud Pub/Sub topic
  + Etc

### Functions

* Node.js
* Python
* Go

# GCP Storage

## Types of storage

### Cloud Storage

#### Storage

* Unstructure data
  + Images
  + Video
  + Text
* Archived data
* Temporary storage between services
* Global access, Web accessible

### Managed SQL Database

Relational databases:

* Structured data
* ACID transactions
* Complex queries
* Joins

#### Cloud SQL

* Up to 10 TB
* Regional

#### Cloud Spanner

* Horizontally scalable
* Global

### Managed NoSQL Database

NoSQL databases:

* Semi-structured, flexible schema
* No joins

#### Datastore/Firestore

* Document, JSON structure
* Hierarchical structure

#### Bigtable

* Petabyte scale
* Wide column
* Low latency writes
* Analytics

### Analytic Database

#### BigQuery

* Data warehousing
* Petabyte scale
* SQL query language
* Some support for joins
* Not transactional

## Know about Storage

* Object vs Persistent Disk vs Managed Database
* Cloud Storage
  + Regional, multi-regional, Nearline, Coldline
  + Lifecycle policies
  + gsutil
* Persistents Disks
  + Used with VMs
  + Persist data even when VM shuts down

SELECT
  name, gender, 
  SUM(number) AS total
FROM
`bigquery-public-data.usa_names.usa_1910_2013` 
GROUP BY
  name, gender
ORDER BY
  total DESC
LIMIT
  10

Storage Transfer Service, Transfer Service for on-premises data
Transfer Appliance in the new Data Transfer section of the Cloud Console. 

## Networking

* Q: What service allows VPCs to share resources if the VPCs are in different organizations?
* A: VPC Peering
* Q: When creating a VPC and creating default subnets, where are the subnets created?
* A: In all regions
* Q: What two resources must be created to implement a GCP VPN?
* A: VPN Gateway and a tunnel

## Basics

### IP Address

* 2 parts
  + Routing prefix
  + Device indentifier
* Routing prefix specified in CIDR notation
  + 192.168.2.1/24
  + 24 bits used for routing prefix/subnet
  + 8 bits used for device address

### Understand about Networking

* Purpose of VPC
* VPC Peering vs Shared VPC (same organization)
* Hybrid Cloud implementation options:
  + VPN
  + Cloud Interconnect
  + Peering

### Virtual Private Cloud (VPC)

  + Global resource
  + Subnets in regions
  + Resources can communicate using private IP addressing
  + Can share VPCs within organization
  + Can peer VPCs accross organizations

### Virtual Private Network (VPN)

  + LInks VPC networks to on-premises network
  + Implemented with IPSec
  + Traffic routed over public internet
  + Up to 3 Gbps

### Cloud Interconnect

  + Google networking service
  + Connect to Google network
    - Directly, at least 10Gbps, up to 100 Gbps
    - Partner, from 50 Mbps to 10 Gbps

### Peering

  + Low level network connection
  + Linking networks
  + Traffic routed using BGP
  + Does not use GCP objects

### Load Balancers

  + Global or regional
  + External or Internal
  + Traffic type
    - 3 Global: HTTP(S), SSL Proxy, TCP Proxy
    - 2 Regional
      - Internal TCP/UDP (only internal load balancer)
      - Network TCP/UDP

When configuring a Load Balancer:

  + Need an instance group already configured
  + Specify the type of load balancer
  + Associate instance group with load balancer
  + Specify health check
  + Specify back end service
  + Specify front end service

### Cloud DNS

When creating a DNS zone, by default two records are greated: NS and SOA

## Operations (Stackdriver)

* Q: What Stackdriver service is used to monitor application and host performance metrics?
* A: Monitor
* Q: What Stackdriver service is used to search for information in the audit log?
* A: Logging
* Q: What Stackdriver service is used to monitor variables in running programs?
* A: Debug
* Q: What Stackdriver service is used to analyze performance issues in distributed systems?
* A: Trace

# What you need to know in depth

### IAM

* Roles and permission
* Identity types and when to use them

### Networking

* VPC, Subnets, CIDR Blocks
* Firewalls, DNS
* VPN, Cloud Interconnect, Peering

### Compute

* Compute Engine
* Kubernetes Engine
* App Engine
* Cloud Functions

### Storage

* Cloud Storage
* BigQuery

### Cloud Pub/Sub

 Used for decoupling services and allow one service to write messages to a topic, and another application to consume those messages

### Stackdriver

## Know how to choose between

* Cloud SQL
* Cloud Spanner
* Cloud Datastore/Firestore
* BigQuery
* Cloud Storage

## Know when to use

* Cloud Datproc: managed Hadoop and Spark service
* Cloud Dataflow: stream processing and batch processing platform
* Deployment Manager
