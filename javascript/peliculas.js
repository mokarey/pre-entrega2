

const card = document.getElementById('peliCard')
const peliculaGratis = []


class peliculaFree {
    constructor( titulo, generos, clasificacion, foto) {
        this.titulo = titulo
        this.generos = generos
        this.clasificacion = clasificacion
        this.foto = foto
    }}

function agregarPelisGratis() {
    peliculaGratis.push(new peliculaFree
        ("Scarface",
         "Accion, Crimen, Drama", 
         "+18", 
         "./Imagenes/scarface.jpg" ))
    peliculaGratis.push(new peliculaFree
        ("The godfather", 
        "Accion, Crimen, Mafia",
         "+16",
          "./Imagenes/padrino.png"))
    peliculaGratis.push(new peliculaFree
        ("Back to the future", 
        "Ciencia ficcion, Fantasia, Comedia cinematografica", "ATP", 
        "./Imagenes/backtofuture.jpg"))
    peliculaGratis.push(new peliculaFree
        ("Taxi Driver", 
        "Crimen, Drama, Policial", 
        "+16"))
    peliculaGratis.push(new peliculaFree
        ("Top Gun", 
        "Accion, Aventura, Drama", 
        "ATP"))
    peliculaGratis.push(new peliculaFree
        ("Gladiator", 
        "Accion, Aventura, Drama", 
        "+13"))
}

agregarPelisGratis()

function crearCards(){
    peliculaGratis.forEach
        (peliculaFree => {
        card.innerHTML += `
            <div class="card col" style="width: 18rem;">
                <img src="${peliculaFree.foto}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4>${peliculaFree.titulo}</h4>
                <p class="text-muted">${peliculaFree.generos}</p>
                <p><b>${peliculaFree.clasificacion}</b></p>
                <a href="" id="btnCarritoPi" class="btn btn-primary">Ver <b>gratis</b> ahora!</a>
            </div>
            `;
    }
)} 

crearCards()

const boton = document.getElementById('btnCargar')

boton.addEventListener('click', ()=>{
    const xhr =  new XMLHttpRequest();
    xhr.open('GET', 'peliculas.json', true);
    
     xhr.send()
})

boton()


const carritoDiv = document.getElementById('carrito')

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function crearCard() {
    stockPeliculas.forEach((pelicula) => {
        peliPaga.innerHTML += `
        <div class="card col" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h4>${pelicula.titulo}</h4>
            <p class="text-muted">${pelicula.generos}</p>
            <p>${pelicula.clasificacion}</p>
            <button id="btnCarrito${pelicula.id}" class=""> Agregar al carrito <b>$${pelicula.precio}</b>.</button>
        </div>`
    })
    agregarFuncionalidad()
}

function agregarFuncionalidad() {
    stockPeliculas.forEach((pelicula) =>{
        document.getElementById (`btnCarrito${pelicula.id}`).addEventListener("click", ()=> {
        console.log(pelicula)
        agregarAlCarrito(pelicula)
        })
    })
}


function agregarAlCarrito(pelicula){
    let review = carrito.some(peliculaSome=>peliculaSome.id === pelicula.id)
        if(review === false){
        pelicula.cantidad = 1
        carrito.push(pelicula)
        }else{
        let peliFind = carrito.find(peliculaFind=>peliculaFind.id === pelicula.id)
        peliFind.cantidad++
        }
    console.log(carrito)
    cargarCarrito()
}

function cargarCarrito(){
    carritoDiv.innerHTML =""
    carrito.forEach((pelicula)=>{
        carritoDiv.innerHTML += `
        <div class="card col" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h4>${pelicula.titulo}</h4>
            <p class="text-muted">Cantidad: ${pelicula.cantidad}</p>
            <button id="eliminarCarrito${pelicula.id}" class=""><b>Eliminar</b></button>
        </div>`
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    eliminarPelicula()
}

function eliminarPelicula(){
    carrito.forEach((pelicula) =>{
        document
        .getElementById (`eliminarCarrito${pelicula.id}`)
        .addEventListener("click", ()=> {
            carrito = carrito.filter(peliculaFilter=>peliculaFilter.id !== pelicula.id)
            cargarCarrito()
        })
    })
}

crearCard()
cargarCarrito()

Swal.fire({
    icon:'warning',
    title: 'CUIDADO!',
    text:'Este sitio contiene contenido explicito.',
}) 

document.addEventListener("DOMContentLoaded", ()=>{
    fetchData()
})

