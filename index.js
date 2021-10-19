const seccionNuevaOperacion = document.getElementById("section-nueva-operacion")
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion")
const seccionPrincipal = document.getElementById("seccion-principal")
const seccionCategoria = document.getElementById("seccion-categoria")
const seccionReporte = document.getElementById("seccion-reporte")
const botonReporte = document.getElementById("boton-reporte")
const botonBalance = document.getElementById("boton-balance")
const botonCategorias = document.getElementById("boton-categorias")

console.log("hola")




// boton nueva operacion 


botonNuevaOperacion.onclick = () => {
    seccionNuevaOperacion.classList.remove("is-hidden")
    seccionPrincipal.classList.add("is-hidden")

}  

// boton balance 

botonBalance.onclick = () => {
    seccionPrincipal.classList.remove("is-hidden")
    seccionCategoria.classList.add("is-hidden")
    seccionReporte.classList.add("is-hidden")
    seccionNuevaOperacion.classList.add("is-hidden")
}

// boton categorias 

botonCategorias.onclick = () => {
    seccionCategoria.classList.remove("is-hidden")
    seccionPrincipal.classList.add("is-hidden")
    seccionReporte.classList.add("is-hidden")
    seccionNuevaOperacion.classList.add("is-hidden")
}

// boton reporte

botonReporte.onclick = () => {
    seccionReporte.classList.remove("is-hidden")
    seccionPrincipal.classList.add("is-hidden")
    seccionCategoria.classList.add("is-hidden")
    seccionNuevaOperacion.classList.add("is-hidden")
}
