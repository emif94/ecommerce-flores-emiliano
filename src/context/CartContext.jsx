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

       
       const product = cartList.find((item) => item.id === productos.id);

       if (!product){
           setCartList([...cartList, productos]);

       } else{
            
            setCartList([...cartList.slice(1), {...productos, cant: product.cant + productos.cant}])

       }   

   }



    function borrarCarrito (){
        setCartList([])

    }


    function eliminarUnProducto(e){
        console.log (e.target.id);
        let productoABorrar = cartList.findIndex(item => item.id ==e.target.id);
        cartList.splice(productoABorrar, 1);
        
        setCartList([...cartList])

    }


    function sumarTotalCarrito(){
     return cartList.reduce ((acc,item)=>{
       return acc += (item.precio * item.cant)
   },0)
   //console.log(totalCarrito)
   console.log(cartList)

}

   // function cantItemsCartFx(){
    // cantItemsCart = cartList.reduce ((acc,item)=>{
    //   return acc += (item.cant)
  // },0)
  // console.log(cantItemsCart)

  //  }


  
        

   


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            borrarCarrito,
            eliminarUnProducto,
            sumarTotalCarrito, 
          //  cantItemsCartFx,
            
            
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
