const addPost = async (req,res) =>{
const {
    title,
    postText,
    img,
} = req.body
const {id,group_id}=req.params
const db = req.app.get('db')
const createPost = await db.add_post(id,group_id,title,postText,img)
res.status(200).send('Post made')
}

const getPosts = async (req,res) => {
    const{id}=req.params
    const db = req.app.get('db')
    const posts = await db.get_posts(id)
    res.status(200).send(posts)
}
module.exports ={
addPost,
getPosts
}