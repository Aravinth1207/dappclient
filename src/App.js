import './App.css';
import { Nav } from './components/Nav';
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
      </HashRouter>
    </div>
  );
}

export default App;
