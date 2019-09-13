const initialState = {
    id:'',
    email: '',
    first_name: '',
    last_name: '',
    city:'',
    state: '',
    country: ''
}

const UPDATE_USER = 'UPDATE_USER'

export function updateUser(user) {
   
    return{
        type:UPDATE_USER,
        payload: user
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
        default:
            return state
    }
}