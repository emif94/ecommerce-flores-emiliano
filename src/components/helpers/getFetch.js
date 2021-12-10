const productos = [
    { id: 1, name:"Batman", categoria:"Figura", precio: "$17.000" },
    { id: 2, name:"Superman", categoria:"Lego", precio: "$1.000" },
    { id: 3, name:"Spiderman", categoria:"Lego", precio: "$1.200" },
    { id: 4, name:"Batman & Robin", categoria:"Estatua", precio: "$16.000" },
    { id: 5, name:"Shazam", categoria:"Estatua", precio: "$13.000" },
    { id: 6, name:"Flash", categoria:"Figura", precio: "$10.000" },
    { id: 7, name:"Mujer Maravilla", categoria:"Lego", precio: "$1.500" },
];

export const getFetch = new Promise ((resolve) => {
    setTimeout (()=> {
        resolve (productos)
    },2000)
})