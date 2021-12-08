import  ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import  NavBar  from './components/NavBar/NavBar';
import  ItemCounter  from './components/ItemCounter/ItemCounter';


const App = () =>{

  const startValue = 1
  const max = 16
 

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer greeting='Item List Container'/>
      <ItemCounter startValue={startValue} max={max}/>

    </div>
  );
}

export default App;
