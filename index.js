const seccionNuevaOperacion = document.getElementById("section-nueva-operacion")
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion")
const seccionPrincipal = document.getElementById("seccion-principal")
const seccionCategoria = document.getElementById("seccion-categoria")
const seccionReporte = document.getElementById("seccion-reporte")
const botonReporte = document.getElementById("boton-reporte")
const botonBalance = document.getElementById("boton-balance")
const botonCategorias = document.getElementById("boton-categorias")
const botonOcultarFiltros = document.getElementById("boton-ocultar-filtros")
const divFormularioFiltros = document.getElementById("div-formulario-filtros")
const divOperacionesImagenTexto = document.getElementById("div-operaciones-imagen-texto")
const divDatosOperacionesTitulo = document.getElementById("div-datos-operaciones-titulo")
const botonAgregarFormularioNuevaOperacion = document.getElementById("boton-agregar-formulario-nueva-operacion")


// div datos js para modificar
const divDatosOperacionJS = document.getElementById("div-datos-operacion-jS")

// boton "agregar" en SECCION NUEVA OPERACION 
 
botonAgregarFormularioNuevaOperacion.onclick = () => {
    divOperacionesImagenTexto.classList.add("is-hidden")
    divDatosOperacionesTitulo.classList.remove("is-hidden")
    seccionNuevaOperacion.classList.add("is-hidden")
    seccionPrincipal.classList.remove("is-hidden")
}


// boton balance  

botonBalance.onclick = () => {
    
    seccionPrincipal.classList.remove("is-hidden")
    seccionCategoria.classList.add("is-hidden")
    seccionReporte.classList.add("is-hidden")
    seccionNuevaOperacion.classList.add("is-hidden")
    divDatosOperacionesTitulo.classList.add("is-hidden")
    divOperacionesImagenTexto.classList.remove("is-hidden")
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

//boton ocultar filtros SECCION FILTRO

botonOcultarFiltros.onclick = () => {
    divFormularioFiltros.classList.toggle("is-hidden")
}

// boton nueva operacion SECCION OPERACIONES 


botonNuevaOperacion.onclick = () => {
    seccionNuevaOperacion.classList.remove("is-hidden")
    seccionPrincipal.classList.add("is-hidden")

}  



