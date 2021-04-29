export const addProducto = (input) => {
    return {type:'ADD_PRODUCTO',payload:input}
}

export const addConteo = (input) => {
    return {type:'ADD_CONTEO',payload:input}
}

export const deleteProductos = () => {
    return {type:'DELETE_ALL'}
}