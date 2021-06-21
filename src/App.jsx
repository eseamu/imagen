import React from 'react'
import './App.css';
import CardContainer from './components/CardContainer'
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';







function App() {
  return (
    <div className="App">
      <h1>CardWidget</h1>
 
   <NavBar/>
    <br/>
   <CardContainer className='card-container'/>

    <ItemCount initial={1} stock ={5} onAdd={()=> console.log('Agregado')}/>

    </div>
  );
}

export default App;




