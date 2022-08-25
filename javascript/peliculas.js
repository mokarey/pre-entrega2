const peliculaGratis = []
const peliculaPaga = []
const carrito = []

class peliculaFree {
    constructor( titulo, generos, clasificacion, foto) {
        this.titulo = titulo
        this.generos = generos
        this.clasificacion = clasificacion
        this.foto = foto
    }}
class peliculaPay {
    constructor( titulo, generos, clasificacion, precio, foto) {
        this.titulo = titulo
        this.generos = generos
        this.clasificacion = clasificacion
        this.precio = precio
        this.foto = foto
    }
}

function agregarPelisGratis() {
    peliculaGratis.push(new peliculaFree("Scarface", "Accion, Crimen, Drama"))
    peliculaGratis.push(new peliculaFree("The godfather", "Accion, Crimen, Mafia"))
    peliculaGratis.push(new peliculaFree("Back to the future", "Ciencia ficcion, Fantasia, Comedia cinematografica"))
    peliculaGratis.push(new peliculaFree("Taxi Driver", "Crimen, Drama, Policial"))
    peliculaGratis.push(new peliculaFree("Top Gun", "Accion, Aventura, Drama"))
    peliculaGratis.push(new peliculaFree("Gladiator", "Accion, Aventura, Drama"))
}
function agregarPelisPagas() {
    peliculaPaga.push(new peliculaPay("The revenant", "Supervivencia, Aventura, Drama"))
    peliculaPaga.push(new peliculaPay("Once upon a time in Hollywood", "Drama Comedia dramatica, Comedia cinematografica"))
    peliculaPaga.push(new peliculaPay("Bohemian Rhapsody", "Musical, Musica, Drama"))
    peliculaPaga.push(new peliculaPay("Parasite", ""))
    peliculaPaga.push(new peliculaPay("Whiplash", "Thriller, Drama, Comedia cinematografica"))
    peliculaPaga.push(new peliculaPay("1917", "Accion, Guerra, Ficcion"))
}

agregarPelisGratis();
agregarPelisPagas();


const tarjetas = document.querySelector(".tarjetas")
const carro = document.querySelector(".carrito")

function crearTarjetas() {
    peliculaGratis.forEach(peliculaFree => {
        tarjetas.innerHTML += `
        
            <div class="card col" style="width: 18rem;">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${peliculaFree.titulo}</h4>
                    <p class=${peliculaFree.genero}</p>
                    <a href="#" id="btnCarritoPi" class="btn btn-primary"${pizza.id}>$${pizza.precio}</a>
            </div>

        `;
    })
    peliculaPaga.forEach(peliculaPay => {
        tarjetas.innerHTML += `
        
            <div class="card col" style="width: 18rem;">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${peliculaPay.gusto}</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" id="" class="btn btn-primary"${empanada.num}>$${empanada.valor}</a>
            </div>

        `;
    })
    agregarFuncionalidad()
}

function agregarFuncionalidad() {
    pizzas.forEach((pizza)=>{
        document.querySelector(`#btnCarritoPi${pizza.id}`)
    })
}

crearTarjetas ();

