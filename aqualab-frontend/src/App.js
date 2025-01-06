import React from 'react';
import WaterValues from './components/WaterValues';
import { SidebarDark } from './components/Sidebar';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <img
          src="/Logo.png"
          alt="AquaLab Logo"
          className="logo"
        />
      </header>

      <div className="body-container">
        <div className="sidebar">
          <SidebarDark />
        </div>

        <div className="main-content">
          <main>
            <WaterValues />
          </main>

          <footer className="text-center mt-4">
            <p className="text-muted">© 2025 AquaLab - Dennis Gärtig</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default App;
