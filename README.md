# Unit Testing Express.js with PostgreSQL | [Demo](https://unit-test-express-postgres.herokuapp.com/api-docs)
### Description :
- This repo is the result of source code at the live streaming event from this [event](https://www.twitch.tv/videos/558640300), and this is list of discussions of it:
  1. Opening = in minutes (12:12:13)
  2. Session 1 - Create Rest API with Express.js manually = in minutes (00:16:50 - 01:24:10)
  3. Session 1 - Creating Documentation Rest API with Swagger = in minutes (01:24:50)
  4. Session 1 - Rest = in minutes (01:53:00 - 02:15:27)
  5. Session 1 - Continue to Make Rest API Documentation with Swagger = in minutes (02:15:30)
  6. Session 1 - Completed = in minutes (02:36:27)
  7. Session 2 - Intro Automated Testing = in minutes (02:45:32)
  8. Session 2 - Start to make Unit Testing = in minutes (02:52:40 - 05:19:15)
  9. Session 2 - Making configuration Github Actions for Continuous Integration = in minutes (05:20:00)
  10. Session 2 - Deploy to Heroku and create CIs / CDs from Github Actions and activate Automatic Deploy on Heroku =
  in minutes (05:41:55 - 06:51:20)
  11. Session 2 - Conclusion and Closing = in minutes (06:51:30)
- This repo is part from this event : 
![image](https://dicodingacademy.blob.core.windows.net/eventimages/2020022507465221be19857ca150a93515c8d0782bd5f7.jpg)
- Speaker : 
  1. Session 1 by [Elfin Sanjaya](https://github.com/elfinsanjaya12)
  2. Session 2 by [M. Fari Madyan](https://github.com/MuhammadFariMadyan)
- Discussion all about that on [this](https://www.dicoding.com/events/2988/documentations)

### Screnshoot : 
![image](https://user-images.githubusercontent.com/7545546/75762344-18603c80-5d6d-11ea-9f7e-f0942b85cec4.png) 

## Local Requirements
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

Create Database and Migration :
```
npm run db:start
```
Run The Test :

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