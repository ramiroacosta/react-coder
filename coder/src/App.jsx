import './App.css';
import NavBar from './compon/NavBar';
import ItemListContainer from './compon/ItemListContainer';

function App() {

  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting='Hola mundo' />
      </div>
    </>

  );
}

export default App;
