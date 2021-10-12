const { Timestamp } = require("bson")

const validate = (admin) => {
    error = {}

    if (!admin.email) {
        error.email = "Please select a email"
    }


    return {
        error,
        isValid: Object.keys(error).length === 0
    }

}
module.exports = validate