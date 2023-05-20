// Funcion de renderizado de productos en el carrito, si tengo productos en el carrito los muestra en el html, sino tengo productos debe mostrar un mensaje que indique que no hay productos cargados

function renderizadoCarritoFinal(){
    const productos = cargaProductosCarrito();
    let salida = "";
    
    if (totalCargadosCarrito() > 0){
        salida += `<table class="table">
        <tr>
        <td><p></p></td>
        <td><p><b>Producto</b></p></td>
        <td><p><b>Cantidad</b></p></td>
        <td><p><b>Subtotal</b></p></td>
        <td class= "text-end"><button class="btn btn-secondary" onclick="vaciadoCarrito()">Vaciar carrito</button></td>
        </tr>`;

        productos.forEach (function (producto){
        salida += `<tr>
        <td><img src="${"imagenes/" + producto.imagen1}" alt="Producto a comprar" width="100"></td>
        <td><p class="pt-5">${producto.nombre}</p></td>
        <td><p class="pt-5">${producto.cantidad}  x ${producto.precio}$</td> 
        <td><p class="pt-5">${producto.cantidad * producto.precio}$</p></td>
        <td class="text-end pt-5"><button class="btn btn-outline" onclick="eliminarProductoCarrito(${producto.id});" title="Eliminar Producto"><img src="imagenes/delete.svg" alt="Eliminar Producto" width="24" /></button></td>
            </tr>`;
        })

        salida += `<tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td><p class="pt-3 pb-3"><b>Total:</b></p></td>
        <td><p class="pt-3 pb-3"><b>${totalPagar()}$</b></td></p>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        </tr>`;

        salida += `<tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td class= "text-end"><button class="btn btn-secondary" onclick="botonComprar()">Comprar</button></td>
        </tr>`

        salida += `</table>`

    } else{
        salida = `<div class="alert alert-dark" role="alert">
        <p class="paragraph-maceta text-center pt-5 pb-5">No tienes productos cargados a tu lista de compras. Ve a <b>Productos</b> y selecciona todo lo que necesites!</p>
      </div>`
    };
     document.getElementById("productos").innerHTML = salida;
}

//Funcion bonton compra, aviso con alerta
function botonComprar() {
    Swal.fire({
      title: "¡Confirma tu compra!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor:"#FFA384",
      cancelButtonColor: "#ABDBCA",
      confirmButtonText: "Sí, confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
            position:'center',
            title:'Tu pedido esta en camino. <img src="imagenes/deliver.svg">',
            text: 'Gracias por confiar en Luco. ¡Vuelve pronto!',
            showConfirmButton: false,
            timer: 3000
          })
        vaciadoCarrito();
      }
    });
  }


renderizadoCarritoFinal();
actualizadoIconoCarrito()