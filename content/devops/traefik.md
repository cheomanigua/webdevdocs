### Set up docker-compose file

**Note**: Don't name any service if you want to scale them.

**docker-compose.yml**
```
version: "3"
services:

  traefik:
    image: traefik:alpine
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ${PWD}/traefik.toml:/etc/traefik/traefik.toml
    ports:
      - 80:80
      - 8080:8080

  web:
    image: httpd
    restart: always
```


**traefik.toml**
```
defaultEntryPoints = ["http"]
logLevel = "INFO"

sendAnonymousUsage = true

[docker]
  endpoint = "unix:///var/run/docker.sock"
  exposedByDefault = true

# enabling api is not absolutely necessary, it is needed only if you need dashboard
[api]
dashboard = true
entrypoint = "dashboard"

[entryPoints]
  [entryPoints.http]
  address = ":80"

  [entryPoints.dashboard]
  address = ":8080"
```

### Launch the containers

```
docker-compose up -d
```

### Inspect Traefik dashboard

Go to [localhost:8080](localhost:8080)

The Traefik dashboards present the frontends and backends for Traefik and httpd services. As you can see, Traefik automaticaly set the name of the Route Rule. It joins the name of the service and the name of the directory where the config files are located: `Host: [service].[directory]`

We can add a service to the `/etc/hosts` file:
```
127.0.0.1 [service].[directory]
```

We can now curl [service].[directory]

### Set up custom domains

Instead of using the domain that *Traefik* automatically create, we can set up custome domains.

**docker-compose.yml**
```
version: "3"
services:

  traefik:
    image: traefik:alpine
    labels:
      - traefik.frontend.rule=Host:traefik.com
      - traefik.port=8080
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ${PWD}/traefik.toml:/etc/traefik/traefik.toml
    ports:
      - 80:80
      - 8080:8080

  web:
    image: httpd
    labels:
      - traefik.frontend.rule=Host:apache.com
      - traefik.port=80
    restart: always
```

We can now access *Traefik* dashboard on [traefik.com](traefik.com) and the *Apache* server at [apache.com](apache.com).

### Enable authentication to access Traefik dashboard

Anybody can access your *Traefik* dashboard unless you enable authentication.

In the **traefik.toml** file, edit the [entry.Points.dashboard] and add [entryPoints.dashboard.auth.basic]:

**traefik.toml**
```
...

[entryPoints]
  [entryPoints.http]
  address = ":80"

  [entryPoints.dashboard]
  address = ":8080"

    [entryPoints.dashboard.auth.basic]
    # user/password
    users =["user:password"]
```

You **HAVE** to generate the user and password by issuing:
```
htpasswd -n -B myusername
```