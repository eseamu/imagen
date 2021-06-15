import React from 'react'
import './App.css';
import CardContainer from './components/CardContainer'
import NavBar from './components/NavBar';






function App() {
  return (
    <div className="App">
      <h1>CardWidget</h1>
 
   <NavBar/>
    <br/>
   <CardContainer className='card-container'/>

    </div>
  );
}

export default App;




