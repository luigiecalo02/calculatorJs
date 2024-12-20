import { mostrar } from './mensajes.js';

export function validardarFormulario(num1Input, num2Input) {
    let valido = true;
    valido = validarInput(num1Input);
    if (valido) {
        valido = validarInput(num2Input);
    }
    return valido;
}

// Función para ganarel foco
function validarInput(input) {
    let errorMessage = '';
    // Validar que los números no estén vacíos ni sean NaN
    if (validarVacio(input.value)) {
        errorMessage = 'Ingrese un valor correcto para ' + input.title;
        input.focus(); // Coloca el foco en el campo con error
    };

    if (errorMessage) {
        mostrar(errorMessage);
        return false; // Retorna true si hay un error
    }

    return true; // Retorna false si no hay error
}

// Función para validar si un dato esta vacio
export function validarVacio(valor) {
    if (valor.trim() === '' || isNaN(valor)) {
        return true;
    };
    return false; // Retorna false si no hay error
}

// Función para manejar el evento de teclado
export function validarInputKey(event) {
    const key = event.key; // Obtener la tecla presionada
    if (key === '.' || key === 'e' || key === 'E') {
        event.preventDefault();
    }
}