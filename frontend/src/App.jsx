// src/App.jsx
import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutPages from './pages/About';
import AgendaPages from './pages/Agenda';
import InvalatPages from './pages/Invalat';
import DokumenPages from './pages/Dokumen';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-6 bg-white mt-2 ml-2 rounded-tl">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<AboutPages />} />
              <Route path="/agenda" element={<AgendaPages />} />
              <Route path="/invalat" element={<InvalatPages />} />
              <Route path="/dokumen" element={<DokumenPages />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
