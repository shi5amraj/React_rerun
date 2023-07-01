import logo from './logo.svg';
import './App.css';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';
import Result from './Components/Result';

function App() {
  return (
    <div className="App">
      <h1>Redux Example</h1>
      <Comp1/>
      <Comp2/>
      <Result/>
      
    </div>
  );
}

export default App;
