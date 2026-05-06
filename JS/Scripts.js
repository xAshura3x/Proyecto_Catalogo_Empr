//se trae el arreglo de objetos en este caso imagenes desde otro archivo
import {Galeria_img} from "../JS/Imagenes.js"

//busca en el HTML el elemento que tiene id "contenedor_catalogo" y lo guarda en la constante Galeria
//Se hace para que el js sepa en que lugar debe poner los cuadros de imagenes
const Galeria = document.getElementById('contenedor_catalogo');

//recorre el arreglo de imagenes y se ejecuta para crear una cantidad de contenedores igual a la cantidad de elementos
Galeria_img.forEach(foto =>{

    //crea un div nuevo en la memoria del navegador y le asigna la clase CSS "celda_imagen"
    const celda = document.createElement('div');
    celda.classList.add('celda_imagen')

    //Define que elementos hay dentro del div, se usan `` para incluir variables directamente con el ${}
    celda.innerHTML = `
    <img src="${foto.src}" alt="${foto.Nombre}">
    <p>${foto.Nombre}</p>
    `;

    //Toma la celda que se crea y la mete dentro de contenedor_galeria
    Galeria.appendChild(celda);
});