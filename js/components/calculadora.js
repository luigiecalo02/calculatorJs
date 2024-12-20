import { mostrarResultado } from './resultado.js';
import { validardarFormulario } from '../utils/formulario.js';
import { agregarHistorial } from './historial.js';
// Registrar operación
export function registrarOperacion(input1, input2, oper, ulHistorial) {

    const selectedRadio = document.querySelector('input[name="opcion"]:checked');
    let operacion = oper.value;
    if (validardarFormulario(input1, input2)) {
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        const resultado = calcular(num1, num2, operacion);
        mostrarResultado(selectedRadio.value, '#resultado', resultado);
        agregarHistorial(ulHistorial, num1 + ' ' + operacion + ' ' + num2 + ' = ' + resultado);
    }

}

function calcular(num1, num2, operation) {
    let result;
    switch (operation) {
        case '+':
            result = sumar(num1, num2);
            break;
        case '-':
            result = restar(num1, num2);
            break;
        case '*':
            result = multiplicar(num1, num2);
            break;
        case '/':
            result = dividir(num1, num2);
            break;
        default:
            result = 'Operación inválida';
    }
    return result;
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return b !== 0 ? a / b : 'Error: División entre cero';
}

const calculadora = {sumar,restar,multiplicar,dividir};
export default calculadora;