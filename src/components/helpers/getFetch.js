const productos = [
    { id: 1, nombre:"Batman", categoria:"figuras", precio: 17000, detalles: "Figura de acción articulada del caballero de la noche, con 5 piezas intercambiables", foto:"https://http2.mlstatic.com/D_NQ_NP_930522-MLA42886807528_072020-O.webp", stock:5 },
    { id: 2, nombre:"Superman", categoria:"lego", precio: 1000, detalles: "Lego del hombre de acero, edición limitada", foto:"https://http2.mlstatic.com/D_NQ_NP_956084-MLA43496843883_092020-O.webp", stock:5 },
    { id: 3, nombre:"Spiderman", categoria:"lego", precio: 1200, detalles: "Juguete Lego, 30 piezas intercambiables", foto:"https://http2.mlstatic.com/D_NQ_NP_664722-MLA48242669815_112021-O.webp", stock:6 },
    { id: 4, nombre:"Batman & Robin", categoria:"estatuas", precio: 16000, detalles: "Legendaria estatua del dúo dinamico, 25cm de alto" , foto:"https://http2.mlstatic.com/D_NQ_NP_5113-MLA4242324695_052013-O.webp", stock:4 },
    { id: 5, nombre:"Shazam", categoria:"estatuas", precio: 13000, detalles: "El hombre del rayo personificado en una obra maestra, tan solo 15 ejemplares" , foto:"https://http2.mlstatic.com/D_NQ_NP_940294-MLA48423541534_122021-O.webp", stock:2 },
    { id: 6, nombre:"Flash", categoria:"figuras", precio: 10000, detalles: "Flash de PVC, pintado a mano, articulado" , foto:"https://http2.mlstatic.com/D_NQ_NP_765440-MLA48474064328_122021-O.webp", stock:4 },
    { id: 7, nombre:"Mujer Maravilla", categoria:"lego", precio: 1500, detalles: "Lego de la amazona más poderosa, edicion ultimate" , foto:"https://http2.mlstatic.com/D_NQ_NP_770061-MLA43156729725_082020-O.webp", stock:2},
];

export const getFetch = new Promise ((resolve) => {
    setTimeout (()=> {
        resolve (productos)
    },2000)
})