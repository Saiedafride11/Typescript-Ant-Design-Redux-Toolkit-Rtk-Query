
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import FlightDetails from './components/pages/Home/FlightDetails';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flight/:flightId" element={<FlightDetails />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
