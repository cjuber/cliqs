const initialState = {
    id:'',
    email: '',
    first_name: '',
    last_name: '',
    city:'',
    state: '',
    country: '',
    group_id:'',
    group_name: '',
    description: '',
    img: ''
}

const UPDATE_USER = 'UPDATE_USER'
const UPDATE_GROUP = 'UPDATE_GROUP'

export function updateUser(user) {
   
    return{
        type:UPDATE_USER,
        payload: user
    }
}

export function updateGroup(group){
    return{
        type: UPDATE_GROUP,
        payload: group
    }
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case UPDATE_USER:
           
        return Object.assign({},state, {
        id:action.payload,
        email: action.payload,
        first_name: action.payload,
        last_name: action.payload,
        city:action.payload,
        state: action.payload,
        country: action.payload})

        case UPDATE_GROUP:
            return Object.assign({},state, {
                group_id:action.payload,
                group_name:action.payload,
                img:action.payload,
                description: action.payload
            })
        default:
            return state
    }
}