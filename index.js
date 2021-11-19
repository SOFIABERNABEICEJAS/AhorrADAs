// elementos del DOM

const seccionNuevaOperacion = document.getElementById(
	"seccion-nueva-operacion"
);
const botonNuevaOperacion = document.getElementById("boton-nueva-operacion");
const seccionPrincipal = document.getElementById("seccion-principal");
const seccionCategoria = document.getElementById("seccion-categoria");
const seccionReporte = document.getElementById("seccion-reporte");
const botonReporte = document.getElementById("boton-reporte");
const botonBalance = document.getElementById("boton-balance");
const botonCategorias = document.getElementById("boton-categorias");
const botonOcultarFiltros = document.getElementById("boton-ocultar-filtros");
const divFormularioFiltros = document.getElementById("div-formulario-filtros");
const divOperacionesImagenTexto = document.getElementById(
	"div-operaciones-imagen-texto"
);
const divDatosOperacionesTitulo = document.getElementById(
	"div-datos-operaciones-titulo"
);
const botonAgregarFormularioNuevaOperacion = document.getElementById(
	"boton-agregar-formulario-nueva-operacion"
);
const inputAgregarCategorias = document.getElementById(
	"input-agregar-categorias"
);
const botonAgregarCategorias = document.getElementById(
	"boton-agregar-categorias"
);
const selectFiltroCategorias = document.getElementById(
	"select-filtro-categorias"
);
const divMostrarCategoriasHtml = document.getElementById(
	"div-mostrar-categorias-html"
);
const divDatosOperacionJs = document.getElementById("div-datos-operacion-js");

// boton "agregar" en SECCION NUEVA OPERACION

botonAgregarFormularioNuevaOperacion.onclick = () => {
	divOperacionesImagenTexto.classList.add("is-hidden");
	divDatosOperacionesTitulo.classList.remove("is-hidden");
	seccionNuevaOperacion.classList.add("is-hidden");
	seccionPrincipal.classList.remove("is-hidden");
};

// boton balance

botonBalance.onclick = () => {
	seccionPrincipal.classList.remove("is-hidden");
	seccionCategoria.classList.add("is-hidden");
	seccionReporte.classList.add("is-hidden");
	seccionNuevaOperacion.classList.add("is-hidden");
	divOperacionesImagenTexto.classList.remove("is-hidden");
	divDatosOperacionesTitulo.classList.add("is-hidden");
	divDatosOperacionJs.add("is-hidden");
};

// boton "agregar" en SECCION NUEVA OPERACION

botonAgregarFormularioNuevaOperacion.onclick = () => {
	seccionNuevaOperacion.classList.add("is-hidden");
	seccionPrincipal.classList.remove("is-hidden");
	divOperacionesImagenTexto.classList.add("is-hidden");
	divDatosOperacionesTitulo.classList.remove("is-hidden");
	divDatosOperacionJs.classList.remove("is-hidden");
};

// boton categorias

botonCategorias.onclick = () => {
	seccionCategoria.classList.remove("is-hidden");
	seccionPrincipal.classList.add("is-hidden");
	seccionReporte.classList.add("is-hidden");
	seccionNuevaOperacion.classList.add("is-hidden");
};

//funcion agregar categorias

botonAgregarCategorias.onclick = () => {
	const agregarCategorias = () => {
		let agregarNuevasCategorias = inputAgregarCategorias.value;

		const verificaLocalStorage = guardarEnLocalStorage();
		const nuevasCategorias = {
			id: setearID(),
			nombre: agregarNuevasCategorias,
		};
		verificaLocalStorage.categorias.push(nuevasCategorias);
		localStorage.setItem("tp-ahorradas", JSON.stringify(verificaLocalStorage));
	};
	agregarCategorias();
	mostrarCategorias();
	mostrarCategoriasSelect();
};

// boton reporte

botonReporte.onclick = () => {
	seccionReporte.classList.remove("is-hidden");
	seccionPrincipal.classList.add("is-hidden");
	seccionCategoria.classList.add("is-hidden");
	seccionNuevaOperacion.classList.add("is-hidden");
};

//boton ocultar filtros SECCION FILTRO

botonOcultarFiltros.onclick = () => {
	divFormularioFiltros.classList.toggle("is-hidden");
};

// boton nueva operacion SECCION OPERACIONES

botonNuevaOperacion.onclick = () => {
	seccionNuevaOperacion.classList.remove("is-hidden");
	seccionPrincipal.classList.add("is-hidden");
};

//guardar en local storage
const guardarEnLocalStorage = () => {
	let infoTraidaDeStorage = JSON.parse(localStorage.getItem("tp-ahorradas"));
	if (!infoTraidaDeStorage) {
		infoTraidaDeStorage = {
			categorias: [
				{
					id: 1,
					nombre: "Comidas",
				},
				{
					id: 2,
					nombre: "Servicios",
				},
				{
					id: 3,
					nombre: "Salidas",
				},
				{
					id: 4,
					nombre: "Educación",
				},
				{
					id: 5,
					nombre: "Transporte",
				},
				{
					id: 6,
					nombre: "Trabajo",
				},
			],
			operaciones: [],
		};
	}
	return infoTraidaDeStorage;
};

// agregar id a categorias-
const setearID = () => {
	const storageLocal = guardarEnLocalStorage();

	if (storageLocal.categorias.length > 0) {
		// se fija cual es el ultimo
		const obtenerItemUltimo =
			storageLocal.categorias[storageLocal.categorias.length - 1];

		// retorna el ultimo + 1
		return obtenerItemUltimo.id + 1;
	}
};

//funcion mostrar categorias
const mostrarCategorias = () => {
	let mostrarDelLocalStorage = guardarEnLocalStorage();
	const mostrarCategoriaHtml = mostrarDelLocalStorage.categorias.reduce(
		(acc, elemento, index) => {
			return (
				acc +
				`
		<div class="columns">
	<div class="column">
		<span class="tag has-text-primary-dark has-background-link-light" id="${elemento.id}">
			${elemento.nombre}
		</span>
	</div>
	<div class="column has-text-right">
		<button class="button tag is-ghost" id="boton-editar-categoria-${index}">Editar</button>
		<button class="button tag is-ghost">Eliminar</button>
	</div>
</div>
		`
			);
		},
		""
	);
	divMostrarCategoriasHtml.innerHTML = mostrarCategoriaHtml;
};
mostrarCategorias();

const mostrarCategoriasSelect = () => {
	let mostrarDelLocalStorage = guardarEnLocalStorage();
	const mostrarCategoriaEnSelect = mostrarDelLocalStorage.categorias.reduce(
		(acc, elemento) => {
			return (
				acc +
				`
	<option>${elemento.nombre}</option>
		`
			);
		},
		""
	);
	selectFiltroCategorias.innerHTML = mostrarCategoriaEnSelect;
};

mostrarCategoriasSelect();

const inputTextoNuevaOperacion = document.getElementById(
	"input-texto-nueva-operacion"
);

const inputMontoNuevaOperacion = document.getElementById(
	"input-monto-nueva-operacion"
);

const selectTipoNuevaOperacion = document.getElementById(
	"select-tipo-nueva-operacion"
);

const selectCategoriaNuevaOperacion = document.getElementById(
	"select-categoria-nueva-operacion"
);

const inputFechaNuevaOperacion = document.getElementById(
	"input-fecha-nueva-operacion"
);

const formularioNuevaOperacion = document.getElementById(
	"formulario-nueva-operacion"
);

formularioNuevaOperacion.onsubmit = () => {
	const descripcionNuevaOperacion = inputTextoNuevaOperacion.value;
	const montoNuevaOperacion = inputMontoNuevaOperacion.value;
	const tipoNuevaOperacion = selectTipoNuevaOperacion.value;
	const categoriaNuevaOperacion = selectCategoriaNuevaOperacion.value;
	const fechaNuevaOperacion = inputFechaNuevaOperacion.value;

	const valorNuevaOperacion = {
		descripcion: descripcionNuevaOperacion,
		monto: montoNuevaOperacion,
		tipo: tipoNuevaOperacion,
		categoria: categoriaNuevaOperacion,
		fecha: fechaNuevaOperacion,
	};

	const operacionesVerificaLocalStorage = guardarEnLocalStorage();
	operacionesVerificaLocalStorage.operaciones.push(valorNuevaOperacion);
	console.log(valorNuevaOperacion);
	localStorage.setItem(
		"tp-ahorradas",
		JSON.stringify(operacionesVerificaLocalStorage)
	);
};

const mostrarOperaciones = () => {
	let mostrarDelLocalStorage = guardarEnLocalStorage();

	let acc = ``;

	const mostrarNuevaOperacionEnHtml = mostrarDelLocalStorage.operaciones.map(
		(elemento) => {
			acc =
				acc +
				`
	<div class="column is-3">
  <p>${elemento.descripcion}</p>
  </div>
  <div class="column is-3">
     <p class="tag has-background-primary-light has-text-primary-dark">${elemento.categoria}  </p>
  </div>
  <div class="column is-2 has-text-right">${elemento.fecha}</div>
   <div class="column is-2 has-text-right">${elemento.monto}</div>
     <div class="column is-2 has-text-right">

     <button class=" tag button is-ghost">Ghost</button>
       <button class=" tag button is-ghost">Ghost</button>
   </div>

	`;
			divDatosOperacionJs.innerHTML = acc;
		}
	);
};
mostrarOperaciones();

//boton editar categorias abrir modal
const botonEditarCategoria = document.getElementById("boton-editar-categoria");
const seccionEditarCategoria = document.getElementById(
	"seccion-editar-categoria"
);

// for (let index = 0; index < botonEditarCategoria.length; index++) {
// 	// const element = array[index];
// 	console.log("hola");// }
botonEditarCategoria.onclick = () => {
	seccionEditarCategoria.classList.remove("is-hidden");
	seccionCategoria.classList.add("is-hidden");
	console.log("abrir modal");
};

//viqui funciona solo con el primer boton- ver de implementar un for
