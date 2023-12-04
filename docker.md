## Docker Commands

`docker pull busybox`
 - The `pull` command fetches the busybox image from the docker registry and saves it to our system

You can see a list of images on your system by running `docker images`

`docker run busybox echo "hello from busybox"`
 - When you call `run`, the docker client finds the image, loads up the container and runs the command in that container

`docker ps` shows all the containers you are currently running

`docker run -it busybox sh` allows you to run as many commands in the container as you want

`docker rm $(docker ps -a -q -f status=exited)` deletes all the containers that have a status of 'exited'
