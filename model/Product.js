const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    brand:{
        type: String,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    rating:{
        type:Number
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

const HeadPhone = new mongoose.model('Headphone',productSchema);
module.exports = HeadPhone;