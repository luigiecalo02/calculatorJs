let botomCalcular = document.getElementById('calcular');
let num1Input     = document.getElementById('num1');
let num2Input     = document.getElementById('num2');
let buscarInput   = document.getElementById('num2');
let lista = document.getElementById('lista-historial');
let historial = [];

function mostrarMensaje(message) {
    alert(message);
    return; // Detener la ejecución
}


function validardarFormulario() {
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


function calcular(num1, num2, operacion) {
    let result;
    switch (operacion) {
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

function agregarHistorial(resultado) {
    historial.push(resultado);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.classList.add('btn-eliminar');
    a.textContent = '[Eliminar]';
    a.addEventListener('click', eliminar);
    li.textContent = resultado;
    li.appendChild(a);
    lista.appendChild(li);
}

function buscarHistorial(valor) {

}

function eliminar(event) {
    const li = event.target.parentElement; // Obtener el li padre
    let confirmacion = confirm("¿Desea continuar con la eliminacion?");
    if (confirmacion) {
        lista.removeChild(li);
    }
}

function registrarOperacion() {
    // Obténemos las referencias de los inputs 
    const operacion = document.getElementById('operacion').value;
    const selectedRadio = document.querySelector('input[name="opcion"]:checked');

    let valido = validardarFormulario();
    if (valido) {
        // Obténemos los valores de los inputs en float
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        let resultado = calcular(num1, num2, operacion);
        let msg = `El Resultado es: ${resultado}`;
        if (selectedRadio.value == 1) {
            document.getElementById('resultado').textContent = msg;
        } else {
            mostrarMensaje(msg);
        }
        agregarHistorial(num1 + ' ' + operacion + ' ' + num2 + ' = ' + resultado);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    botomCalcular.addEventListener('click', function (e) {
        registrarOperacion();
    });
});

alert(`Bienbenido a la práctica`);