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

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.navigation-container')) {
                setMenuOpen(false);
            }
        };
        if (menuOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navigation">
            <div className="container navigation-container">
                {/* Logo */}
                <div className="nav-logo">
                    <a href="/">
                        <img className="logo" src={logoImage} alt="Krishi Sahayak logo" />
                    </a>
                    <a className="logo-text" href="/">Krishi Sahayak</a>
                </div>

                {/* Desktop + Mobile dropdown nav links */}
                <div className={`nav-links flex items-center gap-4 ${menuOpen ? 'nav-open' : ''}`}>
                    <a href="/" className="nav-item" onClick={closeMenu}>Home</a>
                    <a href="#" className="nav-item" onClick={closeMenu}>Product Insights</a>
                    <a href="#" className="nav-item" onClick={closeMenu}>Farm</a>
                    <a href="#" className="nav-item" onClick={closeMenu}>Farm Schemes</a>

                    <select
                        className="language-dropdown px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out"
                        aria-label="Select language"
                    >
                        <option value="English">English</option>
                        <option value="Hindi">हिन्दी</option>
                        <option value="Odia">ଓଡ଼ିଆ</option>
                        <option value="Punjabi">ਪੰਜਾਬੀ</option>
                    </select>

                    {/* Theme button inside menu for desktop only */}
                    <span className="theme-btn-desktop">
                        <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                    </span>

                    <Link to="/login" className="btn-login" onClick={closeMenu}>Login</Link>
                    <button onClick={() => { openSignIn(); closeMenu(); }} className="btn-login">
                        Register
                    </button>
                </div>

                {/* Theme button always visible in the navbar bar on mobile (outside hamburger) */}
                <span className="theme-btn-mobile">
                    <ThemeButton theme={theme} toggleTheme={toggleTheme} />
                </span>

                {/* Hamburger button */}
                <div className="mobile-menu-btn">
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className={menuOpen ? 'menu-btn-active' : ''}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export { NavBar };
