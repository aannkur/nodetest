const mongoose = require('mongoose')

const singupuser = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId
        },
        userName: {
            type: String,
            require: true,
            unique: true

        },
        fullName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        password: {
            type: String,
            require: true
        },
        image: {
            type: String
        },

        token: {
            type: String
        },
        resetToken: {
            type: String
        },
        expireToken: {
            type: Date
        }



    }, { timestamps: true }
);

module.exports = mongoose.model('singupuser', singupuser);