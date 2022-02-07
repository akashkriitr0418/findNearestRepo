require("./dbConnec.js")
const csv = require('csvtojson')
 const User = require("./schema.js")
const fs = require('fs')

const csvFilePath = "../assets/files/db_roam.csv";

async function converter(csvFilePath){
 jsonArray = await csv().fromFile(csvFilePath);
}

converter(csvFilePath);

async function push_data(data) {
    try{
    const user  = await User.create(data);
    console.log("inserted");
    }catch(err){
        console.log(err);
    }
}
