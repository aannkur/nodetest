const mongoose = require('mongoose')

const GoogleLogin = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId
        },
        userName: {
            type: String,
            require: true,

        },
        email: {
            type: String,
            require: true,

        },
        password: {
            type: String,
            require: true
        },
        picture: {
            type: String,
            require: true
        },
        token: {
            type: String
        },


    }, { timestamps: true }
);

module.exports = mongoose.model('GoogleLogin', GoogleLogin);