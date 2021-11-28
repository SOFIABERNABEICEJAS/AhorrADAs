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
const selectFiltroTipo = document.getElementById("select-filtro-tipo");
const divMostrarBalance = document.getElementById("div-mostrar-balance");
const botonCancelarModalCategorias =
	document.getElementById("cancelar-categoria");
const botonCancelarModalOperaciones = document.getElementById(
	"cancelar-operaciones"
);
const inputFecha = document.getElementById("input-fecha");
const filtroSort = document.getElementById("orden-filtro");

const inputEditarCategorias = document.getElementById(
	"input-editar-categorias"
);
const botonEditarCategoriasModal = document.getElementById("editar-categoria");
const selectEditarOperacionesModalCategoria = document.getElementById(
	"editar-categorias-operaciones"
);
// elementos del formulario editar operacion
const inputEditarDescripcion = document.getElementById("editar-descripcion");
const inputEditarMonto = document.getElementById("editar-monto");
const selectEditarTipo = document.getElementById("editar-tipo");
const selectEditarCategorias = document.getElementById(
	"editar-categorias-operaciones"
);
const inputEditarFecha = document.getElementById("editar-fecha");
const botonCancelarModalDeEditarOperaciones = document.getElementById(
	"boton-cancelar-edicion"
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

//Leer del local storage
const leerLocalStorage = () => {
	let infoTraidaDeStorage = JSON.parse(localStorage.getItem("tp-ahorradas"));
	if (!infoTraidaDeStorage) {
		infoTraidaDeStorage = {
			categorias: [
				{
					id: 1,
					nombre: "comidas",
				},
				{
					id: 2,
					nombre: "servicios",
				},
				{
					id: 3,
					nombre: "salidas",
				},
				{
					id: 4,
					nombre: "educación",
				},
				{
					id: 5,
					nombre: "transporte",
				},
				{
					id: 6,
					nombre: "trabajo",
				},
			],
			operaciones: [],
		};
	}
	return infoTraidaDeStorage;
};

// funcion auxiliar

// funcion auxiliar
const mostrarEnHTML = (array) => {
	divDatosOperacionJs.innerHTML = "";
	const funcionAuxiliarParaHtml = array.reduce((acc, elemento) => {
		return (acc += `
	<div class="columns">
		<div class="column is-3">
  		<p id="${elemento.id}">${elemento.descripcion}</p>
  	</div>
  	<div class="column is-3">
     	<p class="tag has-background-primary-light has-text-primary-dark"id="${
			elemento.id
		}">${elemento.categoria}</p>
		</div>
  	<div class="column is-2 has-text-right" id="${elemento.id}">${elemento.fecha}
		</div> 
   	<div class="column is-2 has-text-right">
			${
				elemento.tipo === "ganancia"
					? `<p class="has-text-success" id="` +
					  elemento.id +
					  `">$+` +
					  elemento.monto +
					  `</p>`
					: `<p class="has-text-danger" id="` +
					  elemento.id +
					  `">$-` +
					  elemento.monto +
					  `</p>`
			}
		</div>
    <div class="column is-2 has-text-right">
			<button class=" tag button is-ghost" id="boton-editar-operacion">Editar</button>
			<button class=" tag button is-ghost" id="boton-eliminar-operacion">Eliminar</button>
  	</div>
	</div>
	 `);
	}, "");
	divDatosOperacionJs.innerHTML = funcionAuxiliarParaHtml;
};

// funcion auxiliar suma

const funcionSumar = (num1, num2) => {
	return num1 - num2;
};

//funcion agregar categoria

botonAgregarCategorias.onclick = () => {
	const agregarCategorias = () => {
		let agregarNuevasCategorias = inputAgregarCategorias.value;

		const verificaLocalStorage = leerLocalStorage();
		const nuevasCategorias = {
			id: setearID(),
			nombre: agregarNuevasCategorias,
		};
		verificaLocalStorage.categorias.push(nuevasCategorias);
		localStorage.setItem(
			"tp-ahorradas",
			JSON.stringify(verificaLocalStorage)
		);
	};
	agregarCategorias();
	mostrarCategorias();
	mostrarCategoriasSelect();
	agregarOnClicks();
};

const mostrarOperaciones = () => {
	let mostrarDelLocalStorage = leerLocalStorage();
	mostrarEnHTML(mostrarDelLocalStorage.operaciones);
	agregarOnClicksBotonesOperaciones();
};
mostrarOperaciones();

// agregar id a categorias-
const setearID = () => {
	const storageLocal = leerLocalStorage();

	if (storageLocal.categorias.length > 0) {
		// se fija cual es el ultimo
		const obtenerItemUltimo =
			storageLocal.categorias[storageLocal.categorias.length - 1];

		// retorna el ultimo + 1
		return obtenerItemUltimo.id + 1;
	}
};
//agregar id  a operaciones
const idOperaciones = () => {
	const localStorage = leerLocalStorage();
	if (localStorage.operaciones.length > 0) {
		const obtenerItemUltimo =
			localStorage.operaciones[localStorage.operaciones.length - 1];
		return obtenerItemUltimo.id + 1;
	}
};
//funcion mostrar categorias
const mostrarCategorias = () => {
	let mostrarDelLocalStorage = leerLocalStorage();
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
		<button class="button tag is-ghost" id="boton-editar-categoria" data-id="${elemento.id}">Editar</button>
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
	let mostrarDelLocalStorage = leerLocalStorage();
	const mostrarCategoriaEnSelect = mostrarDelLocalStorage.categorias.reduce(
		(acc, elemento) => {
			return (
				acc +
				`
	<option value="${elemento.nombre}">${elemento.nombre}</option>
		`
			);
		},
		'<option value="todas">Todas</option>'
	);
	selectFiltroCategorias.innerHTML = mostrarCategoriaEnSelect;
	selectCategoriaNuevaOperacion.innerHTML = mostrarCategoriaEnSelect;
	selectEditarOperacionesModalCategoria.innerHTML = mostrarCategoriaEnSelect;
};

mostrarCategoriasSelect();

// funcion mostrar operaciones
botonAgregarOperacion.onclick = () => {
	const descripcionNuevaOperacion = inputTextoNuevaOperacion.value;
	const montoNuevaOperacion = Number(inputMontoNuevaOperacion.value);
	const tipoNuevaOperacion = selectTipoNuevaOperacion.value;
	const categoriaNuevaOperacion = selectCategoriaNuevaOperacion.value;
	const fechaNuevaOperacion = inputFechaNuevaOperacion.value;

	const valorNuevaOperacion = {
		id: idOperaciones(),
		descripcion: descripcionNuevaOperacion,
		monto: montoNuevaOperacion,
		tipo: tipoNuevaOperacion,
		categoria: categoriaNuevaOperacion,
		fecha: fechaNuevaOperacion,
	};

	const operacionesVerificaLocalStorage = leerLocalStorage();
	operacionesVerificaLocalStorage.operaciones.push(valorNuevaOperacion);
	localStorage.setItem(
		"tp-ahorradas",
		JSON.stringify(operacionesVerificaLocalStorage)
	);
	mostrarOperaciones();
};

// FILTRO ORDENAR
// 1º POR FECHA

const ordenFecha = (ope1, ope2) => {
	//si la primer fecha esta antes de la 2da
	if (ope1.date > ope2.date) {
		return 1;
	}
	//si la segunda esta antes que la primera
	if (ope1.date < ope2.date) {
		return -1;
	}
	return 0; // si son iguales. =
};

//2º POR MONTO EVALUAR CUANDO ES NEGATIVO?

const ordenMonto = (ope1, ope2) => {
	// nos fijamos con el operador ternario si es tipo ganancia da true primero sino (:) false se le agrega el -
	const monto1 =
		ope1.tipo === "ganancia" ? Number(ope1.monto) : Number(ope2.monto) * -1;
	const monto2 =
		ope2.tipo === "ganancia" ? Number(ope1.monto) : Number(ope2.monto) * -1;
	return monto1 - monto2; //trabajamos con numeros monto2 - monto1
};

//3º DE LA AZ-ZA
const ordenAZ = (ope1, ope2) => {
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
};
const operacionOrdenar = (operacionesArray, ordenElegido) => {
	//esta funcion nos ayuda verificando el value elegido por el usuario y retorna un callback segun corresponda
	switch (ordenElegido) {
		case "ordenFechaMenosReciente":
			return operacionesArray.sort((ope1, ope2) => {
				return ordenFecha(ope1, ope2);
			});
		case "ordenFechaMasReciente":
			return operacionesArray.sort((ope1, ope2) => {
				return ordenFecha(ope1, ope2);
			});
		case "ordenMontoMayor":
			return operacionesArray.sort((ope1, ope2) => {
				return ordenMonto(ope1, ope2);
			});
		case "ordenMontoMenor":
			return operacionesArray.sort((ope1, ope2) => {
				return ordenMonto(ope1, ope2);
			});
		case "ordenAZ":
			return operacionesArray.sort((ope1, ope2) => {
				return ordenAZ(ope1, ope2);
			});
		case "ordenZA":
			return operacionesArray.sort((ope1, ope2) => {
				return ordenAZ(ope1, ope2);
			});
		default:
			return operacionesArray;
			break;
	}
};

const aplicarFiltros = () => {
	const leoStorage = leerLocalStorage();
	const operacionesArray = leoStorage.operaciones;

	const selectTipo = selectFiltroTipo.value;
	const selectCategoria = selectFiltroCategorias.value;
	const valorFecha = inputFecha.value;
	const tipoSort = filtroSort.value;

	// Guardo en resultado el array original para que si no aplico ningun filtro se muestre todo
	let resultado = operacionesArray;

	// Filtrar por tipo si tengo un tipo seleccionado diferente a todos
	if (selectTipo != "todos") {
		resultado = resultado.filter((elemento) => {
			if (selectTipo == elemento.tipo) {
				return elemento;
			}
		});
	}

	// Filtrar por categoria si tengo una categoria seleccionado diferente a todas
	if (selectCategoria != "todas") {
		resultado = resultado.filter((elemento) => {
			if (selectCategoria == elemento.categoria) {
				return elemento;
			}
		});
	}

	// Filtrar por fecha si el valor de fecha no está vacio
	if (valorFecha !== "") {
		const fecha = new Date(valorFecha);
		resultado = resultado.filter((elemento) => {
			return fecha <= new Date(elemento.fecha);
		});
	}

	resultado = operacionOrdenar(resultado, tipoSort);

	return resultado;
};

selectFiltroCategorias.onchange = () => {
	const filtrado = aplicarFiltros();
	mostrarEnHTML(filtrado);
};

selectFiltroTipo.onchange = () => {
	const filtrado = aplicarFiltros();
	mostrarEnHTML(filtrado);
};
inputFecha.onchange = () => {
	const filtrado = aplicarFiltros();
	mostrarEnHTML(filtrado);
};
filtroSort.onchange = () => {
	const filtrado = aplicarFiltros();
	mostrarEnHTML(filtrado);
};

//boton abrir modal editar categorias
const botonEditarCategoria = document.getElementById("boton-editar-categoria");
const seccionModalParaEditarCategoria = document.getElementById(
	"seccion-modal-editar-categoria"
);
botonEditarCategoria.onclick = () => {
	seccionModalParaEditarCategoria.classList.remove("is-hidden");
	seccionCategoria.classList.add("is-hidden");
};
//viqui funciona solo con el primer boton- ver de implementar un for

let categoriaAEditar = "";
//funcion eliminar categorias
const agregarOnClicks = () => {
	const botonesEliminarCategorias = document.querySelectorAll(
		"#boton-eliminar-categoria"
	);
	const botonesEditarCategorias = document.querySelectorAll(
		"#boton-editar-categoria"
	);
	for (let i = 0; i < botonesEliminarCategorias.length; i++) {
		// const prueba = leerLocalStorage.id;
		botonesEliminarCategorias[i].onclick = (e) => {
			// Leo la informacion que tengo en el LocalStorage
			let informacionEnLocalStorage = leerLocalStorage();
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
	//for que edita las categorias y abre el modal
	for (let i = 0; i < botonesEditarCategorias.length; i++) {
		botonesEditarCategorias[i].onclick = (e) => {
			//Escondo el modal de lista
			seccionModalParaEditarCategoria.classList.remove("is-hidden");
			//Agrego el modal de editar
			seccionCategoria.classList.add("is-hidden");
			//Guardo el id donde se clickeo
			categoriaAEditar = e.target.dataset.id;
			//Leo la información que tengo en el local storage
			let infoLeidaDeLocalStorage = leerLocalStorage();
			//Creo un nuevo array filtrando que el id sea igual al que se clickeo para editar
			const nuevoArray = infoLeidaDeLocalStorage.categorias.filter(
				(item) => item.id == e.target.dataset.id
			);
			//Seteo el valor del input con el nombre del elemento que se clickeo
			inputEditarCategorias.value = nuevoArray[0].nombre;
		};
	}
};
agregarOnClicks();

//cancelar la edición de las categorias
botonCancelarModalCategorias.onclick = () => {
	seccionModalParaEditarCategoria.classList.add("is-hidden");
	seccionCategoria.classList.remove("is-hidden");
};
//cancelar la edición de las operaciones
botonCancelarModalOperaciones.onclick = (e) => {
	e.preventDefault();
	seccionNuevaOperacion.classList.add("is-hidden");
	seccionPrincipal.classList.remove("is-hidden");
};

//funcionalidad al boton que edita las categorias en el modal
botonEditarCategoriasModal.onclick = () => {
	const leoLocalStorage = leerLocalStorage();
	// Recorro el local storage buscando el elemento que tiene de id la categoria a editar
	for (let i = 0; i < leoLocalStorage.categorias.length; i++) {
		// Guardo el elemento actual
		const element = leoLocalStorage.categorias[i];
		// Si tiene el mismo id que la categoria a editar
		if (element.id == categoriaAEditar) {
			// Cambio el nombre por lo que esta en el input
			element.nombre = inputEditarCategorias.value;
			// Lo guardo en el local storage
			localStorage.setItem(
				"tp-ahorradas",
				JSON.stringify(leoLocalStorage)
			);
			// Recargo el modal de mostrar categorias y agrego los on clicks
			mostrarCategorias();
			agregarOnClicks();
		}
	}
};

//###### boton abrir modal editar operaciones ###########
const botonEditarOperacion = document.getElementById("boton-editar-operacion");
const seccionModalParaEditarOperacion = document.getElementById(
	"modal-editar-operacion"
);
botonEditarOperacion.onclick = () => {
	seccionModalParaEditarOperacion.classList.remove("is-hidden");
	divDatosOperacionJs.classList.add("is-hidden");
};
// botones eliminar operaciones y editar operacioes
let operacionAEditar = "";
const agregarOnClicksBotonesOperaciones = () => {
	const botonesEliminarOperaciones = document.querySelectorAll(
		"#boton-eliminar-operacion"
	);
	const botonesEditarOperaciones = document.querySelectorAll(
		"#boton-editar-operacion"
	);
	for (let i = 0; i < botonesEliminarOperaciones.length; i++) {
		// const prueba = guardarEnLocalStorage.id;
		botonesEliminarOperaciones[i].onclick = (e) => {
			// Leo la informacion que tengo en el LocalStorage
			let informacionEnLocalStorage = leerLocalStorage();
			// Creo un nuevo array filtrando el id de la operacion que se clickeo
			const nuevoArrayOperaciones =
				informacionEnLocalStorage.operaciones.filter(
					(item) => item.id != e.target.dataset.id
				);
			// Cambio el array del local storage por el nuevo array que no tiene el elemento
			informacionEnLocalStorage.operaciones = nuevoArrayOperaciones;
			// Guardo nuevamente el objeto en el LocalStorage
			localStorage.setItem(
				"tp-ahorradas",
				JSON.stringify(informacionEnLocalStorage)
			);
			// Llamo denuevo a la funcion que lee el localStorage y crea los elementos html
			mostrarEnHTML();
			// Llamo a la funcion que les agrega los onclicks a los elementos recien creados
			agregarOnClicksBotonesOperaciones();
		};
	}
	//for que edita operaciones y abre el modal
	for (let i = 0; i < botonesEditarOperaciones.length; i++) {
		botonesEditarOperaciones[i].onclick = (e) => {
			//Escondo el modal de lista
			seccionModalParaEditarOperacion.classList.remove("is-hidden");
			//Agrego el modal de editar
			divDatosOperacionJs.classList.add("is-hidden");
			//Guardo el id donde se clickeo
			operacionAEditar = e.target.dataset.id;
			//Leo la información que tengo en el local storage
			let infoLeidaDeLocalStorage = leerLocalStorage();
			//Creo un nuevo array filtrando que el id sea igual al que se clickeo para editar
			const nuevoArrayOperaciones =
				infoLeidaDeLocalStorage.operaciones.filter(
					(item) => item.id == e.target.dataset.id
				);
			//Seteo el valor de los input con los datos del elemento que se clickeo
			inputEditarDescripcion.value = nuevoArrayOperaciones[i].descripcion;
			inputEditarMonto.value = nuevoArrayOperaciones[i].monto;
			selectEditarTipo.value = nuevoArrayOperaciones[i].tipo;
			selectEditarCategorias.value = nuevoArrayOperaciones[i].categoria;
			inputEditarFecha.value = nuevoArrayOperaciones[i].fecha;
		};
	}
};
agregarOnClicksBotonesOperaciones();

//cancelar la edición de las operaciones del formulario editar
botonCancelarModalDeEditarOperaciones.onclick = () => {
	seccionModalParaEditarOperacion.classList.add("is-hidden");
	divDatosOperacionJs.classList.remove("is-hidden");
};

//funcionalidad al boton que edita las operaciones en el formulario de editar operacion
botonEditarOperacion.onclick = () => {
	const leoLocalStorage = leerLocalStorage();
	// Recorro el local storage buscando el elemento que tiene de id la categoria a editar
	for (let i = 0; i < leoLocalStorage.operaciones.length; i++) {
		// Guardo el elemento actual
		const elemento = leoLocalStorage.operaciones[i];
		// Si tiene el mismo id que la categoria a editar
		if (elemento.id == operacionAEditar) {
			// Cambio el nombre por lo que esta en el input

			///????????
			elemento.descripcion = inputEditarDescripcion.value;
			elemento.monto = inputEditarMonto.value;
			elemento.tipo = selectEditarTipo.value;
			elemento.categoria = selectEditarCategorias.value;
			elemento.fecha = inputEditarFecha.value;
			// Lo guardo en el local storage
			localStorage.setItem(
				"tp-ahorradas",
				JSON.stringify(leoLocalStorage)
			);
			// Recargo el modal de mostrar categorias y agrego los on clicks
			mostrarEnHTML();
			agregarOnClicksBotonesOperaciones();
		}
	}
};

// balance
const balance = () => {
	// buscar del localStorage
	let balanceDatos = leerLocalStorage();
	let balanceArray = balanceDatos.operaciones;

	const filtroGastos = balanceArray.filter((elemento) => {
		return elemento.tipo === "gastos";
	});

	const sumaGastos = filtroGastos.reduce((acc, elemento, i) => {
		return acc + elemento.monto;
	}, 0);

	const filtroGanancia = balanceArray.filter((elemento) => {
		return elemento.tipo === "ganancia";
	});

	const sumaGanancia = filtroGanancia.reduce((acc, elemento, i) => {
		return acc + elemento.monto;
	}, 0);

	// funcion auxiliar balance total

	let totalBalance = funcionSumar(sumaGanancia, sumaGastos);

	divMostrarBalance.innerHTML = `
	<h2 class=" title is-3 is-size-3 m-2 mb-6 has-text-weight-bold">Balance</h2>
                 <div class="columns is-mobile is-vcentered">   
                     <div class="column is-size-5">Ganancia</div>
                     <div class="column has-text-right has-text-success">+$${sumaGanancia}</div>
                 </div>

                <div class="columns is-mobile is-vcentered">
                    <div class="column is-size-5">Gastos</div>
                    <div  class="column has-text-right has-text-danger">-$${sumaGastos}</div>
                </div>

                <div class="columns is-mobile is-vcentered">
                    <div class="column is-size-4">Total</div>
                    <div  class="column has-text-right has-text-weight-semibold"> $${totalBalance}</div>

                </div> 
	`;
};
balance();
