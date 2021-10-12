const validate = (field) => {
    const error = {}

    if (!field.code) {
        error.code = "phoneNumber field is required. Send phoneNumber  headers"
    }
    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}
module.exports = validate