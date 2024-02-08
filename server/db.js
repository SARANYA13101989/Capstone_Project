const mongoose = require("mongoose");
require("dotenv").config();

module.exports= async () => {	
	const connectionParams = {}

	try {
		await mongoose.connect(process.env.DB, connectionParams);
		console.log("connected to database successfully");
	} catch (error) {
		console.log("could not connect to database.", error);
	}
};
