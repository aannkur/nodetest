
"use strict"

var api_key = '7db2f3d537ee7a9ab3040e74cb29e78a-443ec20e-c632bfb5';
var domain = 'sandbox5cd4d01e1e4f4675a361f8b520edff89.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

module.exports = {


    //Helper for sending Email
    sendMail: async (input) => {
        console.log('[=== Send Email Request ===]', input);
        await mailgun.messages().send({
            from: `Mamba Wallet <abhidelhi281298@gmail.com>`,
            to: input.email,
            subject: 'ForgetPassword Details',
            text: `Here is Details`,
            html: `<h4>Hello  ${input.email}</h1>
            <p>this is the testting email for the reset Password${input.token}<p>`

        }).then((data) => {
            console.log(data)
            console.log('Message sent')
        }).catch((error) => {

            console.log(error)

        })


    }
}