
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
            /* Aplicando Destructuring:
            Esto es igual a : servicios.id, servicios.nombre, servicios.precio*/
            const{ id, nombre, precio } = servicio;


            //DOM Scripting
            //Generar nombre de servicio
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add('nombre-servicio');


            //Generar el precio de servicio
            const precioServicio = document.createElement('P');
            precioServicio.textContent = `$ ${precio}`;
            precioServicio.classList.add('precio-servicio');

            //Generar div contenedor de Servicio
            const servicioDiv = document.createElement('DIV');
            servicioDiv.classList.add('servicio');
            //Para coger el id
            servicioDiv.dataset.idServicio = id;

            //Selecciona un servicio para la cita
            servicioDiv.onclick = seleccionarServicio;

            //Inyectar nombre y precio al div de servicio
            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);

            //Inyectarlo en el HTML
            document.querySelector('#servicios').appendChild(servicioDiv);

            
        })
    } catch (error) {
        console.log(error);
    }
}

function seleccionarServicio(e){

    let elemento;
    //Forzar que el elemento al cual le damos click sea el div
    if(e.target.tagName === 'P'){
        elemento = e.target.parentElement;
    } else {
        elemento = e.target;
    }

    if(elemento.classList.contains('seleccionado')){
        elemento.classList.remove('seleccionado');
    } else {
        elemento.classList.add('seleccionado');
    }
    console.log(elemento)
}