import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import {Route,Routes} from "react-router-dom";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home"; 

import {useSelector} from "react-redux";

function App() {

const toggleData= useSelector((storeData)=>{

  return storeData;

})

  return (
    <div  className= { (toggleData==false)?"App darkTheme" : "App"}>
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/service' element={<Service/>} />
     <Route path='/contact' element={<Contact/>} />

      </Routes>
    </div>
  );
}

export default App;
