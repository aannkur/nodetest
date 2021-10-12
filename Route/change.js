const express = require("express")
const Router = express.Router()
const otpvalidation = require("../Validation.js/chnage")
const otpvalidationotp = require("../Validation.js/varifyotp")
const SingupModel = require("../Model/chnagemodel")
const mongoose = require('mongoose')
const messagebird = require("messagebird")("YsC10QxOWO9WCQgDmK7abhlpe")


Router.post('/registrationphonenumber', (req, res) => {
    const { phoneNumber } = req.body

    const validate = otpvalidation({ phoneNumber })

    if (!validate.isValid) {
        return res.status(400).json({
            message: "validation Errors",
            errors: validate.error,
            status: false,
        });
    } else {
        SingupModel.findOne({ phoneNumber: phoneNumber }).exec((error, user) => {
            if (error) {
                return res.status(400).json({
                    message: "email varified error",
                    errors: error,
                    status: false,
                })
            } else {
                if (user) {
                    return res.status(200).json({
                        message: "This Phone already registard ",
                        status: false,
                    })

                } else {
                    const singup = new SingupModel({
                        userId: new mongoose.Types.ObjectId(),
                        phoneNumber: phoneNumber

                    })
                    /*  const token = jwt.sign({ email }, 'secret key',
                         {
                             expiresIn: "2h",
                         }
                     ); */
                    singup.save().then((results) => {
                        res.status(201).json({
                            message: "New PhoneNumber Add Successfully",
                            status: 201,
                            results: results
                        })

                    }).catch((err) => {
                        res.status(500).json({
                            massage: "server error",
                            err: err,
                            status: 500
                        })
                    })
                }
            }
        })
    }


})


Router.post("/change", (req, res) => {
    const { phoneNumber } = req.body
    const token = Math.floor(100000 + Math.random() * 900000)
    if (!phoneNumber) {
        res.status(422).json({
            message: "Validation Error",
            error: "Phone number is required",
            success: false,
        })
    } else {
        messagebird.verify.create(phoneNumber, {
            template: "Your Verify Code is %token",
            "timeout": 120,
        }, function (err, response) {
            if (err) {
                res.status(400).json({
                    message: "Something went wrong",
                    error: err,
                    success: false,
                })
            } else {
                res.status(200).json({
                    message: "Otp Sended",
                    response: response,
                    success: true,
                })
            }
        })
    }

})


Router.post("/verif-change", (req, res) => {

    var verifyId = req.headers['verifyid']
    // const phoneNumber = req.headers['phonenumber']

    const { code } = req.body


    const validation = otpvalidationotp({ code })



    if (validation.isValid) {
        messagebird.verify.verify(verifyId, code, function (err, response) {
            if (err) {
                res.status(402).json({
                    message: "Verification Failed",
                    success: false,
                    error: err
                })
            } else {
                res.status(200).json({
                    message: "Varification Done",
                    success: true,

                })
                // const RealUser = userModel.findOne({ phoneNumber: phoneNumber }, function (err, results) {
                //     if (err) {
                //         res.status(500).json({
                //             message: "Something went wrong",
                //             success: false,
                //             error: err,
                //         })
                //     } else {
                //         if (!results) {
                //             const newUser = new userModel({
                //                 userName: userName,
                //                 email: email,
                //                 phoneNumber: phoneNumber
                //             })
                //             newUser.save().then(data => {
                //                 res.status(201).json({
                //                     message: "Varification Done",
                //                     success: true,
                //                     messageTwo: "New user created",
                //                     userId: data._id
                //                 })
                //             })
                //         } else {
                //             res.status(200).json({
                //                 message: "Varification Done",
                //                 success: true,
                //                 userId: results._id
                //             })
                //         }
                //     }
                // })
            }
        })
    } else {
        res.status(422).json({
            message: "Send All the credentials",
            error: validation.error,
            success: false
        })
    }
})




module.exports = Router