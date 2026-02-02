import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { websiteData } from '../data/websiteData';

const Navbar = () => {
    const [dateTime, setDateTime] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const updateDateTime = () => {
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        setDateTime(now.toLocaleDateString('en-US', options));
    };

    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="navbar">
            <div className="nav-inner">
                <NavLink to="/" className="logo">
                    <img src="/img/s.png" alt="Harati Logo" />
                </NavLink>

                <nav className="nav-links">
                    {websiteData.navLinks.slice(0, 5).map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.link}
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink to="/login" className="admin-btn">Login</NavLink>
                </nav>

                <div className="nav-datetime">{dateTime}</div>

                {/* Mobile Hamburger (Simplified for now) */}
                <div className="hamburger" style={{ display: 'none' }}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
