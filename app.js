var mqtt = require('mqtt')
var options = {
  port: 1884,
  host: 'mqtt://54.186.144.108',
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  username: 'velox',
  password: 'Velox@123',
  keepalive: 60,
  reconnectPeriod: 1000,
  protocolId: 'MQIsdp',
  protocolVersion: 3,
  clean: true,
  encoding: 'utf8'
};
var client = mqtt.connect('mqtt://54.186.144.108', options);
//var client = mqtt.connect('mqtt://m11.cloudmqtt.com', options);
//var client  = mqtt.connect([{ host: 'localhost', port: 1884 }])
//var client  = mqtt.connect('mqtt://54.186.144.108:1884')
 const db = require('./mo/index');
 const Datas  = db.Datas;
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
 const express = require('express')
 const app = express()
 const port =  3000;
 
 app.get('/', (req, res) => res.send('Hello World!'))
client.on('connect', function () {
console.log("connection");
  client.subscribe('v1/devices/s71200', function (err) {
    if (!err) {
    }
	console.log("Error")
  })
})

client.on('message', function (topic, message) {
const dats = new Datas({
        Data     : message.toString()
});
console.log(message.toString());
	//Save The Serial TagName
	dats
	.save(dats)
	.then(data=>{
		console.log(data);
	})
	.catch(err=>{
		console.log({
			message:
			err.message || "Some error occurred while creating the SerialTag."
		});
	});
  console.log(message.toString())
  client.end()
})
 app.listen(port, () => console.log(`Example app listening on port ${port}!`))