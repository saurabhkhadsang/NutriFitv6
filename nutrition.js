
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("newuser connected");
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

const Nutri = new mongoose.model("Nutri", nutritionSchema);

module.exports = Nutri;