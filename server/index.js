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



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.USER_PASS}@cluster0.efifc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(
    uri,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

client.connect(err => {
    const appointmentsCollection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION);

    // This API is used for adding new appointment by patients
    app.post('/addAppointment', (req, res) => {
        const appointment = req.body;

        appointmentsCollection.insertOne(appointment)
            .then(result => {
                res.send(result.insertedCount > 0)
            })
    })

    // This API is used for getting appointments list by date
    app.post('/appointmentsByDate', (req, res) => {
        const date = req.body;
        console.log(date.date)
        appointmentsCollection.find({ date: date.date })
            .toArray((err, documents) => {
                res.send(documents)
                // console.log(documents)
            })
    })


    // GET all appointments
    app.get('/appointments', (req, res) => {
        appointmentsCollection.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })


















    //   client.close();
});





app.get('/', (req, res) => {
    res.send('Hello World! doctros portal')
})

app.listen(port)