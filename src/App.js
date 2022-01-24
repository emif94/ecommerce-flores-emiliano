import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import  NavBar  from './components/NavBar/NavBar';
import  ItemCounter  from './components/ItemCounter/ItemCounter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import  CartContextProvider  from './context/CartContext';
import CheckoutForm from './components/Cart/CheckoutForm';
import 'animate.css';


const App = () =>{

  const startValue = 1
  
 

  return (
    <CartContextProvider>
      <BrowserRouter>

        <center>
          
          <NavBar/>
          <Routes>


            <Route 
              exact
              path="/"
              element={<ItemListContainer greeting=''/>} 
            />
            <Route 
              exact
              path="/counter"
              element={<ItemCounter startValue={startValue}/>} 
            />
            <Route 
              exact
              path="/categoria/:idCategoria"
              element={<ItemListContainer greeting=''/>} 
            />
            <Route 
              exact
              path="/detalles/:id"
              element={<ItemDetailContainer/>} 
            />

          <Route 
              exact
              path="/cart"
              element={<Cart/>} 
            />

             <Route 
              exact
              path="/checkout"
              element={<CheckoutForm/>} 
            />
        
        
          </Routes>
          

        </center>
    
      </BrowserRouter>
    </CartContextProvider>
    
      
  );
}

export default App;



