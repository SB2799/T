import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDo from './Components/Todo/ToDo';
import TodoLocal from './Components/Todo/TodoLocal';


function App() {
  return (
    <div className="App">
      <ToDo className = "Todo-display"/>
      <TodoLocal/>
    </div>
  );
}

export default App;
