import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import  NavBar  from './components/NavBar/NavBar';
import  ItemCounter  from './components/ItemCounter/ItemCounter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import  CartContextProvider  from './context/CartContext';


const App = () =>{

  const startValue = 1
  const max = 16
 

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
              element={<ItemCounter startValue={startValue} max={max}/>} 
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
        
        
          </Routes>
          

        </center>
    
      </BrowserRouter>
    </CartContextProvider>
    
      
  );
}

export default App;



