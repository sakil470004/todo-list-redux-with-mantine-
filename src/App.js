import './App.css';
import Home from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App" style={{ height: '100vh', background: '#E7F5FF', }}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
