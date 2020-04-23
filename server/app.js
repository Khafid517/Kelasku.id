require("dotenv").config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended : true}))

const user = require('./bin/routers/user/user.route')
app.use('/user', user)

app.listen(process.env.APP_PORT, ()=>{
    console.log("running on port" + process.env.APP_PORT)
})