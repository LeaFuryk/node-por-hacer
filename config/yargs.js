/*comando crear 'Crea un elemento por hacer' --descipcion -d

comando actualizar 'Actualiza el estado completo de una tarea' -- descripcion -d
                                                                -- completado -c true
*/
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
  demand: true,
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
                .command('crear','Crea un elemento por hacer',{descripcion})
                .command('actualizar','Actualiza el estado completo de una tarea', {descripcion, completado})
                .command('listar','Lista todas las tareas por hacer y su estado',{})
                .command('borrar','Borra una tarea del listado',{descripcion})
                .help()
                .argv;

module.exports = {
  argv
}
