import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { websiteData } from '../data/websiteData';

const Navbar = () => {
    const [dateTime, setDateTime] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const updateDateTime = () => {
        const now = new Date();

        // English Format
        const dayEn = now.toLocaleDateString('en-US', { weekday: 'long' });
        const dateEn = now.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
        const timeEn = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

        // Nepali Format (using ne-NP locale for names)
        const dayNe = now.toLocaleDateString('ne-NP', { weekday: 'long' });
        const dateNe = now.toLocaleDateString('ne-NP', { day: 'numeric', month: 'long', year: 'numeric' });

        setDateTime(`${dayEn}, ${dateEn} | ${dayNe}, ${dateNe} | ${timeEn}`);
    };

    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="navbar">
            <div className="top-bar">
                <div className="nav-datetime">{dateTime}</div>
            </div>

            <div className="nav-inner">
                <NavLink to="/" className="logo">
                    <img src="/img/s.png" alt="Harati Logo" />
                </NavLink>

                <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {websiteData.navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.link}
                            className={({ isActive }) => isActive ? "active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
