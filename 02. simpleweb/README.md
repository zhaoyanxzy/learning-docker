# To run (with image tag):
1. Run `docker build -t [docker id]/simpleweb .`
2. `docker run -p 5000:8080 [image id]`

# Docker port mapping
- Required for clients to send requests to Node (listening to port 8080) in the container
- Port forwarding is a runtime constraint
- No change is required to the docker file
- For `docker run -p 5000:8080 [image id]`:
	- First port: route the incoming requests to this port on local host
	- Second port: the port inside the container
