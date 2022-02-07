const {conPromise,client }= require("./redisConnec.js")
const { json } = require("body-parser");
const getPromise = async function getData(){  
    console.log("resolving")
    const value = await client.get("delivery_data");
    await geoadd(JSON.parse(value))
    console.log("resolved")
    return 1 ;
   
}

conPromise
.then(getPromise)
.then(function(val){
    console.log("done",val)
})


async function geoadd(value){
  console.log(value[10].Lat);
  value.map( async (v)=>{
     var a = v.Long;
     var b =  v.Lat;
     await  client.GEOADD("data_cordinate", {longitude: v.Long, latitude:v.Lat , member:v.Name})
     console.log("inserted")
  })
}

