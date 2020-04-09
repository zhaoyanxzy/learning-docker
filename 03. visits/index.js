const express = require("express");
const redis = require("redis");
const process = require('process');

const app = express();
const client = redis.createClient({
	host: 'redis-server',
	port: 6379
});
client.set("visits", 0);

app.get("/", (req, res) => {
	// "0" exit status code because everything is ok, not an error

	process.exit(0);
	client.get("visits", (err, visits) => {
		res.send("Number of visits is " + visits);
		client.set("visits", parseInt(visits) + 1);
	});
});

app.listen(8081, () => {
	console.log("Port is listening at 4001");
});
