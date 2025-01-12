import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // CSS für Styling

const Login = ({ setAuthToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/token/', {
                username,
                password,
            });
            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);
            setAuthToken(access); // Authentifizierungsstatus aktualisieren
        } catch (err) {
            setError('Login fehlgeschlagen. Bitte überprüfen Sie Ihre Zugangsdaten.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src="/Logo.png" alt="AquaLab Logo" className="login-logo" />
                <p className="login-subtitle">Bitte loggen Sie sich ein, um fortzufahren.</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Benutzername</label>
                        <input
                            type="text"
                            id="username"
                            className="form-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Geben Sie Ihren Benutzernamen ein"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Passwort</label>
                        <input
                            type="password"
                            id="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Geben Sie Ihr Passwort ein"
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
