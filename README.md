# [koa-ts-full-stack-template](https://github.com/SimpleCodeCX/koa-ts-full-stack-template)
This is a full project structure, integrated with ts. This project has been configured with a mysql database, support different environment(dev,prod,testing) configuration, some custom koa middleware have configured, and it has defined a unified api response format.

It contains three parts: 

    - client: This directory is the front-end code.
    - server: This directory is the back-end code.
    - common: This directory is the common code for front-end and back-end.

## Features

✓ [koa v2](https://github.com/koajs/koa)

✓ [Typescript](https://github.com/koajs/koa)

✓ [Jest](https://github.com/facebook/jest)

✓ [APIDOC](https://apidocjs.com/)

✓ [Docker](https://www.docker.com/)

✓ [Eslint](https://github.com/eslint/eslint)

✓ [Husky](https://github.com/typicode/husky)

✓ [Unified API response]()

## [Installation CLI](https://github.com/SimpleCodeCX/koa-ts-cli)

```javascript
 npm i -g koa-ts-cli
```

## Create Project

```javascript
 koats create myProject
 # Choose koa-ts-full-stack-template option.
 
 cd myProject
 npm install

 cd server
 npm install
```

## Environments

There are three running environment can be configured: development, testing and production.
You can set NODE_ENV environment variables to select one of the mode.

```javascript
 npx cross-env NODE_ENV=development npm run start
```

Every running environment is corresponding to a configuration file.
Please see myProject/server/src/app/config/*.

- development: myProject/server/src/app/config/dev.config.ts

```javascript
 cd myProject/server
 npx cross-env NODE_ENV=development npm run start
```

or 

```javascript
 cd myProject/server
 npm run start:dev
```

- test environment: myProject/server/src/app/config/test.config.ts

```javascript
 cd myProject/server
 npx cross-env NODE_ENV=testing npm run start
```

or 

```javascript
 cd myProject/server
 npm run start:test
```

- production: myProject/server/src/app/config/prod.config.ts

```javascript
 cd myProject/server
 npm run build

 cd myProject/dist
 npm install
 npm run prod
```

> If the above scripts can't meet your requirements, you can customize your scripts in the package.json file.

## Create Mysql DB
This project will connect to the mysql database by default, so you need to create mysql database before it is started. The db configuration information is configured in the directory of myProject/server/src/app/config/*.

For convenience, I have created the demo sql statements for you, please see myProject/server/src/app/sql/db.sql.
Copy sql statements in db.sql, and executing it in your mysql database.

> You can modify it according to your actual condition, such as change the database name, create a new table and so on...


Note: When start the project, you need to configure your mysql database password environment variable: MARIADBPWD.

cross-platform:
```javascript
 npx cross-env MARIADBPWD=xxx NODE_ENV=development npm run start
```

## The Project Entry Variables

When you start the project, you need to pass the value of environment variables to the startup scripts, such as the port number, mysql database password and so on.

If you want to know what parameters are needed, please see myProject/server/src/app/config/variate.ts.

This file contains all the required variables of the project.

For example:

```javascript
 // MARIADBPWD is the mysql database password
 npx cross-env PORT=8080 MARIADBPWD=xxx NODE_ENV=development npm run start
```

## Running On Different Platforms

In Windows:

```javascript
 set MARIADBPWD=xxxx
 set NODE_ENV=development
 npm run start
```

In Linux:

```javascript
 MARIADBPWD=xxx NODE_ENV=development npm run start
```

cross-platform:

```javascript
 npx cross-env MARIADBPWD=xxx NODE_ENV=development npm run start
```


## In Development Mode

`set NODE_ENV = development`

The development mode is suitable for you to run in localhost. You can configure it to connect to the local mysql database. For details, please see the file: myProject/server/src/app/config/dev.config.ts.

```javascript
 npx cross-env NODE_ENV=development PORT=8080 MARIADBPWD=xxx npm run start
```

or 

```javascript
 npx cross-env PORT=8080 MARIADBPWD=xxx npm run start:dev
```
or

> For convenience, I have created the shell script for you: myProject/server/shell/start-dev.cmd

```javascript
 cd myProject/server/shell
 ./start-dev.cmd
```

## In Production Mode

`set NODE_ENV = production`

The prod mode is suitable for you to release the project. You can configure it to connect to the online mysql database. For details, please see the file: myProject/server/src/app/config/prod.config.ts.

First, you need to build the project.

```javascript
 cd myProject
 npm run build
```

Then, run myProject/dist/src/main.js.

```javascript
 cd myProject/dist
 npm install
 npx cross-env PORT=8080 MARIADBPWD=xxx npm run prod
```

## In Testing Mode

`set NODE_ENV = testing`

The testing mode is suitable for you to deploy on the beta server. You can configure it to connect to the beta mysql database. For details, please see the file: myProject/server/src/app/config/test.config.ts.

```javascript
 npx cross-env NODE_ENV=testing PORT=8080 MARIADBPWD=xxx npm run start
```

or 

```javascript
 npx cross-env PORT=8080 MARIADBPWD=xxx npm run start:test
```
or

> For convenience, I have created the shell script for you: myProject/server/shell/start-test.cmd

```javascript
 cd myProject/server/shell
 ./start-test.cmd
```


## Run in docker

```javascript
 cd myProject/server
 ./docker-build.sh
 sudo docker run -it --name koa-ts-api-server -p 8080:8080 -e MARIADBPWD=xxxxxx koa-ts-api-server # MARIADBPWD is mysql db password
```

## Test

Unit test can be used to ensure the quality of the code.

```javascript
 cd myProject/server
 npx cross-env NODE_ENV=development PORT=8080 MARIADBPWD=xxx npm run test
```

or

> For convenience, I have created the shell script for you: myProject/shell/test.cmd

```javascript
 cd myProject/server/shell
 ./test.cmd
```

## Generate Apidoc

```javascript
 cd myProject/server
 npm run apidoc
```
