let $ = (selector) => document.querySelector(selector);
let $$ = (selector) => document.querySelectorAll(selector);

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
let botonAlineacion = $(".botones-alineacion");
let botonIzquierda = $("#btn-izquierda");
let botonCentro = $("#btn-centro");
let botonDerecha = $("#btn-derecha");
let colorTexto = $("#color-texto");
let colorFondo = $("#color-fondo");
let fondoTransparente = $("#fondo-transparente")
let textosMeme = $$(".meme-generador-texto");
let botonContornoClaro = $("#btn-contorno-claro");
let botonContornoOscuro = $("#btn-contorno-oscuro");
let espaciado = $("#espaciado");
let interlineado = $("#interlineado");

//VARIABLES SECCION IMAGEN
let colorFondoMeme = $("#color-fondo");


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

// ALINEACION DE TEXTO

botonIzquierda.addEventListener("click", function(event){
    parrafoTextoSuperior.style.textAlign = "left";
})

botonCentro.addEventListener("click", function(event){
    parrafoTextoSuperior.style.textAlign = "center";
})

botonDerecha.addEventListener("click", function(event){
    parrafoTextoSuperior.style.textAlign = "right";
})

//CAMBIAR COLOR

colorTexto.addEventListener("input", function(event){
    let colorElegidoTexto = event.target.value;
    parrafoTextoSuperior.style.color = colorElegidoTexto;
    parrafoTextoInferior.style.color = colorElegidoTexto;
})

colorFondo.addEventListener("change", function(event){
    let colorElegidoFondo = event.target.value;
    contenedorTextoSuperior.style.backgroundColor = colorElegidoFondo;
    contenedorTextoInferior.style.backgroundColor= colorElegidoFondo;
})

// FONDO TRANSPARENTE
fondoTransparente.addEventListener("click", function(){
       parrafoTextoSuperior.classList.add("fondo-transparente");
        contenedorTextoSuperior.classList.add("ocultar");
        parrafoTextoSuperior.classList.add("fondo-transparente");
        contenedorTextoInferior.classList.add("ocultar");

})

// CONTORNO 
botonContornoClaro.addEventListener("click", function(){
    parrafoTextoSuperior.classList.toggle("contorno-claro");
    parrafoTextoInferior.classList.toggle("contorno-claro");

})

botonContornoOscuro.addEventListener("click", function(){
    parrafoTextoSuperior.classList.toggle("contorno-oscuro");
    parrafoTextoInferior.classList.toggle("contorno-oscuro");

})

//ESPACIADO
espaciado.addEventListener("input", function(event){
    let espaciadoElegido = event.target.value;
    contenedorTextoSuperior.style.paddingTop = `${espaciadoElegido}px`;
    contenedorTextoSuperior.style.paddingBottom = `${espaciadoElegido}px`;
    contenedorTextoInferior.style.paddingTop = `${espaciadoElegido}px`;
    contenedorTextoInferior.style.paddingBottom= `${espaciadoElegido}px`;
})

//INTERLINEADO

interlineado.addEventListener("click", function(event){
    parrafoTextoSuperior.style.lineHeight = `${event.target.value}px`;
    parrafoTextoInferior.style.lineHeight = `${event.target.value}px`;
})

//SECCION IMAGEN

colorFondoMeme.addEventListener("input", function(event){
    let colorFondoMemeElegido = event.target.value;
    memeImagen.style.backgroundColor = colorFondoMemeElegido;
})

