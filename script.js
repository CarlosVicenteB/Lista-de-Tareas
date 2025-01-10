const obtenerFecha = () => {
  const fechaActual = new Date()
  const dia = fechaActual.getDate()
  const mes = fechaActual.toLocaleDateString('es-ES', { month: 'long' })
  const anio = fechaActual.getFullYear()
  return `${dia} de ${mes} del ${anio}`
}

const renderizarFecha = () => {
  const fecha = document.querySelector('.fecha')
  const etiqueta = document.createElement('time')
  etiqueta.textContent = obtenerFecha()
  fecha.appendChild(etiqueta)
}

const renderizarTareas = () => {
  const listaTareas = document.querySelector('.tareas')
  tareas.forEach((tarea) => {
    const elemento = document.createElement('li')
    elemento.textContent = tarea.contenido
    listaTareas.appendChild(elemento)
  })
}

const tareas = [
  { contenido: 'Comer cada dia sano y saludable', fecha: '10-12-2303'},
  { contenido: 'Comer cada dia sano y saludable', fecha: '10-12-2303'},
  { contenido: 'Comer cada dia sano y saludable', fecha: '10-12-2303'}
]


renderizarFecha()
renderizarTareas()
