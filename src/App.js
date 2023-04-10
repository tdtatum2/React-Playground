import NavBar from './components/NavBar';
import TipCalculator from './components/TipCalculator';
import Kippo from './components/Kippo';
import Counter from './components/Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app">
      < NavBar />
      < TipCalculator />
      < Kippo />
      < Counter />
    </div>
    
  );
}

export default App;
