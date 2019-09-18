require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')
const session = require('express-session')
const chalk = require('chalk')

const authCtrl =  require('./authController')
const grpCtrl = require('./groupController')
const postCtrl = require('./postController')

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

app.get('/api/groups/:id', grpCtrl.getGroups)
app.get('/api/groups', grpCtrl.allGroups)
app.get('/api/group/:id', grpCtrl.getGroup)
app.get('/api/group/:group_id/member/:id', grpCtrl.checkMember)
app.delete('/api/group/:group_id/member/:id', grpCtrl.leave)
app.put('/api/group/:group_id/member/:id', grpCtrl.join)


//Posts

app.post('/api/group/:group_id/post/:id', postCtrl.addPost)
app.get('/api/posts/:id', postCtrl.getPosts)
app.get('/myposts/:id', postCtrl.getMyPosts)
app.get('/api/post/:id',postCtrl.getPost)
app.delete('/api/post/:id', postCtrl.deletePost)
app.get('/api/group/posts/:id', postCtrl.getGroupPosts)

app.listen(SERVER_PORT, () =>{
    console.log(chalk.yellow.bgBlue('Server Running'))
})