const express = require("express");
const app = express();
const userRouter = require("./routers/users");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');
// const HOST_APP = 'localhost:3000';
const HOST_APP = 'unit-test-express-postgres.herokuapp.com';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const swaggerDefinition = {
    info: {
      title: 'Unit Testing Expres JS', // Title (required)
      version: '1.0.0', // Version (required)
    },
    host: HOST_APP,
    basePath: "/"
};

const options = {
  swaggerDefinition,
  apis : ['./routers/*.js']
}

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/",(req, res)=>{
  res.send({message:"Welcome to Backend API"})
})

app.use("/api/v1/users", userRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log("server on port " + port));

module.exports = app;