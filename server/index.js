require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')
const session = require('express-session')
const chalk = require('chalk')

const authCtrl =  require('./authController')
const grpCtrl = require('./groupController')

const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())
app.use(session ({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 6000000
    }
}))

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log(chalk.yellow.bgBlue('Database Connected'))
})
.catch(error =>{
    console.log(chalk.black.bgRed('Database Error'))
    console.log(error)
})

//endpoints
//Login/logout
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

//group
app.post('/api/add_group', grpCtrl.addGroup)

app.listen(SERVER_PORT, () =>{
    console.log(chalk.yellow.bgBlue('Server Running'))
})