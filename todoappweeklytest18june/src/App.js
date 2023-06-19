import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <Todo/>
      <TodoList/>
    </div>
  );
}

export default App;
