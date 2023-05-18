//funcion para rendenrizar productos
function renderizado(){
    const productos = cargaProductosLS();
    let salida = "";
    
    productos.forEach (function (producto){
        salida += 
    //con card girable para poder mostrar medidas de cada producto de luco
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
        <p><button class="btn btn-dark" onclick="agregarCarrito(${producto.id})" title= "Agregar Producto">Agregar</button></p>
    </div>`;
    })
    
     document.getElementById("productos").innerHTML = salida;
}

renderizado();
actualizadoIconoCarrito()