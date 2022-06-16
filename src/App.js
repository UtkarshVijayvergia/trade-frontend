import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Buy from './components/Buy';
import Sell from './components/Sell';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Dashboard />}></Route>
                    <Route exact path="/dashboard" element={<Dashboard />}></Route>
                    <Route exact path="/buy" element={<Buy />}></Route>
                    <Route exact path="/sell" element={<Sell />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;