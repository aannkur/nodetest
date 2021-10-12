var mongoose = require('mongoose');


const deliveryBoyRegisterSchema = mongoose.Schema({

    phoneNumber: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId
    }
},
    {
        timestamps: true
    })


// const deliveryBoyRegister = mongoose.model('changeRegister', deliveryBoyRegisterSchema)

module.exports = mongoose.model('changeRegister', deliveryBoyRegisterSchema);
// module.exports = deliveryBoyRegister;
