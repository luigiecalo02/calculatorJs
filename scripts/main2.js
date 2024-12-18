// Importación de funciones necesarias
import { registrarOperacion  } from './components/calculadora.js';
import { registrarOperacion  } from './components/historial.js';
import { registrarOperacion  } from './components/resultado.js';
// Variables globales
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const botonCalcular = document.getElementById('calcular');
const listaHistorial = document.getElementById('lista-historial');






// Inicio del script
document.addEventListener('DOMContentLoaded', () => {
    botonCalcular.addEventListener('click', registrarOperacion(document.getElementById('calculadora-formulario')));
});

alert('Bienvenido a la práctica'); // Solo para pruebas o debug