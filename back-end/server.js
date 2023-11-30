const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const account = require('./routes/account')
const adminSignIn = require('./routes/adminSignIn')
const createAdmin = require('./routes/createAdmin')
const deleteUser = require('./routes/deleteUser')
const getAllAdmin = require('./routes/getAllAdmin')
const getAllUser = require('./routes/getAllUser')
const userData = require('./routes/userData')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use('/', account);
app.use('/', adminSignIn);
app.use('/', createAdmin);
app.use('/', deleteUser);
app.use('/', getAllAdmin);
app.use('/', getAllUser);
app.use('/', userData);
dotenv.config()

app.get('/',(req, res) => {
    res.send('Welcome')
})

const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.MONGO_URL, dbOptions)
.then(() => console.log('DB Connected'))
.catch(err => console.log(err))

const port = process.env.PORT || 5000
app.listen(port,() => {
        console.log("running on", port)
    })