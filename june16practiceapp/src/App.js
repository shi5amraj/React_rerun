import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav/NavBar';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import {Routes,Route, Navigate} from "react-router-dom";
import Contactus from './Components/ContactUs/Contactus';
import Electronics from './Components/Electronics/Electronics';
import Jwellery from "./Components/Jwellery/Jwellery"
import MensClothing from './Components/Cloths/MensClothing';
import WomensClothing from './Components/Cloths/WomensClothing';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}>
        <Route path="" element={<Navigate to="electronic"/>} />
        <Route path="electronic" element={<Electronics/>} />
        <Route path="jewelery" element={<Jwellery/>} />
        <Route path="mensclothing" element={<MensClothing/>} />
        <Route path="womensclothing" element={<WomensClothing/>} />

      </Route>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/productdetails/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>

      </Routes>
    </div>
  );
}

export default App;
