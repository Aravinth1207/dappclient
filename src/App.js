import './App.css';
import { Nav } from './components/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dappclient" element={<Nav />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
