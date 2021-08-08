const express = require("express");
// const bodyParser = require("body-parser");
const user = require("./routes/userRoutes.js");
const InitiateMongoServer = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const morgan = require('morgan')


// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'))
app.use(cors());

/**
 * Router Middleware
 * Router - /user/*
 * * Router - /teacher/*
 * Method - *
 */
app.use("/v1", user);


app.listen(PORT, (req, res) => {
	
	console.log(`Server Started at PORT ${PORT}`);
});
