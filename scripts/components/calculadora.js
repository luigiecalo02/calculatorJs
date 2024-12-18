import { mostrarMensaje } from '../utils/mensajes.js';
// Mostrar el resultado en el DOM
 function mostrarResultado(contenido,resultado) {
    contenido.textContent = `El Resultado es: ${resultado}`;
};

// Registrar operación
export function registrarOperacion(form) {
    
    const num1Input = form.querySelector('#num1');
    const num2Input = form.querySelector('#num2');
    const operacion = form.querySelector('#operacion').value;
    const resultField = form.querySelector('#resultado');
    const selectedRadio = document.querySelector('input[name="opcion"]:checked');
    

    if (validardarFormulario(num1Input,num2Input)) {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const resultado = calcular(num1, num2, operacion);
        mostrarResultado(resultado);
        agregarHistorial(`${num1} ${operacion} ${num2} = ${resultado}`);

        if (selectedRadio.value == 1) {
            document.getElementById('resultado').textContent = msg;
        } else {
            mostrarMensaje(msg);
        }
    }
}

function calcular(num1, num2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error: División entre cero';
            break;
        default:
            result = 'Operación inválida';
    }
    return result;
}