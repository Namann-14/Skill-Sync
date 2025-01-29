const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const Connection= async () => {
    try {
    await mongoose.connect(process.env.DB);
    console.log("DB CONNECTED SUCCESSFULLY")
    } catch (error) {
    console.log(error)
    console.log("COULD NOT CONNECT TO DB")
    } }

module.exports = Connection; 