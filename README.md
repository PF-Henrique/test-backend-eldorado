
# TypeScript API with TypeORM

## Run this project

- Install the dependencies:
```
yarn
```

## Options connection DB
- 1° Create local database
```
$ docker run --name dolphin -v mysql_datavolume:/var/lib/mysql -p 3306:3306 -p 33060:33060/tcp -d -e MYSQL_ROOT_PASSWORD=banana mysql
```
- Connect and create local database with .env config
```
$ docker exec -it <ID_CONTAINER> bin/bash
$ mysql -h localhost -u root -p
$ CREATE SCHEMA `devices`;
$ USE devices;
$ SHOW TABLES;
```

Generate migrations
```
yarn run pre-start
```

Generate build
```
yarn run build
```

Start Aplication
```
yarn run start
```

Request postman
```
  ex: http://localhost:3333/product-categories
```
**Doc Collection Backend** https://documenter.getpostman.com/view/10255865/UUxxiUgR

---

- 2° connect with RDS AND EC2 AWS

Connection db
```
DB_HOST=device-api.cd60b7783xr6.us-east-1.rds.amazonaws.com
DB_PORT=3306
DB_USER=admin
DB_PASSWORD=devices123
DB_NAME=devices
```
<h1 align="center">
    <img src="*" width= "300px;" height= "300px;" />
</h1>

Connection Api server
```
  ex: http://54.147.50.134:3333/product-categories
```




## ✨ Me

<a href="https:https://github.com/PF-Henrique/">
  <img src="https://avatars1.githubusercontent.com/u/48561196?s=460&u=5b39cdc8c6d447868ca0caac900f1ee7a1793962&v=4" width= "50px;" height= "50px;" alt="Avatar"/>
  <br />
 <sub>
  <b>
    Pedro Ferreira
  </b>
</sub>
</a> 
<a href="<a href="https:https://github.com/PF-Henrique/" title="proffy">🚀👩‍🚀</a>
<br />

Made with 💙 by Pedro Ferreira 👋 [Talk to me!](https://www.linkedin.com/in/pedro-ferreira-148503b8/) :octocat:
