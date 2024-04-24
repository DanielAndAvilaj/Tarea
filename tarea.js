function validarRut(rut) {
    var regex = /^[0-9]{7,8}-[0-9Kk]$/;
    return regex.test(rut);
}

function validarNombre(nombre) {
    return nombre.length >= 3 && nombre.length <= 20;
}

function validarApellido(apellido) {
    return apellido.length >= 3 && apellido.length <= 20;
}

function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarCelular(celular) {
    var regex = /^[0-9\s]+$/;
    return celular.length >= 9 && celular.length <= 12 && regex.test(celular);
}

function validarEdad(edad) {
    return edad >= 18 && edad <= 35;
}

function mostrarError(elemento, mensaje) {
    var errorSpan = elemento.nextElementSibling;
    if (!errorSpan || !errorSpan.classList.contains('error')) {
        errorSpan = document.createElement('span');
        errorSpan.classList.add('error');
        elemento.parentNode.insertBefore(errorSpan, elemento.nextSibling);
    }
    errorSpan.textContent = mensaje;
    errorSpan.style.color = 'red';
}

function eliminarError(elemento) {
    var errorSpan = elemento.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error')) {
        errorSpan.parentNode.removeChild(errorSpan);
    }
}

function validarFormulario() {
    var rut = document.getElementById('rut');
    var nombre = document.getElementById('nombre');
    var apellidoPaterno = document.getElementById('ap_paterno');
    var apellidoMaterno = document.getElementById('ap_materno');
    var email = document.getElementById('email');
    var celular = document.getElementById('celular');
    var edad = document.getElementById('edad');

    var isValid = true;

    // Validación del Rut
    if (!validarRut(rut.value)) {
        mostrarError(rut, 'Rut inválido');
        isValid = false;
    } else {
        eliminarError(rut);
    }


    if (!validarNombre(nombre.value)) {
        mostrarError(nombre, 'Nombre inválido, largo entre 3 y 20 caracteres');
        isValid = false;
    } else {
        eliminarError(nombre);
    }

    if (!validarApellido(apellidoPaterno.value)) {
        mostrarError(apellidoPaterno, 'Apellido paterno inválido, largo entre 3 y 20 caracteres');
        isValid = false;
    } else {
        eliminarError(apellidoPaterno);
    }


    if (!validarApellido(apellidoMaterno.value)) {
        mostrarError(apellidoMaterno, 'Apellido materno inválido, largo entre 3 y 20 caracteres');
        isValid = false;
    } else {
        eliminarError(apellidoMaterno);
    }


    if (!validarEmail(email.value)) {
        mostrarError(email, 'Correo electrónico inválido');
        isValid = false;
    } else {
        eliminarError(email);
    }


    if (!validarCelular(celular.value)) {
        mostrarError(celular, 'Número de celular inválido');
        isValid = false;
    } else {
        eliminarError(celular);
    }


    if (!validarEdad(parseInt(edad.value))) {
        mostrarError(edad, 'Edad fuera del rango permitido (18-35 años)');
        isValid = false;
    } else {
        eliminarError(edad);
    }


    if (!isValid) {
        return false;
    }

    return true;
}

function crearCarta() {
    var rut = document.getElementById('rut').value;
    var nombre = document.getElementById('nombre').value;
    var apPaterno = document.getElementById('ap_paterno').value;
    var apMaterno = document.getElementById('ap_materno').value;
    var fecNac = document.getElementById('fec_nac').value;
    var edad = document.getElementById('edad').value;
    var genero = document.getElementById('genero').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var profesion = document.getElementById('profesion').value;
    var motivacion = document.getElementById('carta').value;

    var carta = "Estimado/a,\n\n" +
                "Me dirijo a usted con el propósito de postular al puesto de " + profesion + ".\n" +
                "Mis datos personales son los siguientes:\n\n" +
                "Nombre: " + nombre + "\n" +
                "Apellidos: " + apPaterno + " " + apMaterno + "\n" +
                "RUT: " + rut + "\n" +
                "Fecha de Nacimiento: " + fecNac + "\n" +
                "Edad: " + edad + "\n" +
                "Género: " + genero + "\n" +
                "Email: " + email + "\n" +
                "Celular: " + celular + "\n\n" +
                "Motivación para postular:\n" + motivacion;

    document.getElementById('carta').value = carta;
}

document.getElementById('crearCartaBtn').addEventListener('click', crearCarta);