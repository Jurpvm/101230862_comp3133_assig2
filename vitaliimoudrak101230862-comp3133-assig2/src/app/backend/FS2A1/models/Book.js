
const { UniqueArgumentNamesRule } = require('graphql');
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({

    hotel_id: {
        type: String,
        required: true,
        unique: [true, "Duplicate hotel ID's not allowed."],
        trim: true,
        uppercase: false,
    },
    booking_date: {
        type: String,
        required:true,
        trim: true,
    },
    booking_start: {
        type: String,
        required: true,
        trim: true,
    },
    booking_end: {
        type: String,
        required: true,
        trim: true,
    },
    user_id: {
        type: String,
        required: true,
        unique: [true, "Duplicate user ID's not allowed."],
        trim: true,
        uppercase: false,
    },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;