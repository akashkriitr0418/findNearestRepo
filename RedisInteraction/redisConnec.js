const redis  =  require('redis');
const client =  redis.createClient();
const connector =  async()=> {
    client.on('error', (err) => console.log('Redis Client Error', err));
    console.log("connecting")
    await client.connect();
    console.log("connected");
  };
  const conPromise =  connector();
  module.exports = {conPromise,client};
