# Docker

- [Docker](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/r/docker/welcome-to-docker)
- [Learn](https://habr.com/ru/articles/713942/)


## project resources

- `docker` contains steps for container initializing
- `.dockerignore` contains list of pathes to ignore while building image


## docker file example

```DOCKERFILE
FROM node:14
WORKDIR /usr/src/app
COPY package*.json app.js ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
```

There are two forms to define CMD command args
- shell form: `CMD node app.js myOtherArg`
- exec form: `CMD ["node", "app.js", "myOtherArg"]`

> When you use shell form, the executable runs as a child process to a shell, which doesn't pass signals. This means that the program running in the container can't detect OS signals like SIGTERM and SIGKILL and respond to them correctly.

[More info](https://docs.docker.com/reference/build-checks/json-args-recommended/#description).

## .dockerignore file example

```
node_modules
.git
**\bin

```

## Commands

- build image from project `docker build . -t my_cool_image:1.0`
> . means that docker image will created in the root of the actual folder, where you started it from cmd

> -t - name of the image

- pull `docker pull docker/welcome-to-docker`
- run `docker run -d -p 8088:80 --name name-of-container name-of-image:1.0`
> -d - run interactive (don't stop process)

> -p - ports mapping <exposed_port_number>:<port_inside_container>. See also [docker file, EXPOSE <port_inside_container>](#docker-file-example)

> of name-of-image:latest (make sure to specify the version)

- list of available images `docker images`

# PostgreSQL

[PostgreSQL in Docker](https://habr.com/ru/articles/578744/)

Инициализацию БД можно запустить через однострочник, но в этом случае требуется указывать абсолютный путь до каталога со скриптами:

`docker run --name habr-pg-13.3 -p 5432:5432 -e POSTGRES_USER=habrpguser -e POSTGRES_PASSWORD=pgpwd4habr -e POSTGRES_DB=habrdb -d -v "/absolute/path/to/directory-with-init-scripts":/docker-entrypoint-initdb.d postgres:13.3`


# Docker Compose

> Docker Compose is a tool for defining and running multi-container applications. It is the key to unlocking a streamlined and efficient development and deployment experience.

https://docs.docker.com/compose/