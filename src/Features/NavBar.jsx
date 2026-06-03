import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import ThemeButton from './themeButton.jsx'; 
import './NavBar.css';

const NavBar = ({ openSignIn }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        const userPrefersDark =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        return savedTheme || (userPrefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <nav className="navigation">
            <div className="container navigation-container">
                <div className="nav-logo">
                    <a href="/">
                        <img
                            className="logo"
                            src={logoImage}
                            alt="Krishi Sahayak logo"
                        />
                    </a>
                    <a className="logo-text" href="/">
                        Krishi Sahayak
                    </a>
                </div>
                <div className="nav-links flex items-center gap-4">
                    <a href="/" className="nav-item">
                        Home
                    </a>
                    <a href="#" className="nav-item">
                        Product Insights
                    </a>
                    <a href="#" className="nav-item">
                        Farm
                    </a>
                    <a href="#" className="nav-item">
                        Farm Schemes
                    </a>

                    {/* Language Dropdown */}
                   <select
  className="language-dropdown px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out"
  aria-label="Select language"
>
  <option value="English">English</option>
  <option value="Hindi">हिन्दी</option>
  <option value="Odia">ଓଡ଼ିଆ</option>
  <option value="Punjabi">ਪੰਜਾਬੀ</option>
</select>


                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                    <Link to="/login" className="btn-login">
                        Login
                    </Link>
                    <button
                        onClick={(e) => openSignIn()}
                        className="btn-login"
                    >
                        Register
                    </button>
                </div>
                <div className="mobile-menu-btn">
                    <button type="button">
                        <i data-feather="menu" className="icon-menu"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export { NavBar };
