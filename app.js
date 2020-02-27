const expess = require("express");
const app = expess();
const userRouter = require("./routers/users");
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
      title: 'Unit Testing Expres JS', // Title (required)
      version: '1.0.0', // Version (required)
    },
    host: "localhost:3000",
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

app.use(expess.json());
app.use(expess.urlencoded({extended:false}))

app.get("/",(req, res)=>{
  res.send({message:"Welcome to Backend API"})
})

app.use("/api/v1/users", userRouter);

const port = 3000;
app.listen(port, ()=>console.log("server on port " + port));

module.exports = app;