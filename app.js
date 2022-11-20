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
let imagenURL = $("#url");
let memeImagen = $(".meme-imagen");
let textoSuperior = $("#meme-texto-superior");
let textoInferior = $("#meme-texto-inferior");
let parrafoTextoSuperior = $("#parrafo-texto-superior");
let parrafoTextoInferior = $("#parrafo-texto-inferior");
let inputTextoSuperior = $("#texto-superior");
let inputTextoInferior = $("#texto-inferior");
let sinTextoSuperior = $("#sin-texto-superior");
let sinTextoInferior = $("#sin-texto-inferior");
let contenedorTextoSuperior = $("#contenedor-texto-superior");
let contenedorTextoInferior = $("#contenedor-texto-inferior");
let tipografia = $("#tipografia");
let tamanoFuente = $("#tamano-fuente");



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


panelImagen.addEventListener("click", function(){
    panelImagen.classList.add("desplegar");
    // panelImagen.classList.remove("desplegar");

    })


panelTexto.addEventListener("click", function(){
    panelTexto.classList.add("desplegar");
    })

// AGREGAR IMAGEN

imagenURL.addEventListener("input", function(event){
  let url = event.target.value;
  memeImagen.style.backgroundImage = `url(${url})`;
})

// MODIFICAR TEXTOS
inputTextoSuperior.addEventListener("input", function(event){
    parrafoTextoSuperior.innerText = event.target.value;
})

inputTextoInferior.addEventListener("input", function(event){
    parrafoTextoInferior.innerText = event.target.value;
})

// OCULTAR TEXTOS
sinTextoSuperior.addEventListener("click", function(){
    contenedorTextoSuperior.classList.toggle("ocultar");
})

sinTextoInferior.addEventListener("click", function(){
    contenedorTextoInferior.classList.toggle("ocultar");
})

// CAMBIAR TIPOGRAFIA

tipografia.addEventListener("change", function(event){
    let tipografiaElegida = event.target.value;
    parrafoTextoSuperior.style.fontFamily = tipografiaElegida;
    parrafoTextoInferior.style.fontFamily = tipografiaElegida;
})

tipografia.addEventListener("change", function(event){
    let tipografiaElegida = event.target.value;
    parrafoTextoSuperior.style.fontFamily = tipografiaElegida;
    parrafoTextoInferior.style.fontFamily = tipografiaElegida;
})

tamanoFuente.addEventListener("input", function(event){
    let tamanoFuenteElegido = event.target.value;
    parrafoTextoSuperior.style.fontSize = `${tamanoFuenteElegido}px`;
    parrafoTextoInferior.style.fontSize = `${tamanoFuenteElegido}px`;
})

