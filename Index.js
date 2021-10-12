require('dotenv').config();
const express = require('express')
const Db = require('./DB/DB')
const app = express()
const singup = require('./Route/Singup')
const Login = require('./Route/Singup')
const ForgetPassword = require('./Route/Singup')
const getuserDetails = require('./Route/Singup')
const AllgetuserDetails = require('./Route/Singup')
const updateprofile = require('./Route/Singup')
const ChangePassword = require('./Route/Singup')
const regis = require('./Route/change')
const otp = require('./Route/change')
const verify = require('./Route/change')
var bodyParser = require('body-parser')
const GoogleLogin = require('./Route/Googlelogin')
const FaceBookLogin = require('./Route/FaceBookLogin')
// const Otp = require('./Route/change')
var cors = require('cors')
const port = 3001


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', singup)
app.use('/api', Login)
app.use('/api', GoogleLogin)
app.use('/api', FaceBookLogin)
app.use('/api', ForgetPassword)
app.use('/api', getuserDetails)
app.use('/api', AllgetuserDetails)
app.use('/api', updateprofile)
app.use('/api', ChangePassword)
app.use('/api', regis)
app.use('/api', otp)
app.use('/api', verify)



app.get('/', (req, res) => {
    res.send('RAM!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    Db
})


