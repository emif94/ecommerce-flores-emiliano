import React from 'react'
import { useCartContext } from "../../context/CartContext"

export const CartWidget = () => {
    let cantItemsCart = [0]
    const {cartList} = useCartContext()

    function cantItemsCartFx(){
     cantItemsCart = cartList.reduce ((acc,item)=>{
       return acc += (item.cant)
   },0)
   

    }
    return (
        <div>
            <img src='../cartA.png'  style={{ maxHeight: '30px',}}/>
            

            {cantItemsCartFx()}
            

              <span>{cantItemsCart === 0 ? 

                <span>
                    
                </span> :

              `${cantItemsCart}`}</span>
        </div>
    )
}
