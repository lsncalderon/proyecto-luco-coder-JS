function guardadoProductosCarrito(productos){
    localStorage.setItem ("carrito", JSON.stringify(productos));
}

function cargaProductosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

//Funcion busqueda de producto
function buscarProducto(id){
    const productos = cargaProductosLS();
    return productos.find((itemID) => itemID.id === id);
}

// Funcion que evalua si el producto esta en el carrito
function estaEnCarrito(id){
    const carrito = cargaProductosCarrito();
    return carrito.some((itemID) => itemID.id === id);
}

//Funcion agregado al carrito de productos para esto se necesita evaluar si el producto esta en el carrito y si no esta buscarlo y pushearlo
function agregarCarrito(id){
    const carrito = cargaProductosCarrito();
    if(estaEnCarrito(id)){
        let posicion = carrito.findIndex(itemID => itemID.id === id);
        carrito[posicion].cantidad +=1; 
    }else{
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push (producto);
    }
    guardadoProductosCarrito(carrito);
    actualizadoIconoCarrito();
}

//Funcion para actualizar el icono carrito (renderizado del icono) cada vez que se cargue un producto
function actualizadoIconoCarrito(){
    document.getElementById("carrito").innerText = totalCargadosCarrito();
}

//Funcion para saber el total de los productos cargados al carrito
function totalCargadosCarrito(){
    const productos = cargaProductosCarrito();
    return productos.reduce ((acumulador, valorItem) =>
    acumulador += valorItem.cantidad, 0);
}

//Funcion para saber el total a pagar en el carrito
function totalPagar(){
    const productos = cargaProductosCarrito();
    return productos.reduce ((acumulador, valorItem) =>
    acumulador += valorItem.cantidad * valorItem.precio, 0);
}

//Funcion para vaciar carrito y que se renderice el carrito final actualizado y el icono carrito actualizado
function vaciadoCarrito(){
    localStorage.removeItem ("carrito");
    renderizadoCarritoFinal()
    actualizadoIconoCarrito();
}

//Funcion para eliminar el producto del carrito de compras
function eliminarProductoCarrito(id){
    const carrito = cargaProductosCarrito();
    const productos = carrito.filter(itemID => itemID.id !== id)
    guardadoProductosCarrito(productos);
    renderizadoCarritoFinal();
    actualizadoIconoCarrito();
}

