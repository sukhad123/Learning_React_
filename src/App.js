import logo from './logo.svg';
import Greet from './components/Greet'//importing the greet function from the greet file
import Welcome from './components/Welcome' //importing the welcome function from the welcome file
import Hello from './components/Hello'
import './App.css';

function App() {
  return (
    <div className="App">
   {/* <Greet/>
   <Welcome/> */}
   {/* <Hello/> */}
   <Greet firstName = 'Sukhad' lastName = 'Adhikari'> <button>Action</button></Greet>
   <Welcome firstName = 'Mohini' lastName = 'Basnet'> <button>Action</button></Welcome>
    </div>
  );
}

export default App;
