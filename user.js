const mongoose = require("mongoose");
const Nutri = require('./nutrition')
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});


mongoose.connect( process.env.DATABASE , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("new connected");
});

const nutritionSchema = mongoose.Schema({
    name: String,
    calories: Number,
    serving_size_g: Number,
    fat_total_g: Number,
    fat_saturated_g: Number,
    protein_g: Number,
    sodium_mg: Number,
    potassium_mg: Number,
    cholesterol_mg: Number,
    carbohydrates_total_g: Number,
    fiber_g: Number,
    sugar_g: Number
});


const userSchema = mongoose.Schema({
    isVerified: Boolean,
    fName: String,
    lName: String,
    username: String,
    email: String,
    password: String,
    calories: Number,
    serving_size_g: Number,
    fat_total_g: Number,
    fat_saturated_g: Number,
    protein_g: Number,
    sodium_mg: Number,
    potassium_mg: Number,
    cholesterol_mg: Number,
    carbohydrates_total_g: Number,
    fiber_g: Number,
    sugar_g: Number,
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ],
    cart: [nutritionSchema]
});

const User = new mongoose.model("User", userSchema);

module.exports = User;