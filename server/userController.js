updateProfile = async (req,res) => {
    const {id} =req.params
    const{first_name,last_name,email,city,state,country,about, user_img} = req.body
    const db = req.app.get('db')
    const profile = await db.update_profile(first_name,last_name,email,city,state,country,about,user_img,id)
    res.status(200).send('Profile updated')
}

module.exports={
    updateProfile
}