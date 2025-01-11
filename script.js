// Se obtiene la fecha en un formato DD de MM del AAAA
const obtenerFecha = () => {
  const fechaActual = new Date()
  const dia = fechaActual.getDate()
  const mes = fechaActual.toLocaleDateString('es-ES', { month: 'long' })
  const anio = fechaActual.getFullYear()
  // Se extrae del objeto Date la fecha
  return `${dia} de ${mes} del ${anio}`
}

// Se muestra la fecha actual
const renderizarFecha = () => {
  const fecha = document.querySelector('.fecha')
  const etiqueta = document.createElement('time')
  etiqueta.textContent = obtenerFecha()
  fecha.appendChild(etiqueta)
}

// Se renderiza las tareas guardadas
const renderizarTareas = () => {
  const mensaje = document.querySelector('.mensaje')
  if ( tareas.length === 0){
    mensaje.classList.remove('activado')
    return
  }
  mensaje.classList.add('activado')

  const listaTareas = document.querySelector('.tareas')
  listaTareas.innerHTML = ''

  // Mostramos todas las tareas
  tareas.forEach((tarea, id) => {
    const elemento = document.createElement('li')
    elemento.classList.toggle('tarea')

    const contenedor = document.createElement('div')
    contenedor.classList.add('contenedor-tarea')

    const texto = document.createElement('p')
    texto.textContent = tarea.contenido
    texto.classList.add('texto-tarea')

    const quitar = document.createElement('button')
    quitar.classList.add('delete-tarea')
    quitar.textContent = '+'
    quitar.addEventListener('click', () => {
      eliminartarea(id)
    })

    elemento.appendChild(contenedor)
    contenedor.appendChild(texto)
    contenedor.appendChild(quitar)
    listaTareas.appendChild(elemento)
  })
}

// Eliminar una tarea
const eliminartarea = (id) => {
  tareas.splice(id, 1)
  localStorage.setItem('listaTareas', JSON.stringify(tareas))
  renderizarTareas()
}

// Se maneja el input del formulario
const manejarFormulario = () => {
  // Escuchamos cuando se envia una nueva tarea
  const boton = document.querySelector('.subir')
  boton.addEventListener('click', (event) => {
    event.preventDefault()

    // Extraemos el valor del input y guardamos
    const input = document.querySelector('.nueva-tarea')
    const valor = input.value.trim()

    if (valor) {
      // Guardamos la tarea
      tareas.push({ contenido: valor })
  
      // Almacenamos en el localStorage y renderizamos la lista
      localStorage.setItem('listaTareas', JSON.stringify(tareas))
      renderizarTareas()
      input.value = ''
    }
  })
}

const tareas = JSON.parse(localStorage.getItem('listaTareas')) ?? []

renderizarFecha()
renderizarTareas()
manejarFormulario()
