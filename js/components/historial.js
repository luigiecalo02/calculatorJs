const historial = [];

export function agregarHistorial(ulHistorial, resultado) {
    let id = 0;
    if (historial.length <= 0) {
        historial.push({ id: id,result:resultado}); // Almacena el resultado
    } else {
        
        const ultimo = historial.reduce((max, item) => {
            return (item.id > max.id) ? item : max;
            }, historial[0]); 
            historial.push({ id: ultimo.id+1,result:resultado}); // Almacena el resultado
    }
    crearLi(ulHistorial,id,resultado);
}

// Eliminar elemento del historial
export function eliminar(ulHistorial, event) {
    const li = event.target.parentElement;
    if (confirm('¿Desea eliminar esta operación del historial?')) {
        
        let id= li.id;
        // Buscar el índice 
        const indice = historial.findIndex(item => item.id == id);

        if (indice !== -1) {
            historial.splice(indice, 1); // Eliminar el elemento en el índice encontrado
        }
        ulHistorial.removeChild(li);
    }
}

// Eliminar elemento del historial
export function buscardato(ul, input) {
    console.log(historial);
    const value = input.value; // Obtener la tecla presionada
    pintarHistorial(ul, historial.filter(resultados => resultados.result.includes(value)));
}

function pintarHistorial(ul, listaHistorial) {
    // Usando forEach para iterar
    console.log(listaHistorial);
    ul.innerHTML = ''; // limpiamos las listas actuales
    listaHistorial.forEach((operacion, index) => {
        crearLi(ul,operacion.id,operacion.result);
    });
}

function crearLi(ul, id, resultado) {
    const li = document.createElement('li');
    li.id =  id;
    li.textContent = `${resultado} `;
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = '[Eliminar]';
    a.className = 'btn-eliminar';
    a.addEventListener('click', (event) => eliminar(ul, event)); // Agrega el evento para eliminar
    li.appendChild(a);
    ul.appendChild(li);
}
