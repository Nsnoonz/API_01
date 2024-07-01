require("dotenv").config();

const express = require("express");
const app = express();

app.get("/api", (req,res) => {
	res.json({
		success: 1,
		message: "working"
	})
});

app.post("/api/users/fnGetData", (req,res) => {
	res.json({
		success: 1,
		message: "working"
	})
});
app.listen(process.env.APP_PORT,() => {
	console.log("server running on Port : ", process.env.APP_PORT)
})
