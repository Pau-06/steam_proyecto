// Array que contiene los objetos con la información de las suscripciones (juegos)
const suscripciones = [
    {
        nombre: "GTA V",  // Nombre del juego
        descripcion: "Juego de mundo abierto con misiones y aventuras en Los Santos.", // Descripción del juego
        imagen: "./imagenes/gta.png",  // Ruta de la imagen del juego
        enlace: "https://www.mercadopago.com/gta-v"  // Enlace de compra del juego
    },
    {
        nombre: "Call of Duty",  // Nombre del juego
        descripcion: "Juego de disparos en primera persona ambientado en guerras modernas.",  // Descripción del juego
        imagen: "./imagenes/geometry.jpg",  // Ruta de la imagen del juego
        enlace: "https://www.mercadopago.com/call-of-duty"  // Enlace de compra del juego
    },
    {
        nombre: "Counter Strike",  // Nombre del juego
        descripcion: "Juego de disparos competitivo por equipos en diferentes mapas.",  // Descripción del juego
        imagen: "./imagenes/cs.jpg",  // Ruta de la imagen del juego
        enlace: "https://www.mercadopago.com/counter-strike"  // Enlace de compra del juego
    },
    {
        nombre: "Dota 2",  // Nombre del juego
        descripcion: "Juego de estrategia en tiempo real con héroes únicos y batallas épicas.",  // Descripción del juego
        imagen: "./imagenes/dota2.png",  // Ruta de la imagen del juego
        enlace: "https://www.mercadopago.com/dota-2"  // Enlace de compra del juego
    }
];

// Función para mostrar las tarjetas con la información de los juegos
function mostrarSuscripciones() {
    // Selecciona el contenedor donde se agregarán las tarjetas (por clase CSS)
    const contenedor = document.querySelector('.categoria-container');

    // Recorre cada objeto 'suscripcion' en el array 'suscripciones'
    suscripciones.forEach(suscripcion => {
        // Crea un nuevo 'div' para representar cada tarjeta
        const tarjeta = document.createElement('div');

        // Añade la clase 'card' al 'div' para aplicarle estilos CSS
        tarjeta.classList.add('card');

        // Rellena el contenido del 'div' (tarjeta) con la información del juego
        tarjeta.innerHTML = `
            <!-- Imagen del juego -->
            <img src="${suscripcion.imagen}" alt="${suscripcion.nombre}">
            <!-- Nombre del juego -->
            <h3>${suscripcion.nombre}</h3>
            <!-- Descripción del juego -->
            <p>${suscripcion.descripcion}</p>
            <!-- Enlace para comprar el juego -->
            <a href="${suscripcion.enlace}" target="_blank">
                <!-- Botón para comprar -->
                <button class="leer-mas">COMPRAR EN MP</button>
            </a>
        `;

        // Agrega la tarjeta al contenedor en el DOM
        contenedor.appendChild(tarjeta);
    });
}

// Ejecuta la función 'mostrarSuscripciones' cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", mostrarSuscripciones);
