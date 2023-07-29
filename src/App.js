import './App.css';
import Client from './components/imagegallery';
import { useState } from 'react';
import { UseSelector } from 'react-redux/es/hooks/useSelector';

function App() {
  const [ state,setState] = useState("thunderstorm")

  return (
    <div className="App">
<Client query ={state}/>
  
    </div>
  );
}

export default App;
