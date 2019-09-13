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
    group_id = createGroup[0].id
    newMember = await db.new_member(id,group_id)
    res.status(200).send('Group Created')
    
}


module.exports = {
    addGroup

}