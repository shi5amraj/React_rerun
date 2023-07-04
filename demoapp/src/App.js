import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import {Routes,Route}  from "react-router-dom";
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/products' element={<Products/>} />
     <Route path='/cart' element={<Cart/>} />
     <Route path='/productdetails/:id' element={<ProductDetails/>} />

      </Routes>

    </div>
  );
}

export default App;
