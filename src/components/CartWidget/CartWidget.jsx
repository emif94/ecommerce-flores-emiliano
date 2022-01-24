import React from 'react'
import { useCartContext } from "../../context/CartContext"
import 'animate.css';
import '../../styles/styles.css'

export const CartWidget = () => {
    let cantItemsCart = [0]
    const {cartList} = useCartContext()

    function cantItemsCartFx(){
     cantItemsCart = cartList.reduce ((acc,item)=>{
       return acc += (item.cant)
   },0)
   

    }
    return (
        <div >
            <img src='../cartA.png'   className=' altoCartWidget transicionCartWidget'/>
            

            {cantItemsCartFx()}
            

              <span >{cantItemsCart === 0 ? 

                <span>
                    
                </span> :

              `${cantItemsCart}`}</span>
        </div>
    )
}
