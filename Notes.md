# Why docker
Docker enables the ease of installing and running softwares without having to troubleshoot setup or dependency issues.

# What is docker
Docker is a platform or ecosystem around creating and running `containers`.

## Docker Ecosystem
### Docker Client
Executes the docker command from the user and sends requests to the `docker server`.

### Docker Images
- A `Docker Image` is a single file with all the dependencies and configuration required to run a software.
- An instance of an image is called a `container`.
- An image can be used to run multiple containers.

### Docker Server
- First checks on the local machine `image cache` if an existing image required by the docker command is present.
- If image is absent, docker server downloads the image from the `docker hub` and stores it into the image cache.
- Creates containers based on the images

### Docker Container
- Runs a program.
- A grouping of processes that is required to run a program.
- An container is ultimately a writable image. While the container is edited, the underlying image remains unchanged.

### Docker Machine
### Docker Hub
### Docker Compose

# Container Lifecycle
## Creating and Running Containers
Create and run a container using `docker run [image] [override command]`:
- creates a container from an image
- after a container is started, the id of the container is printed
- `docker run` = `docker create` + `docker start`
- create and run containers from images
- grabs image from docker hub (if required) and saves images
- `override command` depends on the functions provided for by the image

## Executing Additional Commands in a Running Container
- `docker exec -it [container id] [command]`:
	`-it` allows us to provide input to the container
	- `-it` comprises of the two commands `-i` and `-t`
	- `-i`: allows for user input
	- `-t`: autocomplete with formatting

## Restarting Stopped Containers
- `docker ps --all` to find the id of the stopped container
- `docker start [options] [container id]`:
	- starts a created container that is not running
	- `-a` option: watches and print out output
- note: the existing command of the stopped container cannot be overriden. An error message `you cannot start and attach multiple containers at once` will be shown.

## Removing Stopped Containers
- `docker system prune` to remove all stopped containers and associated images

## Retrieving Log Outputs
- Method 1: `docker start -a [container id]` (watching)
- Method 2: `docker logs [container id]` (not watching)

## Stopping Containers
- Method 1: `docker stop [container id]`
	- After 10 seconds upon receiving this command and the container can't be stopped gracefully, the container will be `killed`
- Method 2: `docker kill [container id]` (force quit instantly)

# Other Commands
- `docker version`: prints out verson

