const { Timestamp } = require("bson")

const validate = (admin) => {
    error = {}

    if (!admin.phoneNumber) {
        error.phoneNumber = "Please select a Phone Numbers"
    }
    return {
        error,
        isValid: Object.keys(error).length === 0
    }

}
module.exports = validate