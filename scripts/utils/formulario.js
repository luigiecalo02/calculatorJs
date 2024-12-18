import { mostrarMensaje } from './mensajes.js';

export function validardarFormulario(num1Input,num2Input) {
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
    if (input.value.trim() === '' || isNaN(input.value)) {
        errorMessage = 'Ingrese un valor correcto para ' + input.title;
        input.focus(); // Coloca el foco en el campo con error
    };

    if (errorMessage) {
        mostrarMensaje(errorMessage);
        return false; // Retorna true si hay un error
    }

    return true; // Retorna false si no hay error
}
