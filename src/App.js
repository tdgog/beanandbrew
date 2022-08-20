import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home'
import Shops from './pages/Shops';
import Restaurants from './pages/Restaurants';
import Lessons from './pages/Lessons';
import Takeaway from './pages/Takeaway';

function Redirect() {
    const { url } = useParams();
    window.location.replace(url);
    return <div className="h-screen w-screen bg-background bg-cover bg-fixed p-5 pt-20" />
}

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

                    {/* External URL Redirects 
                        Pass the encoded URL as a parameter in the <Link /> component:
                        <Link to={`redirect/${encodeURIComponent('url')}`} />
                    */}
                    <Route path='/redirect/:url' element={<Redirect />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;
