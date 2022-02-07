const express = require('express');
const {conPromise,client }= require("./RedisInteraction/redisConnec");
const{find} =  require("./RedisInteraction/findNearest");
const PORT = 8080;
const HOST = '0.0.0.0';

// App

const app = express();
var source = {"longitude" :45 ,"latitude" : 45}

app.get('/', (req, res) => {
  //  var long =  req.params.long;
  //  var lat  =  req.params.lat;
  //  var source = {"longitude":long , "latitude":lat};
  //  console.log(long,lat);
   conPromise.then( ()=>{
     find(source).then((val)=>{
       res.send(val);
       console.log("sent");
     })  
   }) 
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);