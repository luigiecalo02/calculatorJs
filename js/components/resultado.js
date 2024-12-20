import  mensajes  from '../utils/mensajes.js';

/**
 * Muestra el resultado de una operación en el DOM o como un mensaje emergente.
 */
export function mostrarResultado(opc, idContenido, resultado) {
    let msj = `El Resultado es: ${resultado}`;
    if (opc == 1) {
        mensajes.pintar(idContenido, msj);
    } else {
        mensajes.mostrar(msj);
    }
};