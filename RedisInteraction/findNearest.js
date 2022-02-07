const {conPromise,client }= require("./redisConnec.js");

 const find = async function find_nearest(source){
    const ans = await client.geoSearch("data_cordinate",   source,  {"radius":300 ,"unit":"km" },{"SORT" : "DESC","GeoReplyWith" :{"DISTANCE":"WITHDIST"}} )

    return ans[0];
 }
 module.exports =  {find};