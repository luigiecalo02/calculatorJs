// muestra un mensaje en una alerta
export function mostrar(message) {
    alert(message);
    return; // Detener la ejecución
}
// pinta un mensaje en un componente indicado con el #id
function pintar(idContenido,mensaje) {
    const contenido = document.querySelector(idContenido);
    contenido.textContent = mensaje;
};

const mensajes = {mostrar,pintar};
export default mensajes;