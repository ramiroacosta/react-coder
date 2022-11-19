import logo from './logo.svg';
import './App.css';
import Saludo from './compon/Saludo';

function App() {
  const nombre = Saludo
  return (
    <>
    <div className="App">
      
      <Saludo name='gabriel' age='26'/>
    </div>
    </>
    
  );
}

export default App;
