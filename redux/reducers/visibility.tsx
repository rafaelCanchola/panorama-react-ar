const initialState = {
    visible:false
}

export default function (state = initialState,action){
    switch (action.type){
        case 'UPDATE_VISIBLE':
            return {...state,visible:action.payload}
        default:
            return state
    }
}