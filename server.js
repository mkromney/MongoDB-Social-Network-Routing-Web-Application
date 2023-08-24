const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const { MongoClient } = rquire('mongodb')

const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

