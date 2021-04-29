const initialState = {
    productos:[
        {idProducto:0,conteo:5},
        {idProducto:10,conteo:2}
    ]
}

export default function (state = initialState, action){
    switch (action.type){
        case 'ADD_CONTEO':
            return { ...state, productos:state.productos.map(producto =>{
                if(producto.idProducto !== action.payload){return producto}
                return{...producto, conteo: producto.conteo + 1}})
            }
        case 'ADD_PRODUCTO':
            return { ...state,productos:[...state.productos,{idProducto:action.payload,conteo:1}]}
        case 'DELETE_ALL':
            return []
        default:
            return state
    }
}