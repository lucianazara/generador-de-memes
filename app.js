let $ = (selector) => document.querySelector(selector);
let $$ = (selector) => document.querySelector(selector);

let enlaceImagen = $("#imagen-nav");
let panelImagen = $(".seccion-imagen");
let enlaceTexto = $("#texto-nav");
let panelTexto = $(".seccion-texto");
let botonModoOscuro =$("#modo-oscuro");
let body = $("body");
let botonCerrar = $(".boton-cerrar");
let botonCerrarTexto = $("#boton-cerrar-texto");
let botonCerrarImagen = $("#boton-cerrar-imagen");
let menu = $(".menu");

enlaceImagen.addEventListener("click", function() {
    panelImagen.classList.add("desplegar");
    panelTexto.classList.remove("desplegar");
})

enlaceTexto.addEventListener("click", function() {
    panelTexto.classList.add("desplegar");
    panelImagen.classList.remove("desplegar");
})

window.addEventListener("load", function() {
    document.body.classList.add("modo-oscuro");
})

botonModoOscuro.addEventListener("click", function(){
    document.body.classList.add("modo-claro");
    if(botonModoOscuro.innerHTML == "Modo oscuro"){
        document.body.classList.add("modo-claro");
        botonModoOscuro.innerHTML = "Modo claro";
    } else {
        document.body.classList.remove("modo-claro");
        botonModoOscuro.innerHTML = "Modo oscuro";
    }
})


// panelImagen.addEventListener("onload", function(){
//     panelImagen.classList.add("ocultar");
// })
panelImagen.addEventListener("click", function(){
    panelImagen.classList.add("desplegar");
    panelImagen.classList.remove("desplegar");
    })

botonCerrarImagen.addEventListener("click", function(){
    panelImagen.classList.remove("desplegar");
})


panelTexto.addEventListener("click", function(){
    panelTexto.classList.add("desplegar");
    panelTexto.classList.remove("desplegar");
    })

botonCerrarTexto.addEventListener("click", function(){
    panelTexto.classList.remove("desplegar");
})
