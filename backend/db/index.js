const mongoose = require("mongoose");
const creds = require("./user");

mongoose
	.connect(
		`mongodb+srv://Cjmiller:dang@cluster0.fr7qc.mongodb.net/homeTasks?retryWrites=true&w=majority`,
		{ useNewUrlParser: true }
	)
	.catch((e) => {
		console.error("Connection error", e.message);
	});

const db = mongoose.connection;

module.exports = db;
