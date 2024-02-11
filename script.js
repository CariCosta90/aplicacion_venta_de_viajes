//importamos los objetos creados en ciudades.js
import {barcelona, roma, paris, londres} from './ciudades.js';



// obtenemos los elementos del DOM

//traemos los 4 botones creados
let enlaces = document.querySelectorAll('a');
// traemos el elemento titulo 
let tituloElemento = document.getElementById('titulo');
// traemos el elemento subtitulo 
let subtituloElemento = document.getElementById('subtitulo');
// traemos la informacion de parrafo 
let parrafoElemento = document.getElementById('parrafo');
// traemos el precio 
let precioElemento = document.getElementById("precio");


// iteramos por los enlaces
enlaces.forEach(function(enlace){
    // creamos funcion que en click inserte la informacion 
    enlace.addEventListener('click', function(){
        //remover active - para hacer limpieza de los 4 a 
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        })

        //agregar active al que corresponda
        this.classList.add('active');

        //traer informacion del objeto seleccionado 
        let contenido = mostrarInfoCiudad(this.textContent);

        //mostrar contenido en el dom 
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = `El precio del paquete es de: ${contenido.precio}`;
        precioElemento.style.fontWeight = 'bold';

    })

});

// funcion para traer la info de ciudades.js 
function mostrarInfoCiudad (enlace) {
    let ciudadSeleccionada = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Londres' : londres,  
        'Paris' : paris
    }   
    return ciudadSeleccionada[enlace];   
 }


