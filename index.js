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
const botonAgregarOperacion = document.getElementById(
	"boton-agrega-nueva-operacion"
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

// boton balance

botonBalance.onclick = () => {
	seccionPrincipal.classList.remove("is-hidden");
	seccionCategoria.classList.add("is-hidden");
	seccionReporte.classList.add("is-hidden");
	seccionNuevaOperacion.classList.add("is-hidden");
	divOperacionesImagenTexto.classList.remove("is-hidden");
	divDatosOperacionesTitulo.classList.add("is-hidden");
	divDatosOperacionJs.classList.add("is-hidden");
	seccionModalParaEditarCategoria.classList.add("is-hidden");
};

// boton categorias

botonCategorias.onclick = () => {
	seccionCategoria.classList.remove("is-hidden");
	seccionPrincipal.classList.add("is-hidden");
	seccionReporte.classList.add("is-hidden");
	seccionNuevaOperacion.classList.add("is-hidden");
	seccionModalParaEditarCategoria.classList.add("is-hidden");
};

// boton reporte

botonReporte.onclick = () => {
	seccionReporte.classList.remove("is-hidden");
	seccionPrincipal.classList.add("is-hidden");
	seccionCategoria.classList.add("is-hidden");
	seccionNuevaOperacion.classList.add("is-hidden");
	seccionModalParaEditarCategoria.classList.add("is-hidden");
};

//boton ocultar filtros SECCION OPERACIONES (formulario filtro)

botonOcultarFiltros.onclick = () => {
	divFormularioFiltros.classList.toggle("is-hidden");
};

// boton nueva operacion SECCION OPERACIONES

botonNuevaOperacion.onclick = () => {
	seccionNuevaOperacion.classList.remove("is-hidden");
	seccionPrincipal.classList.add("is-hidden");
};

// boton "agregar" en SECCION NUEVA OPERACION

botonAgregarFormularioNuevaOperacion.onclick = () => {
	seccionNuevaOperacion.classList.add("is-hidden");
	seccionPrincipal.classList.remove("is-hidden");
	divOperacionesImagenTexto.classList.add("is-hidden");
	divDatosOperacionesTitulo.classList.remove("is-hidden");
	divDatosOperacionJs.classList.remove("is-hidden");
};

//FUNCION AGREGAR CATEGORIA

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
	agregarOnClicks();
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
	divMostrarCategoriasHtml.innerHTML = "";
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
		<button class="button tag is-ghost" id="boton-editar-categoria">Editar</button>
		<button class="button tag is-ghost" id="boton-eliminar-categoria" data-id="${elemento.id}">Eliminar</button>
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

// funcion auxliar

const mostrarEnHTML = (array) => {
	let acc = ``;

	const funcionAuxiliarParaHtml = array.map((elemento) => {
		acc =
			acc +
			`
 <div class="columns">
	<div class="column is-3">
  <p>${elemento.descripcion}</p>
  </div>
  <div class="column is-3">
     <p class="tag has-background-primary-light has-text-primary-dark">${elemento.categoria}  </p>
  </div>
  <div class="column is-2 has-text-right">${elemento.fecha}</div>
   <div class="column is-2 has-text-right">${elemento.monto}</div>
     <div class="column is-2 has-text-right">

     <button class=" tag button is-ghost">Editar</button>
       <button class=" tag button is-ghost">Eliminar</button>
   </div>
  </div>
	 </div>

	`;
		divDatosOperacionJs.innerHTML = acc;
	});
};

// mostrar operaciones

botonAgregarOperacion.onclick = () => {
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
	localStorage.setItem(
		"tp-ahorradas",
		JSON.stringify(operacionesVerificaLocalStorage)
	);
	mostrarOperaciones();
};

const mostrarOperaciones = () => {
	let mostrarDelLocalStorage = guardarEnLocalStorage();
	mostrarEnHTML(mostrarDelLocalStorage.operaciones);
};
mostrarOperaciones();

// formulario FILTRO

const selectFiltroTipo = document.getElementById("select-filtro-tipo");

const aplicarFiltros = () => {
	const selectTipo = selectFiltroTipo.value;
	let operacionesDato = guardarEnLocalStorage();

	const filtrarPorTipo = operacionesDatos.operaciones.filter((operacion) => {
		if (selectTipo === "todo") {
			return operacion;
		}
		return operacion.tipo === selectTipo;
	});

	const filtrarPorCategoria = filtroCategoria.value;
	const filtradoFinal = filtroTipo.filter((operacion) => {
		if (filtrarPorCategoria === "todos") {
			return operacion;
		}
		return operacion.categoria === filtrarPorCategoria;
	});

	return filtradoFinal;
};

divFormularioFiltros.onchange = () => {
	const filtrado = aplicarFiltros();
	mostrarEnHTML(filtrado);
};

divFormularioFiltro.onchange = () => {
	const filtrado = aplicarFiltros();
	mostrarEnHTML(filtrado);
};

//boton abrir modal ditar categorias
const botonEditarCategoria = document.getElementById("boton-editar-categoria");
const seccionModalParaEditarCategoria = document.getElementById(
	"seccion-modal-editar-categoria"
);
botonEditarCategoria.onclick = () => {
	seccionModalParaEditarCategoria.classList.remove("is-hidden");
	seccionCategoria.classList.add("is-hidden");
};
//viqui funciona solo con el primer boton- ver de implementar un for
<<<<<<< HEAD
=======

//*** FILTRO FECHA OPERACIONES*/

const filtroFecha = (operacionesArray, date) => {
	return operacionesArray.filter((operacion) => {
		return date <= new Date(operacion.fecha);
	});
};

//*** FILTRO ORDENAR */
// 1º POR FECHA 

const ordenFecha = (ope1,ope2)=>{
	//si la primer fecha esta antes de la 2da 
if(ope1.date > ope2.date){
	return 1
}
//si la segunda esta antes que la primera
if(ope1.date < ope2.date){
	return -1
}
return 0; // si son iguales. =
}

//2º POR MONTO EVALUAR CUANDO ES NEGATIVO?

const ordenMonto = (ope1, ope2) => {
	// nos fijamos con el operador ternario si es tipo ganancia da true primero sino (:) false se le agrega el -
	const monto1 = ope1.tipo === "ganancia" ? Number(ope1.monto) : (Number(ope2.monto)*-1)
	const monto2 = ope2.tipo === "ganancia" ? Number(ope1.monto) : (Number(ope2.monto)*-1)
	return monto1 - monto2 //trabajamos con numeros monto2 - monto1
}

//3º DE LA AZ-ZA
const ordenAZ = (ope1, ope2)=>{
	// si ope1 debe ir ordenada antes que ope2 return 1
	if (ope1.descripcion > ope2.descripcion) {
		return 1;
	}
	// si ope1 debe ir ordenada despues que ope2 return -1
	if (ope1.descripcion < ope2.descripcion) {
		return -1;
	}
	// si ambas son iguales 
	return 0;
}
const operacionOrdenar = (operacionesArray, ordenElegido)=>{

	//esta funcion nos ayuda verificando el value elegido por el usuario y retorna un callback segun corresponda
	switch (ordenElegido) {
		case "ordenFechaMenosReciente":
			return operacionesArray.sort((ope1,ope2)=>{
				return ordenFecha(ope1,ope2)
			})
	 	case "ordenFechaMasReciente":
			 return operacionesArray.sort((ope1,ope2)=>{
				 return ordenFecha(ope1,ope2)
			 })
		case "ordenMontoMayor":
			return operacionesArray.sort((ope1,ope2)=>{
				return ordenMonto(ope1,ope2)
			})
		case "ordenMontoMenor":
			return operacionesArray.sort((ope1,ope2)=>{
				return ordenMonto(ope1,ope2)
			})
		case "ordenAZ":
			return operacionesArray.sort((ope1,ope2)=>{
				return ordenAZ(ope1,ope2)
			})
		case "ordenZA":
			return operacionesArray.sort((ope1,ope2)=>{
				return ordenAZ(ope1,ope2)
			})
		default:
			return operacionesArray;
			break;
	}
}


// funcion filtros general
const filtrosFormulario = document.getElementById("div-formulario-filtros");
filtrosFormulario.onchange = () => {
	const storageLocal = guardarEnLocalStorage(); //leer localstorage
	let operacionesArray = storageLocal.operaciones;
	// fecha
	const inputFiltroFecha = document.getElementById("input-fecha");
	if (inputFiltroFecha.value !== "") {
		const date = new Date(inputFiltroFecha.value);
		operacionesArray = filtroFecha(operacionesArray, date); // llama a la funcion filtro fecha
	}
	
	//sort
	const ordenFiltro = document.getElementById("orden-filtro");
	const ordenElegido = ordenFiltro.value
	operacionesArray = operacionOrdenar(operacionesArray, ordenElegido); //nos fijamos en el switch le pasamos el array de operaciones y el orden elegido.

};

const agregarOnClicks = () => {
	const botonesEliminarCategorias = document.querySelectorAll(
		"#boton-eliminar-categoria"
	);

	for (let i = 0; i < botonesEliminarCategorias.length; i++) {
		// const prueba = guardarEnLocalStorage.id;
		botonesEliminarCategorias[i].onclick = (e) => {
			// Leo la informacion que tengo en el LocalStorage
			let informacionEnLocalStorage = guardarEnLocalStorage();
			// Creo un nuevo array filtrando el id de la categoria que se clickeo
			const nuevoArray = informacionEnLocalStorage.categorias.filter(
				(item) => item.id != e.target.dataset.id
			);
			// Cambio el array del local storage por el nuevo array que no tiene el elemento
			informacionEnLocalStorage.categorias = nuevoArray;
			// Guardo nuevamente el objeto en el LocalStorage
			localStorage.setItem(
				"tp-ahorradas",
				JSON.stringify(informacionEnLocalStorage)
			);
			// Llamo denuevo a la funcion que lee el localStorage y crea los elementos html
			mostrarCategorias();
			// Llamo a la funcion que les agrega los onclicks a los elementos recien creados
			agregarOnClicks();
		};
	}
};
agregarOnClicks();
>>>>>>> 009c4cb5f17bf7d04035871179cc68ead85cd131
