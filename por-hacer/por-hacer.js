const fs = require('fs');

let listadoPorHacer = [];


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}


const cargarDB = () => {

    /*     si el archivo json no tiene nada 
        dara un error porque no es un formato JSON
        tiene q tener como minimo [] 
        !!!!!!!1
        mucho cuidado con esto porque resetea la base de datos
        */
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }



}



const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}


const actualizar = (descripcion, completado = true) => {

    let resp;
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        resp = true;
    } else {
        resp = false;
    }

    return resp;

}


const eliminarTarea = (descripcion) => {

    let resp;
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        resp = true;
    } else {
        resp = false;
    }

    return resp;

}



module.exports = {
    crear,
    getListado,
    actualizar,
    eliminarTarea
}