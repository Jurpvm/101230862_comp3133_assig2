//this file for mongodb

const { UniqueArgumentNamesRule } = require('graphql');
const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({

hotel_id: {
    type: String,
    required: true,
    unique: [true, "Duplicate hotel ID's not allowed."],
    trim: true,
    uppercase: false,
},

hotel_name: {
    type: String,
    required: [true, "Please enter hotels name."],
    trim: true,
    lowercase: true
},
street: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
},
city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
},
postal_code: {
    type: String,
    required: true,
    unique: [true, "Postal code already in use"],
    upppercase: true,
    validate: function(value) {
        var postalCodeRegex =  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
        return postalCodeRegex.test(value)
    }
},
price: {
    type: Number,
    default: 0.0,
    validate(value) {
        if (value < 0.0) {
            throw new Error("Value cannot be negative");
        }
    }
},
email: {
    type: String,
    required: true,
    unique: [true, "Duplicate emails not allowed."],
    trim: true,
    uppercase: true,
    validate: function(value) {
        var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailRegex.test(value);
    }
},

user_id: {
    type: String,
    required: true,
    unique: [true, "Duplicate user ID's not allowed."],
    trim: true,
    uppercase: false,
},
});

const Hotel = mongoose.model("Hotel", HotelSchema);
module.exports = Hotel;