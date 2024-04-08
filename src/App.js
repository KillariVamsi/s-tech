// import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.js';
import About from './pages/About.js';
import Analytics from './pages/Analytics.js';
import Guides from './pages/Comment.js';
import WorkOrders from './pages/Product.js';
import MaterialKits from './pages/ProductList.js';
import Header from './components/Header.js';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/masterD" element={<About />} />
          <Route path="/products" element={<Analytics />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/workorders" element={<WorkOrders />} />
          <Route path="/material" element={<MaterialKits />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;