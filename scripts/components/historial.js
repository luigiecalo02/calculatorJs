// Agregar al historial
const historial =[];

export function agregarHistorial(resultado) {
    historial.push(resultado); // Almacena el resultado
    const li = document.createElement('li');
    li.textContent = `${resultado} `;
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = '[Eliminar]';
    a.className = 'btn-eliminar';
    a.addEventListener('click', eliminar); // Agrega el evento para eliminar
    li.appendChild(a);
    listaHistorial.appendChild(li);
}

// Eliminar elemento del historial
export function eliminar(event) {
    const li = event.target.parentElement;
    if (confirm('¿Desea eliminar esta operación del historial?')) {
        listaHistorial.removeChild(li);
    }
}
