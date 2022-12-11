// const express = require('express');
// const app = express();

var bodyParser = require('body-parser');

// const getDataUser = require('./GetUserData');
const AddNewUser = require('./AddNewUser');
// // const SearchUser = require('./SearchUser');
// const cors = require('cors');
// const path = require('path');
// app.use(cors());
var express = require('express');
var app = express();
app.use(bodyParser.json());
// app.use(express.json());
// app.use(cors());

// const madhur = path.join(__dirname,'publicDrum');
// app.use(express.static(madhur));



// app.get('/', (rq, rs) => {
//    rs.send("naveen");
// });


// const http = require('http').Server(app);
// const PORT = 4000 || process.env.PORT;

// app.use(express.static())

// http.listen(PORT, () => {
//    console.log(`Server listening on ${PORT}`);
// }, "0.0.0.0");



var path = require('path');
var PORT = 3000 || process.env.PORT;
 
// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))
   
app.get('/', function (req, res, next) {
    res.send("Madhur");
})

app.post('*', async (req, res) => {
    console.log(req.body);
    const response = await AddNewUser(req.body);
    res.send({"EmailValid": true });
 })
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});