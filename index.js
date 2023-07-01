require('dotenv').config();
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');
const MongoDB = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();

// Swagger API requires
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerDocument = require('./swagger.json');
// const swaggerDocument = require('./swaggerDesign.json');

//routes
const magazineRoutes = require('./routes/magazine');
const subscriberRoutes = require('./routes/subscriber');
const subscriptionRoutes = require('./routes/subscription');

const MONGODB_URI = process.env.MONGODB_URI;

//updated from sessions to a list of magazines
const db = new MongoDB({
  uri: MONGODB_URI,
  magazine: [],
  subscriber: [],
  subscription: [],
});

//Swagger set up
const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'Magazine Subscription API',
      version: '1.0.0',
      description: 'API for a Magazine Subscription App',
    },
    servers: [
      {
        url: process.env.HOST_URL,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'Authorization',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./swagger/*.js'],
};

// Tell Swagger-jsdoc where/how to parse the comments
const specs = swaggerJsdoc(options);
// Aspecify specs to build UI & view api-docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));

// To make requests through api-docs
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Access db route
app.db = db;

// Parse json body for the request
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/magazine', magazineRoutes);
app.use('/subscriber', subscriberRoutes);
app.use('/subscription', subscriptionRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// CORS - connection
const corsOptions = {
  origin: process.env.HOST_URL,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(PORT);
    console.log(`Connected to DB and listening on ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
