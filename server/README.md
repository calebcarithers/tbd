Download docker: https://www.docker.com/products/docker-desktop  
Download docker-compose: https://docs.docker.com/compose/install/  

Run `docker-compose build` then `docker-compose up`  

This will start the flask API, a postgres instance, and adminer to checkout the DB 

Test the API with `curl localhost:5000/test`  
View the DB by going to `localhost:8080` in a browser (creds in local.env)



