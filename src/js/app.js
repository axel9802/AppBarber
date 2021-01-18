
document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    mostrarServicios();
}

async function mostrarServicios(){
    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();
        
        /* Aplicando Destructuring:
        const {servicios} = db   --->   las llaves hacen que jale ese valor despues de db*/
        const servicios = db.servicios;

        //Generar HTML
        servicios.forEach( servicio => {
            console.log(servicio);
            /* Aplicando Destructuring:
            Esto es igual a : servicios.id, servicios.nombre, servicios.precio*/
            const{ id, nombre, precio } = servicio;

        })
    } catch (error) {
        console.log(error);
    }
}