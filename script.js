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
  const listaTareas = document.querySelector('.tareas')
  tareas.forEach((tarea) => {
    const elemento = document.createElement('li')
    elemento.textContent = tarea.contenido
    listaTareas.appendChild(elemento)
  })
}

// Se maneja el input del formulario
const manejarFormulario = () => {
  const boton = document.querySelector('.subir')
  boton.addEventListener('click', (event) => {
    event.preventDefault()

    const input = document.querySelector('.nueva-tarea')
    const valor = input.value

    tareas.push({ contenido: valor })

    const listaTareas = document.querySelector('.tareas')
    listaTareas.innerHTML = ''
    input.value = ''
    renderizarTareas()
  })
}

const tareas = []

renderizarFecha()
renderizarTareas()
manejarFormulario()
