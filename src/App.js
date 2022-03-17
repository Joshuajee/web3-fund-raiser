import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import background from './img/background.png';

function App() {
  return (
    <div style={{ backgroundImage: background }}>

      <Header />

      <Home/>

    </div>
  );
}

export default App;
