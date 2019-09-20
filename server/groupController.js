const addGroup = async (req,res) => {
    
    const {
        img,
        groupName,
        isPrivate,
        searchable,
        description,
        id
    
    } = req.body
    const db = req.app.get('db')
    const createGroup = await db.add_group([img,groupName,isPrivate,searchable,description])    
    const group_id = createGroup[0].id
    const newMember = await db.new_member(id,group_id)
    const newChatroom = await db.create_chatroom(group_id,groupName)
    res.status(200).send('Group Created')
    
}

const getGroups = async (req,res)=> {
    const {id} = req.params
    
    const db =req.app.get('db')
    const findGrps =  await db.get_groups(id)
    res.status(200).send(findGrps)
}
const allGroups = async (req,res) => {
    const db =req.app.get('db')
    const findGrps =  await db.get_all_groups()
    res.status(200).send(findGrps)
}

const getGroup = async (req,res) => {
    const {id} = req.params
    
    
    const db =req.app.get('db')
    const findGrp = await db.get_group(id)
    
    res.status(200).send((findGrp))
}
const checkMember = async (req, res) =>{
    const{id, group_id}= req.params
    
    const db =req.app.get('db')
    const isMember = await db.check_member(group_id, id)
    res.status(200).send(isMember)
}

const leave = async (req,res) => {
    const{id, group_id}= req.params
    const db =req.app.get('db')
    const remove = await db.leave_group(group_id, id)
    res.status(200).send(`You've been removed from the group`)
}

const join = async (req,res) => {
    const {id, group_id} = req.params
    const db = req.app.get('db')
    const add = await db.join_group(group_id, id)
    res.status(200).send(`You've joined the group`)
}


module.exports = {
    addGroup,
    getGroups,
    allGroups,
    getGroup,
    checkMember,
    leave,
    join
}