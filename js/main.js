// Importación de funciones necesarias
import { registrarOperacion  } from './components/calculadora.js';
import { validarInputKey }     from './utils/formulario.js';
import { buscardato }     from './components/historial.js';

// // Variables globales
const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const operacion = document.querySelector('#operacion');

const botonCalcular = document.querySelector('#calcular');

const buscarInput = document.querySelector('#buscar');
let historialUl = document.querySelector('#lista-historial');

// Crear el objeto `app` para organizar el código
const app = {
 
    // Método para inicializar la aplicación
    init() {
        num1Input.addEventListener('keydown', (event)=>{validarInputKey(event)}); 
        num2Input.addEventListener('keydown', (event)=>{validarInputKey(event)});
        buscarInput.addEventListener('keyup',(event)=>buscardato(historialUl,buscarInput)); 
        botonCalcular.addEventListener('click', ()=>{registrarOperacion(num1Input,num2Input,operacion,historialUl)});
        alert('Bienvenido a la práctica'); // Solo para pruebas o debug
    }
};

app.init();
