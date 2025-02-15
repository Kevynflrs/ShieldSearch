import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/ShieldSearch' && <Navbar />}
      <Routes>
        <Route path="/ShieldSearch" element={<Home />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;