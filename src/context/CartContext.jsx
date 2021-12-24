import { createContext, useState, useContext } from "react";
import Item from "../components/Item/Item";
import Cart from "../components/Cart/Cart";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const CartContext = createContext([])

 export const useCartContext = () => useContext (CartContext)



function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

   // function agregarCarrito(productos) {

    //    setCartList([...cartList, productos])
        
   // }

   function agregarCarrito(productos) {

       

       const index = cartList.findIndex(i => i.id === productos.id)

       if (index > -1){
           const cantPrevia = cartList[index]//.cant
           cartList.splice(index, 1)

           setCartList([...cartList, {...productos//.cant:cant
            + cantPrevia}])
       }else {
           setCartList([...cartList, productos])
       }
       
   }

    function borrarCarrito (){
        setCartList([])
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            borrarCarrito
            
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
