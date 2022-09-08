const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("opt connected");
});



const otpSchema = mongoose.Schema({
    username: String,
    email: String,
    code: String,
    createdat: Number,
    expirein: Number
    
});

let otp = new mongoose.model("otp", otpSchema );

module.exports = otp;