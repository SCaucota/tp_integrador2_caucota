const divNombreInput = document.getElementById("divNombre")
const divApellidoInput = document.getElementById("divApellido");
const divCorreoInput = document.getElementById("divCorreo");
const divCantidadInput = document.getElementById("divCantidad");

const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const correoInput = document.getElementById("correo");
const cantidadInput = document.getElementById("cantidad");
const categoriaSelect = document.getElementById("categorias");

const form = document.getElementById("form");
const totalSpan = document.getElementById("total");

const nombreApellidoExpresion = /^[A-Za-z\s'-]+$/;
const correoExpresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const cantidadExpresion = /^(0|[1-9]\d*)(\.\d+)?$/;


const nombreError = document.createElement("p");
const apellidoError = document.createElement("p");
const correoError = document.createElement("p");
const cantidadError = document.createElement("p");



function verificacion() {

    let isValid = true;

    if (!nombreApellidoExpresion.test(nombreInput.value)) {
        isValid = false;
        nombreError.textContent = 'Nombre inválido';
        nombreError.style.color = "red";
        divNombreInput.appendChild(nombreError);
    } else {
        nombreError.remove();
    }

    if (!nombreApellidoExpresion.test(apellidoInput.value)) {
        isValid = false;
        apellidoError.textContent = 'Apellido inválido';
        apellidoError.style.color = "red";
        divApellidoInput.appendChild(apellidoError);
    } else {
        apellidoError.remove();
    }

    if (!correoExpresion.test(correoInput.value)) {
        isValid = false;
        correoError.textContent = 'Correo inválido';
        correoError.style.color = "red";
        divCorreoInput.appendChild(correoError);
    } else {
        correoError.remove();
    }

    if (!cantidadExpresion.test(cantidadInput.value)) {
        isValid = false;
        cantidadError.textContent = 'Cantidad inválida';
        cantidadError.style.color = "red";
        divCantidadInput.appendChild(cantidadError);
    } else {
        cantidadError.remove();
    }

    return isValid;
}


function resumen() {

    const isValid = verificacion()

    if (nombreInput.value.trim() !== "" &&
        apellidoInput.value.trim() !== "" &&
        correoInput.value.trim() !== "" &&
        cantidadInput.value.trim() !== "" &&
        categoriaSelect.value.trim() !== "" &&
        isValid
        ) {

        const cantidad = parseInt(cantidadInput.value);
        const categoria = categoriaSelect.value;

        let descuento = 0;
        if (categoria === "1") {
            descuento = 80;
        } else if (categoria === "2") {
            descuento = 50;
        } else if (categoria === "3") {
            descuento = 15;
        }

        const valorTicket = 200;
        const totalPagar = ((descuento * valorTicket) / 100) * cantidad;

        totalSpan.textContent = "$" + totalPagar;

    }
}


function borrar() {
    nombreInput.value = "";
    apellidoInput.value = "";
    correoInput.value = "";
    cantidadInput.value = "";
    totalSpan.textContent = "";
}

document.getElementById("resumen").addEventListener("click", resumen);

document.getElementById("borrar").addEventListener("click", borrar);