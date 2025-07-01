import React from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Flow from './flow/Flow.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="flow-container">
          <Flow />
        </div>
      </div>
    </div>
  );
}

export default App;