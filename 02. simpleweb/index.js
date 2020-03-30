const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.json({ message: "hi there" });
});


app.listen(8080, () => {
	console.log("Port is listening on port 8080");
});
