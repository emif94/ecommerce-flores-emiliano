<<<<<<< HEAD
import  ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
=======
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
>>>>>>> tmp
import  NavBar  from './components/NavBar/NavBar';
import  ItemCounter  from './components/ItemCounter/ItemCounter';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



const App = () =>{

  const startValue = 1
  const max = 16
 

  return (
    <BrowserRouter>

      <center>
        
        <NavBar/>
<<<<<<< HEAD
      </header>
      <ItemDetailContainer greeting='Item Detail Container'/>
      <ItemCounter startValue={startValue} max={max}/>
  
=======
        <Routes>


          <Route 
            exact
            path="/"
            element={<ItemListContainer greeting='Item List Container'/>} 
          />
          <Route 
            exact
            path="/counter"
            element={<ItemCounter startValue={startValue} max={max}/>} 
          />
          <Route 
            exact
            path="/categoria/:idCategoria"
            element={<ItemListContainer greeting='Item List Container'/>} 
          />
          <Route 
            exact
            path="/detalles/:id"
            element={<ItemDetailContainer/>} 
          />
      
          
        </Routes>
        
>>>>>>> tmp

      </center>
    
    </BrowserRouter>
      
  );
}

export default App;



