import './App.css';
import NavBar from './compon/NavBar';
import ItemListContainer from './compon/ItemListContainer';
import ItemDetailContainer from './compon/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer />}/>
        <Route path='/nav' element={ <ItemListContainer />}/>
        <Route path='/detalle/:id' element={ <ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
