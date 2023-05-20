// funcion para guardar los productos que busca desde el fetch y los cargar desde el JSON de productos
function guardadoProductos(){
    fetch("./data/productos.json")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        localStorage.setItem("productos", JSON.stringify(data));
    });
}

function cargaProductosLS(){
    return JSON.parse(localStorage.getItem ("productos")) || [];
};

guardadoProductos();

//funcion para rendenrizar productos, con card girable para mostrar el producto y las medidas de cada uno
function renderizado(){
    const productos = cargaProductosLS();
    let salida = "";
    
    productos.forEach (function (producto){
        salida += 
    `<div class="col-md-6 col-lg-6 my-5 flip-card">
        <div class= "flip-card-inner">
            <div class= "flip-card-front">
            <img class="img-fluid rounded macetas-portavasos " src="${"imagenes/" + producto.imagen1}"> 
            <p class="paragraph-maceta my-5">${producto.nombre} | ${producto.precio} $</p>
            </div>
            <div class= "flip-card-back">
            <img class="img-fluid rounded macetas-portavasos " src="${"imagenes/" + producto.imagen2}"> 
            <p class="paragraph-maceta my-5 ">${producto.material}</p>
            </div>
        </div>
        <p><button class="btn btn-secondary" onclick="agregarCarrito(${producto.id}); alertaProducto()" title= "Agregar Producto">Agregar</button></p>
        </div>`
        ;
    })
    
     document.getElementById("productos").innerHTML = salida;
}

//Funcion de alerta de productos agreado al carrito
function alertaProducto(){
    Toastify({
        text: "Producto en Carrito!",
        offset: {
          x: 50, 
          y: 100,
        },
        style: {
            background: "linear-gradient(to right, #FFA384, #FFA384)"
        },
          duration: 1000,
      }).showToast()
}

renderizado();
actualizadoIconoCarrito()