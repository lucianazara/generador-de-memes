const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)

const enlaceImagen = $("#imagen-nav")
const panelImagen = $(".seccion-imagen")
const botonAbrirImagen = $("#btn-abrir-imagen")
const botonAbrirTexto= $("#btn-abrir-texto")
const seccionImagen = $("#seccion-panel-imagen")
const enlaceTexto = $("#texto-nav")
const panelTexto = $(".seccion-texto")
const seccionTexto = $("#seccion-panel-texto")
const botonModoOscuro =$("#modo-oscuro")
const body = $("body")
const botonCerrar = $(".boton-cerrar")
const botonCerrarTexto = $("#boton-cerrar-texto")
const botonCerrarImagen = $("#boton-cerrar-imagen")
const menu = $(".menu")
const imagenURL = $("#url")
const memeContenedor = $("#meme-contenedor")
const memeGenerador = $("#meme-generador")
const memeImagen = $(".meme-imagen")
const texto = $(".texto")
const textoSuperior = $("#meme-texto-superior")
const textoInferior = $("#meme-texto-inferior")
const parrafoTextoSuperior = $("#parrafo-texto-superior")
const parrafoTextoInferior = $("#parrafo-texto-inferior")
const inputTextoSuperior = $("#texto-superior")
const inputTextoInferior = $("#texto-inferior")
const sinTextoSuperior = $("#sin-texto-superior")
const sinTextoInferior = $("#sin-texto-inferior")
const contenedorTextoSuperior = $("#contenedor-texto-superior")
const contenedorTextoInferior = $("#contenedor-texto-inferior")
const tipografia = $("#tipografia")
const tamanoFuente = $("#tamano-fuente")
const botonAlineacion = $(".botones-alineacion")
const botonIzquierda = $("#btn-izquierda")
const botonCentro = $("#btn-centro")
const botonDerecha = $("#btn-derecha")
const colorTexto = $("#color-texto")
const colorFondo = $("#color-fondo")
const fondoTransparente = $("#fondo-transparente")
const textosMeme = $$(".meme-generador-texto")
const botonContornoClaro = $("#btn-contorno-claro")
const botonContornoOscuro = $("#btn-contorno-oscuro")
const espaciado = $("#espaciado")
const interlineado = $("#interlineado")

//VARIABLES SECCION IMAGEN
const colorFondoMeme = $("#color-fondo-meme")
const efectoEstablecido = $("#efecto-preestablecido")
const contenedorMeme = $(".contenedor-meme-imagen")
const brillo = $("#brightness")
const opacidad = $("#opacity")
const contraste = $("#contrast")
const desenfoque = $("#blur")
const escalaGrises = $("#grayscale")
const sepia = $("#sepia")
const hue = $("#hue")
const saturacion = $("#saturate")
const negativo = $("#invert")
const botonReestablecer = $("#boton-reestablecer")
const botonDescargar = $("#boton-descargar")

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
    document.body.classList.add("modo-oscuro")
})

botonModoOscuro.addEventListener("click", () => {
    document.body.classList.add("modo-claro")
    if(botonModoOscuro.innerHTML == "Modo oscuro"){
        document.body.classList.add("modo-claro")
        botonModoOscuro.innerHTML = "Modo claro"
    } else {
        document.body.classList.remove("modo-claro")
        botonModoOscuro.innerHTML = "Modo oscuro"
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
    let url = event.target.value
  memeImagen.style.backgroundImage = `url(${url})`
})

// MODIFICAR TEXTOS
inputTextoSuperior.addEventListener("input", event => {
    parrafoTextoSuperior.innerText = event.target.value
})

inputTextoInferior.addEventListener("input", event => {
    parrafoTextoInferior.innerText = event.target.value
})

// OCULTAR TEXTOS
sinTextoSuperior.addEventListener("click", () => {
    contenedorTextoSuperior.classList.toggle("oculto")
})

sinTextoInferior.addEventListener("click", () => {
    contenedorTextoInferior.classList.toggle("oculto")
})

// CAMBIAR TIPOGRAFIA

tipografia.addEventListener("change", event => {
    let tipografiaElegida = event.target.value
    parrafoTextoSuperior.style.fontFamily = tipografiaElegida
    parrafoTextoInferior.style.fontFamily = tipografiaElegida
})

tipografia.addEventListener("change", event =>{
    let tipografiaElegida = event.target.value
    parrafoTextoSuperior.style.fontFamily = tipografiaElegida
    parrafoTextoInferior.style.fontFamily = tipografiaElegida
})

tamanoFuente.addEventListener("input", event =>{
    let tamanoFuenteElegido = event.target.value
    parrafoTextoSuperior.style.fontSize = `${tamanoFuenteElegido}px`
    parrafoTextoInferior.style.fontSize = `${tamanoFuenteElegido}px`
})

// ALINEACION DE TEXTO

botonIzquierda.addEventListener("click", event =>{
    event.preventDefault();
    parrafoTextoSuperior.style.textAlign = "left"
    parrafoTextoInferior.style.textAlign = "left"

})

botonCentro.addEventListener("click", event =>{
    event.preventDefault()
    parrafoTextoSuperior.style.textAlign = "center"
    parrafoTextoInferior.style.textAlign = "center"
})

botonDerecha.addEventListener("click", event =>{
    event.preventDefault()
    parrafoTextoSuperior.style.textAlign = "right"
    parrafoTextoInferior.style.textAlign = "right"
})

//CAMBIAR COLOR

colorTexto.addEventListener("input", event => {
    let colorElegidoTexto = event.target.value
    parrafoTextoSuperior.style.color = colorElegidoTexto
    parrafoTextoInferior.style.color = colorElegidoTexto
})

colorFondo.addEventListener("change", event => {
    let colorElegidoFondo = event.target.value
    contenedorTextoSuperior.style.backgroundColor = colorElegidoFondo
    contenedorTextoInferior.style.backgroundColor= colorElegidoFondo
})

// FONDO TRANSPARENTE
fondoTransparente.addEventListener("click", () => {
       parrafoTextoSuperior.classList.add("fondo-transparente")
        contenedorTextoSuperior.classList.add("ocultar")
        parrafoTextoSuperior.classList.add("fondo-transparente")
        contenedorTextoInferior.classList.add("ocultar")

})

// CONTORNO 
botonContornoClaro.addEventListener("click", () => {
    parrafoTextoSuperior.classList.toggle("contorno-claro")
    parrafoTextoInferior.classList.toggle("contorno-claro")

})

botonContornoOscuro.addEventListener("click", () => {
    parrafoTextoSuperior.classList.toggle("contorno-oscuro")
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