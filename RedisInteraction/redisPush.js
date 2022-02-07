const {client} = require("./redisConnec");
const csv = require('csvtojson');
const csvFilePath = "../assets/files/db_roam.csv";

async function converter(csvFilePath){
 const jsonArray = await csv().fromFile(csvFilePath);
 push_data(jsonArray);
}

async function push_data(data) {
    try{
    client.set("delivery_data", JSON.stringify(data));
    }catch(err){
        console.log(err);
    }
}
converter(csvFilePath);
