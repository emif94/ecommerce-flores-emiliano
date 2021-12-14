const productos = [
    { id: 1, name:"Batman", categoria:"Figura", precio: "$17.000" , foto: "https://http2.mlstatic.com/D_NQ_NP_898442-MLA48347282936_112021-O.webp", detail: "Estatua maciza de resina, 35cm de alto"},
    
];

export const getFetch = new Promise ((resolve) => {
    setTimeout (()=> {
        resolve (productos)
    },2000)
})