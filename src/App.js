import './App.css';
import Button from './Components/Button/Button';
import 'bootstrap/dist/css/bootstrap.css';
import ToDo from './Components/Todo/ToDo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button/>
      </header>
      <br/>
      <ToDo/>
    </div>
  );
}

export default App;
