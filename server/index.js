const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
const uploadFile = require('express-fileupload');
require('dotenv').config();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(uploadFile());
app.use(express.static('doctors'));



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.USER_PASS}@cluster0.efifc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(
    uri,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

client.connect(err => {
    const appointmentsCollection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION_APP);
    const doctorsCollection = client.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION_DR);

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
        const date = req.body.date;
        const email = req.body.email;

        doctorsCollection.find({ email })
        .toArray((err, doctors) => {
            const filter = { date }
            if(doctors.length === 0) {
                // If doctor email is not found,
                // email is added to filter
                filter.email = email;
            }
            // find the collections matching date and only loggedInUser email
            appointmentsCollection.find(filter)
            .toArray((err, documents) => {
                console.log(date, email, doctors, documents)
                res.send(documents)
                // console.log(documents)
            })
        })
    })

    // This API is used for checking if an user is a doctor or not
    app.post('/isDoctor', (req, res) => {
        const email = req.body.email;

        doctorsCollection.find({ email })
        .toArray((err, doctors) => {
            res.send(doctors.length > 0)
        })
    })


    // GET all appointments
    app.get('/appointments', (req, res) => {
        appointmentsCollection.find({})
            .toArray((err, documents) => {
                res.send(documents)
            })
    })

app.post('/addDoctor', (req, res)=> {
    const file = req.files.file;
    console.log(file, req.body)

        const fileName = file.name;
        file.mv(`${__dirname}/doctors/${fileName}`, err => {
            if (err) {
                console.log(err);
                return res.status(500).send({msg: 'Failed to upload Image'});
            }
            // return res.send({name: fileName})
        })

        const totalData = JSON.parse(req.body.total)
        totalData.image = fileName;

        doctorsCollection.insertOne(totalData)
        .then(result => {
            res.send(result.insertedCount > 0)
        })
})






    //   client.close();
});





app.get('/', (req, res) => {
    res.send('Hello World! doctros portal')
})

app.listen(process.env.PORT || port)