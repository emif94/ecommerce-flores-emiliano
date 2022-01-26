import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

 export const useCartContext = () => useContext (CartContext)



function CartContextProvider({children}) {
    const [listaCarrito, setListaCarrito] = useState([])
    
   // Función: agrega los productos al carrito, si el producto ya existe, no lo agrega nuevamente y en su lugar sólo agrega a la cantidad ya existente.

   function agregarCarrito(productos) {

       
       const product = listaCarrito.find((item) => item.id === productos.id);

       if (!product){
           setListaCarrito([...listaCarrito, productos]);

       } else{
            
            setListaCarrito([...listaCarrito.slice(1), {...productos, cant: product.cant + productos.cant}])

       }   

   }


   //Función: Vacía el carrito.

    function borrarCarrito (){
        setListaCarrito([])

    }


    //Función: Elimina un producto en particular del carrito.

    function eliminarUnProducto(e){
        let productoABorrar = listaCarrito.findIndex(item => item.id ==e.target.id);
        listaCarrito.splice(productoABorrar, 1);
        
        setListaCarrito([...listaCarrito])

    }


    //Función: Suma el monto total, sumando los productos, teniendo en cuenta la cantidad de cada uno.
    function sumarTotalCarrito(){
     return listaCarrito.reduce ((acc,item)=>{
       return acc += (item.precio * item.cant)
   },0)
 

}
   


    return (
        <CartContext.Provider value={{
            listaCarrito,
            agregarCarrito,
            borrarCarrito,
            eliminarUnProducto,
            sumarTotalCarrito,      
            
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
