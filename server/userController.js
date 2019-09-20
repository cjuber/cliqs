updateProfile = async (req,res) => {
    const {id} =req.params
    const{first_name,last_name,email,city,state,country,about} = req.body
    const db = req.app.get('db')
    const profile = await db.update_profile(first_name,last_name,email,city,state,country,about,id)
    res.status(200).send('Profile updated')
}

module.exports={
    updateProfile
}