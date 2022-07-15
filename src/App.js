import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Styles/App.css';

//Pages
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;