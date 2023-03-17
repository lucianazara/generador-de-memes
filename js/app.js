const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

let enlaceImagen = $("#imagen-nav");
let panelImagen = $(".seccion-imagen");
let botonAbrirImagen = $("#btn-abrir-imagen")
let botonAbrirTexto= $("#btn-abrir-texto")
let seccionImagen = $("#seccion-panel-imagen");
let enlaceTexto = $("#texto-nav");
let panelTexto = $(".seccion-texto");
let seccionTexto = $("#seccion-panel-texto");
let botonModoOscuro =$("#modo-oscuro");
let body = $("body");
let botonCerrar = $(".boton-cerrar");
let botonCerrarTexto = $("#boton-cerrar-texto");
let botonCerrarImagen = $("#boton-cerrar-imagen");
let menu = $(".menu");
let imagenURL = $("#url");
let memeContenedor = $("#meme-contenedor");
let memeGenerador = $("#meme-generador")
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
let colorFondoMeme = $("#color-fondo-meme");
let efectoEstablecido = $("#efecto-preestablecido");
let contenedorMeme = $(".contenedor-meme-imagen");
let brillo = $("#brightness");
let opacidad = $("#opacity");
let contraste = $("#contrast");
let desenfoque = $("#blur");
let escalaGrises = $("#grayscale");
let sepia = $("#sepia");
let hue = $("#hue");
let saturacion = $("#saturate");
let negativo = $("#invert");
let botonReestablecer = $("#boton-reestablecer");
let botonDescargar = $("#boton-descargar");

botonAbrirImagen.addEventListener("click", () => {
    if(seccionImagen.classList.contains("oculto") || seccionTexto.style.display === "block" ){
        seccionTexto.style.display = "none"
        seccionImagen.style.display = "block"
    } else {
        seccionImagen.style.display = "none"
    }      
})

botonAbrirTexto.addEventListener("click", () => {
    if(seccionTexto.classList.contains("oculto")  || seccionImagen.style.display === "block"){
        seccionImagen.style.display = "none"
        seccionTexto.style.display = "block"
    } else {
        seccionTexto.style.display = "none"
    } 
})

window.addEventListener("load", () => {
    document.body.classList.add("modo-oscuro");
})

botonModoOscuro.addEventListener("click", () => {
    document.body.classList.add("modo-claro");
    if(botonModoOscuro.innerHTML == "Modo oscuro"){
        document.body.classList.add("modo-claro");
        botonModoOscuro.innerHTML = "Modo claro";
    } else {
        document.body.classList.remove("modo-claro");
        botonModoOscuro.innerHTML = "Modo oscuro";
    }
})


//BOTONES CERRAR
botonCerrarImagen.addEventListener("click", () => {
    seccionImagen.style.display = "none"
})

botonCerrarTexto.addEventListener("click", () =>{
    seccionTexto.style.display = "none"
})

// AGREGAR IMAGEN

imagenURL.addEventListener("input", event => {
  let url = event.target.value;
  memeImagen.style.backgroundImage = `url(${url})`;
})

// MODIFICAR TEXTOS
inputTextoSuperior.addEventListener("input", event => {
    parrafoTextoSuperior.innerText = event.target.value;
})

inputTextoInferior.addEventListener("input", event => {
    parrafoTextoInferior.innerText = event.target.value;
})

// OCULTAR TEXTOS
sinTextoSuperior.addEventListener("click", () => {
    contenedorTextoSuperior.classList.toggle("oculto");
})

sinTextoInferior.addEventListener("click", () => {
    contenedorTextoInferior.classList.toggle("oculto");
})

// CAMBIAR TIPOGRAFIA

tipografia.addEventListener("change", event => {
    let tipografiaElegida = event.target.value;
    parrafoTextoSuperior.style.fontFamily = tipografiaElegida;
    parrafoTextoInferior.style.fontFamily = tipografiaElegida;
})

tipografia.addEventListener("change", event =>{
    let tipografiaElegida = event.target.value;
    parrafoTextoSuperior.style.fontFamily = tipografiaElegida;
    parrafoTextoInferior.style.fontFamily = tipografiaElegida;
})

tamanoFuente.addEventListener("input", event =>{
    let tamanoFuenteElegido = event.target.value;
    parrafoTextoSuperior.style.fontSize = `${tamanoFuenteElegido}px`;
    parrafoTextoInferior.style.fontSize = `${tamanoFuenteElegido}px`;
})

// ALINEACION DE TEXTO

botonIzquierda.addEventListener("click", () =>{
    parrafoTextoSuperior.style.textAlign = "left";
})

botonCentro.addEventListener("click", () =>{
    parrafoTextoSuperior.style.textAlign = "center";
})

botonDerecha.addEventListener("click", () =>{
    parrafoTextoSuperior.style.textAlign = "right";
})

//CAMBIAR COLOR

colorTexto.addEventListener("input", event =>{
    let colorElegidoTexto = event.target.value;
    parrafoTextoSuperior.style.color = colorElegidoTexto;
    parrafoTextoInferior.style.color = colorElegidoTexto;
})

colorFondo.addEventListener("change", event =>{
    let colorElegidoFondo = event.target.value;
    contenedorTextoSuperior.style.backgroundColor = colorElegidoFondo;
    contenedorTextoInferior.style.backgroundColor= colorElegidoFondo;
})

// FONDO TRANSPARENTE
fondoTransparente.addEventListener("click", () => {
       parrafoTextoSuperior.classList.add("fondo-transparente");
        contenedorTextoSuperior.classList.add("ocultar");
        parrafoTextoSuperior.classList.add("fondo-transparente");
        contenedorTextoInferior.classList.add("ocultar");

})

// CONTORNO 
botonContornoClaro.addEventListener("click", () => {
    parrafoTextoSuperior.classList.toggle("contorno-claro");
    parrafoTextoInferior.classList.toggle("contorno-claro");

})

botonContornoOscuro.addEventListener("click", () => {
    parrafoTextoSuperior.classList.toggle("contorno-oscuro");
    parrafoTextoInferior.classList.toggle("contorno-oscuro")

})

//ESPACIADO
espaciado.addEventListener("input", event => {
    let espaciadoElegido = event.target.value
    contenedorTextoSuperior.style.paddingTop = `${espaciadoElegido}px`
    contenedorTextoSuperior.style.paddingBottom = `${espaciadoElegido}px`
    contenedorTextoInferior.style.paddingTop = `${espaciadoElegido}px`
    contenedorTextoInferior.style.paddingBottom= `${espaciadoElegido}px`
})

//INTERLINEADO

interlineado.addEventListener("click", event => {
    parrafoTextoSuperior.style.lineHeight = `${event.target.value}px`
    parrafoTextoInferior.style.lineHeight = `${event.target.value}px`
})

//SECCION IMAGEN

colorFondoMeme.addEventListener("input", event => {
    let colorFondoMemeElegido = event.target.value
    memeImagen.style.backgroundColor = colorFondoMemeElegido
})


//EFECTO DE FONDO

efectoEstablecido.addEventListener("change", event => {
 let efecto = event.target.value
    if(efecto == "Ninguno"){
        contenedorMeme.style.backgroundBlendMode = "normal"
    }else if(efecto == "Aclarar"){
        memeImagen.style.backgroundBlendMode = "lighten"
    }else if(efecto == "Oscurecer"){
        memeImagen.style.backgroundBlendMode = "darken"
    }else if(efecto == "Luminosidad"){
        memeImagen.style.backgroundBlendMode = "luminosity"
    }else if(efecto == "Diferencia"){
       memeImagen.style.backgroundBlendMode = "difference"
    }else if(efecto == "Multiplicar"){
        memeImagen.style.backgroundBlendMode = "multiply"
    }
})


//FILTROS
brillo.addEventListener("change", event => {
    let brilloElegido = event.target.value
    memeImagen.style.filter = `brightness(${brilloElegido}`
})

opacidad.addEventListener("change", event => {
    let opacidadElegida = event.target.value
    memeImagen.style.filter = `opacity(${opacidadElegida}`
})

contraste.addEventListener("change", event => {
    let contrasteElegido = event.target.value
    memeImagen.style.filter = `contrast(${contrasteElegido}`
})

desenfoque.addEventListener("change", event => {
    let desenfoqueElegido = event.target.value
    memeImagen.style.filter = `blur(${desenfoqueElegido}px`
})

escalaGrises.addEventListener("change", event => {
    let escalaGrisesElegida = event.target.value
    memeImagen.style.filter = `grayscale(${escalaGrisesElegida}`
})

sepia.addEventListener("change", event => {
    let sepiaElegido = event.target.value
    memeImagen.style.filter = `sepia(${sepiaElegido}`
})
hue.addEventListener("change", event => {
    let hueElegido = event.target.value
    memeImagen.style.filter = `hue-rotate(${hueElegido}deg`
})

saturacion.addEventListener("change", event => {
    let saturacionElegida = event.target.value
    memeImagen.style.filter = `saturate(${saturacionElegida}`
})

negativo.addEventListener("change", event => {
    let negativoElegido = event.target.value
    memeImagen.style.filter = `invert(${negativoElegido}`
})

//REESTABLECER FILTROS

botonReestablecer.addEventListener("click", () =>{
    memeImagen.style.filter = `brightness(1)`
    memeImagen.style.filter = `opacity(100)`
    memeImagen.style.filter = `contrast(100)`
    memeImagen.style.filter = `blur(0)px`
    memeImagen.style.filter = `grayscale(0)`
    memeImagen.style.filter = `sepia(0)`
    memeImagen.style.filter = `hue-rotate(0deg`
    memeImagen.style.filter = `saturate(100)`
    memeImagen.style.filter = `invert(0)`
})

//DESCARGAR MEME
const descargarMeme = () => {
    domtoimage.toBlob(memeGenerador).then(function(blob){
        saveAs(blob, "meme.png")
    })
}

botonDescargar.addEventListener("click", descargarMeme)