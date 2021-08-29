
docker install 
```
# install
yum -y update
yum -y install docker docker-registry

# init settings
systemctl enble docker.service
systemctl start docker.service
systemctl status docker.service # optional..
```

Docker file build
```
docker build -t game/admin-vue-app .
```

Docker run
```
docker run -it 8080:8080 --rm --name admin-vue-app-1 game/admin-vue-app
```
