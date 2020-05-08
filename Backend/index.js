const express = require('express')
var cors = require('cors')  
const app = express()
app.use(cors())
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

const uuidv1 = require('uuid');

app.listen(3310)
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/updates', (req, res) => {
    console.log('coming ..')
    console.log(req)
    console.log(req.body)
    var heading = req.body.heading || 'Ios'
    var description = req.body.description || 'My First IOS Blog !!'
    

    MongoClient.connect(url, { useNewUrlParser: false }, function (err, client) {

        var db = client.db("IOS");
        var collection = db.collection('IOSData');
        collection.insertOne(
            { _id: uuidv1(), heading: heading, description: description , createAt: new Date() }
            , (error, result) => {
                if (error) throw error
                if (result.insertedCount) {
                    console.log(result, 'result')
                    res.json(result.ops[0])
                }
                else {
                    res.json({ error: 'Server Busy Try again ...' })
                }
            })
    });
})

