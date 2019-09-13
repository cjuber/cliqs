const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const {firstName, lastName, email, password} = req.body
    const db = req.app.get('db')
    const foundUser = await db.find_user([email])
    if(foundUser[0]){
        return res.status(409).send('Email already exists')
    }
    const passSalt = bcrypt.genSaltSync(15)
    const passHash = bcrypt.hashSync(password, passSalt)
    const newUser = await db.register_user([firstName,lastName,email,passHash])
    delete newUser.password
    req.session.user = newUser[0]
    res.status(200).send(req.session.user)
}

const login = async (req,res) => {
    const {email, password} = req.body
    const db =req.app.get('db')
    const findUser = await db.find_user([email])
    if(!findUser[0]){
        return res.status(403).send('Invalid email or password')
    }
    
    const authedPass = bcrypt.compareSync(password, findUser[0].password)
    if(authedPass){
        delete findUser.password
        
        req.session.user = findUser[0]
       
        res.status(200).send(req.session.user)
    }else {res.status(401).send('Invalid email or password')}
}

const logout = (req,res) => {
    
    req.session.destroy()
    res.status(200).send('logged out')
}

module.exports = {
    register,
    login,
    logout

}