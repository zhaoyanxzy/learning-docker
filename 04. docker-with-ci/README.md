To run
`docker run -it -p 3000:3000 <ContainerID>`

To make sure source code changes are automatically propagated into the containers:
- docker volumes set up "references" in the docker container to point back to the files in the local machine
- `docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app <imageid>`
	- first volume: Put a bookmark on the node_modules folder
	- second volume: Map the pwd into the '/app' folder
