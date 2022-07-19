import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home'
import Shops from './pages/Shops';
import Restaurants from './pages/Restaurants';
import Lessons from './pages/Lessons';
import Takeaway from './pages/Takeaway';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shops" element={<Shops />} />
                    <Route path="/restaurants" element={<Restaurants />} />
                    <Route path="/lessons" element={<Lessons />} />
                    <Route path="/takeaway" element={<Takeaway />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
