
const { UniqueArgumentNamesRule } = require('graphql');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
        unique: [true, "Duplicate user ID's not allowed."],
        trim: true,
        uppercase: false,
    },
    username: {
        type: String,
        required: true,
        unique: [true, "Duplicate username not allowed."],
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Duplicate emails not allowed."],
        trim: true,
        uppercase: true,
        validate: function (value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;