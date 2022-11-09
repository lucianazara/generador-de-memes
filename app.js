let $ = (selector) => document.querySelector(selector);
let $$ = (selector) => document.querySelector(selector);

let enlaceImagen = $("#imagen-nav");
let panelImagen = $(".seccion-imagen");
let enlaceTexto = $("#texto-nav");
let panelTexto = $(".seccion-texto");

enlaceImagen.addEventListener("click", function() {
    panelImagen.classList.add("desplegar");
    panelTexto.classList.remove("desplegar");
})

enlaceTexto.addEventListener("click", function() {
    panelTexto.classList.add("desplegar");
    panelImagen.classList.remove("desplegar");
})