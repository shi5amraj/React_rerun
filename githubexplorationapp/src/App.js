
import './App.css';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './Components/UserProfile';
import Search from './Components/Search';

function App() {

   const isLoggedIn=useSelector((storedData)=>{
    return storedData.isLoggedIn;

   })

  return (
    <div className="App">

      {

    (isLoggedIn)?<>
    <Navbar/>
    <Routes>
  <Route path='' element={<Home/>}/>
  <Route path='/profile' element={<UserProfile/>}/>
  <Route path='/search/:username' element={<Search/>}/>

    </Routes>
   
    </>
    :
    <>
     <Login/>
    </>
      
      }
     
    </div>
  );
}

export default App;
