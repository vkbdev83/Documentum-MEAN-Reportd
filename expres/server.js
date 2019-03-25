/**
 * Created by babuvi on 13/04/2018.
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var query = require('dctm-query');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var bodyParser = require('body-parser');

const express = require('express');
const app = express();

var reportsData = {};
var sess;


var store = new MongoDBStore(
    {
        uri: url,
        databaseName: 'reports',
        collection: 'session'
    });


// Catch errors
store.on('error', function(error) {
    assert.ifError(error);
    assert.ok(false);
});


MongoClient.connect(url, function (err, db) {

    if (err) throw err;

    var dbo = db.db("reports");

    var collection = dbo.collection("reports");

   // var data = collection.find().toArray()

        //data.search

    collection.find().toArray().then(function (docs) {

        console.log(docs.length);

        db.close();

        reportsData = docs;

        console.log(reportsData)

    });
});

app.use(require('express-session')({
    secret: 'This is a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
    },
    store: store,
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static('./public'));

//Endpoint
app.get('/getreports', (req, res) => {
    console.log("Reports " + reportsData);
    sess = req.session;
    sess.email="test";
    res.send(reportsData);
});

app.post('/login',function(req,res){

    sess = req.session;
    console.log("Request" + JSON.stringify(req.body ));
    var username = req.body.username;
    var password = req.body.password
    sess.username = username;

     var results = query.getSessionTicket(username,password, function(results){
       sess.ticket = results;
       console.log("Set the user values");
       res.send(results);
   });
});

app.get('/:name', (req, res) => {

        getData(function callback(json) {
            console.log("Response Json" + json);
            res.send(json);
        },req.params.name);
});



app.get('*', function (req, res) {
    res.sendFile('index.html', {root: "public"}); // load the single view file (angular will handle the page changes on the front-end)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));


function getData(callback,reportName) {

    let queryString = "query";

    reportsData.forEach(function (data) {
        console.log(data.reports);
        console.log(data.query);

        if(data.reports == reportName){

            console.log("Reports "+ reportName);
            queryString = data.query
            query.dctmData(queryString, callback)
        }

    });

}


