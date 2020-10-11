const express = require('express')
const app = express()
require('dotenv').config()
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())






app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(port)