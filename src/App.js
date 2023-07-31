import './App.css';
import Client from './components/imagegallery';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Navbar from './components/navbar';
function App() {
  const [ state,setState] = useState("thunderstorm")

  return (
    <div className="App">
      <Navbar setState={setState}/>

<Client query ={state}/>
  
    </div>
  );
}

export default App;
