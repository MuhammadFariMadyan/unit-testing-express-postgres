# Unit Testing Express.js with PostgreSQL | [Demo](https://unit-test-express-postgres.herokuapp.com/api-docs) &middot; ![Github CI Node.js PostgreSQL](https://github.com/MuhammadFariMadyan/unit-testing-express-postgres/workflows/Github%20CI%20Node.js%20PostgreSQL/badge.svg) [![codecov](https://codecov.io/gh/MuhammadFariMadyan/unit-testing-express-postgres/branch/development/graph/badge.svg)](https://codecov.io/gh/MuhammadFariMadyan/unit-testing-express-postgres)

## About This Project
> *This is a simple repository as an example of implementhing unit testing using continuous integration (CI) using github actions and continuous deployment (CD) on heroku, created using express.js (one of the frameworks of node.js), mocha as a test runner, chai as library assertion and istanbul to see the coverage testing and use postgresql as the database. This event is registered at https://www.dicoding.com/events/2988*

> [Read in English Version](README.en.md)

### Deskripsi :
- This repository is the final result of the source code that is created at a live streaming event [Create REST API with Automated Testing using Express.js](https://www.dicoding.com/events/2988/).
- Live streaming videos can be viewed at [twitch.com/faritw](https://www.twitch.tv/videos/558640300), for a list of the material is as follows :
  - Opening = in minutes (12:12:13)
  - Session 1 - Create Rest API with Express.js manually = in minutes (00:16:50 - 01:24:10)
  - Session 1 - Creating Documentation Rest API with Swagger = in minutes (01:24:50)
  - Session 1 - Rest = in minutes (01:53:00 - 02:15:27)
  - Session 1 - Continue to Make Rest API Documentation with Swagger = in minutes (02:15:30)
  - Session 1 - Completed = in minutes (02:36:27)
  - Session 2 - Intro Automated Testing = in minutes (02:45:32)
  - Session 2 - Start to make Unit Testing = in minutes (02:52:40 - 05:19:15)
  - Session 2 - Making configuration Github Actions for Continuous Integration = in minutes (05:20:00)
  - Session 2 - Deploy to Heroku and create CIs / CDs from Github Actions and activate Automatic Deploy on Heroku = in minutes (05:41:55 - 06:51:20)
  - Session 2 - Conclusion and Closing = in minutes (06:51:30)

### Dokumentasi : 
REST API documentation of this project : [unit-test-express-postgres.herokuapp.com/api-docs](https://unit-test-express-postgres.herokuapp.com/api-docs).
#### Screenshot :
![image](https://user-images.githubusercontent.com/7545546/75762344-18603c80-5d6d-11ea-9f7e-f0942b85cec4.png) 

### Feature :
- There are only 6 endpoints created, consisting of Browse, Read, Edit, Add, Delete (BREAD).
- Only consists of 1 table, i.e. user table.
- There are no access level / role attributes in this user table to distinguish the access rights of each user.
- The JWT token generated has not been used.
- Only 11 test cases have been made.

## Steps to start this project on your computer
To run this project, you must have installed nodejs and postgresql.

Version of Node.js:
```
node --version
v12.13.0
```
Version of PostgreSQL:
```
psql --version
psql (PostgreSQL) 11.2
```

## Starting Development
Open your termina (cmd, powershell, git bash and so on)
Clone this repository by :
```
git clone https://github.com/MuhammadFariMadyan/unit-testing-express-postgres.git
```
Enter to the repository folder :
```
cd unit-testing-express-postgres
```
Install all required dependencies using `npm` or you can also use` yarn`:
```
npm install or yarn install
```
If you want to run the project in `development` or` testing` mode, then you must set the database configuration according to the database configuration on your computer, such as `username`,` password` and `host`, then it is recommended that you name the database you are using for `development` or` testing` mode is different to avoid the things you don't want, and all this configuration you have to do in the `config / config.js` file.
For `development` mode you must set it here :
```
"development": {
    "username": "DATABASE_USER_NAME",
    "password": "DATABASE_PASSWORD",
    "database": "DATABASE_DEVELOPMENT_NAME",
    "host": "DATABASE_HOST",
    "dialect": "postgres"
  },
```
For `testing` mode you must set it here :
```
"test": {
    "username": "DATABASE_USER_NAME",
    "password": "DATABASE_PASSWORD",
    "database": "DATABASE_TEST_NAME",
    "host": "DATABASE_HOST",
    "dialect": "postgres"
  },
```
Create a database and table in `development` mode :
```
npm run db:start
```
Creates a database and tables in `testing` mode :
```
npm run db:test:start
```
Run a test :
```
npm run test
```
After running the test, you will see the results of testing coverage of this repository, as follows :
```
----------------------------------|---------|----------|---------|---------|-------------------
File                              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------------------|---------|----------|---------|---------|-------------------
All files                         |   91.53 |    76.19 |   88.89 |   91.96 | 
 unit-testing-express             |   90.48 |      100 |   66.67 |      90 | 
  app.js                          |   90.48 |      100 |   66.67 |      90 | 25,26
 unit-testing-express/controllers |   91.49 |       90 |     100 |   92.86 | 
  userController.js               |   91.49 |       90 |     100 |   92.86 | 17,54,73
 unit-testing-express/middlewares |   83.33 |       50 |     100 |   83.33 | 
  validator.js                    |   83.33 |       50 |     100 |   83.33 | 11
 unit-testing-express/models      |   91.18 |    66.67 |    87.5 |   91.18 | 
  index.js                        |      95 |    66.67 |     100 |      95 | 13
  user.js                         |   85.71 |      100 |      80 |   85.71 | 40,47
 unit-testing-express/routers     |     100 |      100 |     100 |     100 | 
  users.js                        |     100 |      100 |     100 |     100 | 
----------------------------------|---------|----------|---------|---------|-------------------
```
The benefit of using swagger is that we can test the endpoints that we have made when the project has been deployed or in other words when in production mode, but you have to turn off comments on line 8 and vice versa you have to make line 7 as a comment in the file ` app.js` and make changes to `HOST` with` YOUR_HOST_APP` :
```
...
7 // const HOST_APP = 'localhost:3000';
8 const HOST_APP = YOUR_HOST_APP;
...
```
In the `development` mode, you have to turn off comments on line 7 and vice versa you have to make line 8 as a comment in the` app.js` file :
```
...
7 const HOST_APP = 'localhost:3000';
8 // const HOST_APP = YOUR_HOST_APP;
...
```
Run the server, can use `npm` or` thread` :
```
npm run start or yarn start
```
Then, you can access this project at the address : http://localhost:3000, for the swagger documentation you can access it at this address : http://localhost:3000/api-docs/

## The original version source code
The original source code of the live streaming results is [in this commit](https://github.com/MuhammadFariMadyan/unit-testing-express-postgres/tree/3b744c6e72bd2bc0b1a4dcee65f6be21e5329650).

## Links & Resources
- [Node.js](https://nodejs.org/en/download)
- [PostgreSQL](https://www.postgresql.org/download)
- [Mocha](https://mochajs.org)
- [Chai](https://www.chaijs.com)
- [Supertest](https://github.com/visionmedia/supertest)
- [PostgreSQL example github actions](https://github.com/actions/example-services/blob/master/.github/workflows/postgres-service.yml)
- [Node.js example github actions](https://github.com/actions/starter-workflows/blob/master/ci/node.js.yml)

## Updated
Contains a list of additions or changes made outside the source code made during live video streaming :
1. Adding codecov to see the results of its coverage testing as online.
2. Fix typo writing "expess" in the `app.js` file.
3. Adding `pm2` package to run the server on Heroku along with the scripts command.
4. Using the configuration environment variable for production on Heroku.