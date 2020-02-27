# Demo Unit Testing Express.js PostgreSQL

## Requirement
For running this project please install nodejs and postgresql.

Node.js:
```
node --version
v12.13.0
```
PostgreSQL:
```
psql --version
psql (PostgreSQL) 11.2
```

## Getting Started to the development
Clone the repository :
```
git clone https://github.com/MuhammadFariMadyan/unit-testing-express-postgres.git
```
Switch to the repo folder :
```
cd unit-testing-express-postgres
```
Install all the dependencies using `npm` or you can using `yarn` :
```
npm install or yarn install
```
Set configuration database like on your environtment system,to the config file on mode `development` in file `config/config.js` :
```
"development": {
    "username": "DATABASE_USER_NAME",
    "password": "DATABASE_PASSWORD",
    "database": "DATABASE_NAME",
    "host": "DATABASE_HOST",
    "dialect": "postgres"
  },
```

Run the server :
```
npm run start
```
You can now access the server at http://localhost:3000

## Run The Test

Run test
```
npm run test
```
You can see the result coverage testing :
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
Done in 8.27s.
```