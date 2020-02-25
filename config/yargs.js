const argv = require('yargs')
    .command(
        'crear', 'Crea un tarea en la lista', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            }
        }
    )
    .command(
        'actualizar', 'Actualizacion de la lista de tareas', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            },
            completado: {
                default: true,
                alias: 'c'

            }
        }
    )
    .command(
        'borrar', 'Elimina la tarea de la lista', {
            descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea que sera eliminada'
            }
        }
    )
    .argv;


module.exports = {
    argv
}