const { Timestamp } = require("bson")

const validate = (admin) => {
    error = {}

    if (!admin.email) {
        error.email = "Please select a email"
    }
    if (!admin.password) {
        error.password = "Please select a password"
    }


    return {
        error,
        isValid: Object.keys(error).length === 0
    }

}
module.exports = validate