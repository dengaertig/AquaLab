import React, { useState } from 'react';
import WaterValues from './components/WaterValues';
import { SidebarDark } from './components/Sidebar';
import Login from './components/Login';
import './App.css'; 

const App = () => {
  // Zustand für Authentifizierungsstatus verwalten
  const [authToken, setAuthToken] = useState(localStorage.getItem('accessToken'));

  // Logout-Funktion
  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthToken(null);
  };

  return (
    <div className="app-container">
      {/* Wenn der Benutzer nicht eingeloggt ist, Login-Formular anzeigen */}
      {!authToken ? (
        <Login setAuthToken={setAuthToken} />
      ) : (
        // Bestehende Struktur anzeigen, wenn der Benutzer eingeloggt ist
        <>
          <header className="header">
            <img
              src="/Logo.png"
              alt="AquaLab Logo"
              className="logo"
            />
          </header>

          <div className="body-container">
            <div className="sidebar">
              <SidebarDark logout={logout} />
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
        </>
      )}
    </div>
  );
};

export default App;
