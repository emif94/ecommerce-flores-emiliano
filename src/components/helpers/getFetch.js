const productos = [
    { id: 1, name:"Batman", categoria:"figuras", precio: "$17.000", detalles: "Figura de acción articulada del caballero de la noche, con 5 piezas intercambiables", foto:"https://http2.mlstatic.com/D_NQ_NP_930522-MLA42886807528_072020-O.webp" },
    { id: 2, name:"Superman", categoria:"lego", precio: "$1.000", detalles: "Lego del hombre de acero, edición limitada", foto:"https://http2.mlstatic.com/D_NQ_NP_956084-MLA43496843883_092020-O.webp" },
    { id: 3, name:"Spiderman", categoria:"lego", precio: "$1.200", detalles: "Juguete Lego, 30 piezas intercambiables", foto:"https://http2.mlstatic.com/D_NQ_NP_664722-MLA48242669815_112021-O.webp" },
    { id: 4, name:"Batman & Robin", categoria:"estatuas", precio: "$16.000", detalles: "Legendaria estatua del dúo dinamico, 25cm de alto" , foto:"https://http2.mlstatic.com/D_NQ_NP_5113-MLA4242324695_052013-O.webp" },
    { id: 5, name:"Shazam", categoria:"estatuas", precio: "$13.000", detalles: "El hombre del rayo personificado en una obra maestra, tan solo 15 ejemplares" , foto:"https://http2.mlstatic.com/D_NQ_NP_940294-MLA48423541534_122021-O.webp" },
    { id: 6, name:"Flash", categoria:"figuras", precio: "$10.000", detalles: "Flash de PVC, pintado a mano, articulado" , foto:"https://http2.mlstatic.com/D_NQ_NP_765440-MLA48474064328_122021-O.webp" },
    { id: 7, name:"Mujer Maravilla", categoria:"lego", precio: "$1.500", detalles: "Lego de la amazona más poderosa, edicion ultimate" , foto:"https://http2.mlstatic.com/D_NQ_NP_770061-MLA43156729725_082020-O.webp"},
];

export const getFetch = new Promise ((resolve) => {
    setTimeout (()=> {
        resolve (productos)
    },2000)
})