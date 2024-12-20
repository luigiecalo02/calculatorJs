import  mensajes  from '../utils/mensajes.js';

export function mostrarResultado(opc, idContenido, resultado) {
    let msj = `El Resultado es: ${resultado}`;
    if (opc == 1) {
        mensajes.pintar(idContenido, msj);
    } else {
        mensajes.mostrar(msj);
    }
};