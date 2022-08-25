//-----CONST
const peliculaGratis = []
const peliculaPaga = []
const carro = []

//-----CLASES/CONSTRUCTORES
class peliculaFree {
    constructor( titulo, generos, clasificacion, foto) {
        this.titulo = titulo
        this.generos = generos
        this.clasificacion = clasificacion
        this.foto = foto
    }}
class peliculaPay {
    constructor(id, titulo, generos, clasificacion, precio, foto) {
        this.id = id
        this.titulo = titulo
        this.generos = generos
        this.clasificacion = clasificacion
        this.precio = precio
        this.foto = foto
    }
}
//-----OBJETOS
function agregarPelisGratis() {
    peliculaGratis.push(new peliculaFree("Scarface", "Accion, Crimen, Drama", "+18"))
    peliculaGratis.push(new peliculaFree("The godfather", "Accion, Crimen, Mafia", "+16",))
    peliculaGratis.push(new peliculaFree("Back to the future", "Ciencia ficcion, Fantasia, Comedia cinematografica", "ATP"))
    peliculaGratis.push(new peliculaFree("Taxi Driver", "Crimen, Drama, Policial", "+16"))
    peliculaGratis.push(new peliculaFree("Top Gun", "Accion, Aventura, Drama", "ATP"))
    peliculaGratis.push(new peliculaFree("Gladiator", "Accion, Aventura, Drama", "+13"))
}
function agregarPelisPagas() {
    peliculaPaga.push(new peliculaPay(1, "The revenant", "Supervivencia, Aventura, Drama", "+16", 1499))
    peliculaPaga.push(new peliculaPay(2, "Once upon a time in Hollywood", "Drama Comedia dramatica, Comedia cinematografica", "+16", 2999))
    peliculaPaga.push(new peliculaPay(3, "Bohemian Rhapsody", "Musical, Musica, Drama", "+16", 1999))
    peliculaPaga.push(new peliculaPay(4, "Parasite", "Thriller, Drama, Comedia cinematografica", "ATP", 2999))
    peliculaPaga.push(new peliculaPay(5, "Whiplash", "Musica, Drama, Cine independiente", "ATP", 1499))
    peliculaPaga.push(new peliculaPay(6, "1917", "Accion, Guerra, Ficcion", "+16", 1999))
}

agregarPelisGratis();
agregarPelisPagas();

//-----DOM
const card = document.getElementById('peliCard')
const cardPaga = document.getElementById('peliCardPaga')

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
        
})

peliculaPaga.forEach(peliculaPay => {
    cardPaga.innerHTML += `
        <div class="card col" style="width: 18rem;">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
        <h4>${peliculaPay.titulo}</h4>
        <p class="text-muted">${peliculaPay.generos}</p>
        <p><b>${peliculaPay.clasificacion}</b></p>
        <button href="" id="btnCarro" class="btn btn-primary">Alquilar por <b>$${peliculaPay.precio}</b></button>
        </div>
        `;
})
//-----CARRO
const botones = document.querySelectorAll("#btnCarro")
    botones.forEach((boton) => boton.addEventListener("click", mensajeCarrito))

    function mensajeCarrito () {
        console.log("Agregado al carrito")
    }
}

crearCards ()

