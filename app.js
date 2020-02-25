const argv = require('./config/yargs').argv;
const colors = require('colors');
const { getListado, crear, actualizar, eliminarTarea } = require('./por-hacer/por-hacer');




/* console.log(argv); */
let comando = argv._[0];


switch (comando) {

    case 'crear':

        let tarea = crear(argv.descripcion);
        console.log(`Tarea creada:`.grey, tarea);
        break;

    case 'listar':
        let listado = getListado();
        console.log('');
        listado.forEach(element => {
            console.log('=========TAREA========'.green);
            console.log(element.descripcion);
            console.log('Completado = ', element.completado);
            console.log('======================'.green);

        });
        console.log('');

        console.log('Tareas listadas'.grey);
        break;

    case 'actualizar':
        let act = actualizar(argv.descripcion, argv.completado);

        if (act) {
            console.log('Tarea actualizada');
        } else {
            console.log('Tarea no encontrada');
        }

        break;
    case 'borrar':
        let del = eliminarTarea(argv.descripcion);

        if (del) {
            console.log('Tarea eliminada');
        } else {
            console.log('Tarea no encontrada');
        }
        break;

    default:
        console.log('Comando no reconocido'.red);
        break;


}