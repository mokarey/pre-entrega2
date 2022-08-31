const card = document.getElementById('peliCard')
const peliPaga = document.getElementById('peliCardPaga')
const peliculaGratis = []

class peliculaFree {
    constructor( titulo, generos, clasificacion, foto) {
        this.titulo = titulo
        this.generos = generos
        this.clasificacion = clasificacion
        this.foto = foto
    }}

function agregarPelisGratis() {
    peliculaGratis.push(new peliculaFree("Scarface", "Accion, Crimen, Drama", "+18"))
    peliculaGratis.push(new peliculaFree("The godfather", "Accion, Crimen, Mafia", "+16",))
    peliculaGratis.push(new peliculaFree("Back to the future", "Ciencia ficcion, Fantasia, Comedia cinematografica", "ATP"))
    peliculaGratis.push(new peliculaFree("Taxi Driver", "Crimen, Drama, Policial", "+16"))
    peliculaGratis.push(new peliculaFree("Top Gun", "Accion, Aventura, Drama", "ATP"))
    peliculaGratis.push(new peliculaFree("Gladiator", "Accion, Aventura, Drama", "+13"))
}

agregarPelisGratis()

function crearCards(){
    peliculaGratis.forEach
        (peliculaFree => {
        card.innerHTML += `
            
            <div class="card col" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
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

let stockPeliculas = [{ 
    id: 1, 
    titulo: "The revenant", 
    generos: "Supervivencia, Aventura, Drama", 
    clasificacion: "+16", precio: 1499, 
    Img: ''
},
{ 
    id: 2, 
    titulo: "Once upon a time in Hollywood", 
    generos: "Drama, Comedia dramatica, Comedia cinematografica", 
    clasificacion: "+16", 
    precio: 2999, 
    Img: ''},
{ 
    id: 3, 
    titulo: "Bohemian Rhapsody", 
    generos: "Musical, Musica, Drama", 
    clasificacion: "+16", 
    precio: 1999, 
    Img: ''},
{ 
    id: 4, 
    titulo: "Parasite", 
    generos: "Thriller, Drama, Comedia cinematografica", 
    clasificacion: "ATP", 
    precio: 2999, 
    Img: ''},
{ 
    id: 5, 
    titulo: "Whiplash", 
    generos: "Musica, Drama, Cine independiente", 
    clasificacion: "ATP", 
    precio: 1499, 
    Img: ''},
{ 
    id: 6, 
    titulo: "1917", 
    generos: "Accion, Guerra, Ficcion", 
    clasificacion: "+16",  
    precio: 1999, 
    Img: '' 
}]



let carrito = []

stockPeliculas.forEach((pelicula) => {
    const div = document.createElement('div')
    div.classList.add('tarjetas')
    div.innerHTML = `
        <div class="card col" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
        <h4>${pelicula.titulo}</h4>
        <p class="text-muted">${pelicula.generos}</p>
        <p>${pelicula.clasificacion}</p>
        <button id="btnCarrito${pelicula.id}" class=""> Agregar al carrito <b>$${pelicula.precio}</b>.</button>
        </div>`
    
    peliPaga.appendChild(div)

    
})

const botonAgregar = document.getElementById (`btnCarrito${pelicula.id}`).addEventListener('click', () => {
        agregarCarrito(pelicula.id)

    
    })

    const agregarCarrito = (peliId) => {
        const item = stockPeliculas.find((peli) => peli.id === peliId)
        carrito.push(item)
        console.log(carrito)
    }


