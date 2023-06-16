import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cart from './Components/Cart';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
     </Routes>

    </div>
  );
}

export default App;
