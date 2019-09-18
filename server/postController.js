const addPost = async (req,res) =>{
const {
    title,
    postText,
    img,
} = req.body
const {id,group_id}=req.params
const db = req.app.get('db')
const getNames = await db.get_names(id)
const {first_name,last_name} = getNames[0]
const getGroup = await db.get_group_name(group_id)
const {group_name} = getGroup[0]
const createPost = await db.add_post(id,group_id,title,postText,img,first_name,last_name,group_name)
res.status(200).send('Post made')
}

const getPosts = async (req,res) => {
    const{id}=req.params
    const db = req.app.get('db')
    const posts = await db.get_posts(id)
    res.status(200).send(posts)
}

const getMyPosts = async (req,res) => {
    const{id}=req.params
    const db = req.app.get('db')
    const posts = await db.get_my_posts(id)
    res.status(200).send(posts)
}

const getPost = async (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    const post = await db.get_post(id)
    res.status(200).send(post)
}
deletePost = async (req,res) => {
    const{id}=req.params
    const db = req.app.get('db')
    const deleteP = await db.delete_post(id)
    res.status(200).send('Post Deleted')
}
getGroupPosts = async (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    const groupPosts = await db.get_group_posts(id)
    res.status(200).send(groupPosts)
}
module.exports ={
addPost,
getPosts,
getMyPosts,
getPost,
deletePost,
getGroupPosts
}