import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { websiteData } from '../data/websiteData';

const Navbar = () => {
    const [dateTime, setDateTime] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const toNepaliNumber = (num) => {
        const nepNum = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
        return num.toString().split('').map(d => nepNum[d] || d).join('');
    };

    const getNepaliDate = (adDate) => {
        let bsYear = adDate.getFullYear() + 57; // Approximation
        let bsMonth = adDate.getMonth() + 9;
        if (bsMonth > 12) {
            bsMonth -= 12;
            bsYear += 1;
        }
        let bsDay = adDate.getDate();
        return `${bsYear}-${bsMonth.toString().padStart(2, '0')}-${bsDay.toString().padStart(2, '0')} BS`; // Changed to English digits for consistency
    };

    const updateDateTime = () => {
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const nepalTime = new Date(utc + (5.75 * 60 * 60 * 1000));

        const englishDate = nepalTime.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
        const time = nepalTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const nepaliDate = getNepaliDate(nepalTime);

        setDateTime(`${englishDate} | ${nepaliDate} | ${time} NST`);
    };

    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="navbar">
            <div className="nav-inner">
                <div className="logo">
                    <img src="/img/s.png" alt="Harati Gold Logo" id="logoZoom" />
                </div>

                <input
                    type="checkbox"
                    id="menu-toggle"
                    checked={menuOpen}
                    onChange={() => setMenuOpen(!menuOpen)}
                />
                <label htmlFor="menu-toggle" className="hamburger">
                    <i className="fas fa-bars"></i>
                </label>

                <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    {websiteData.navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.link}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) => isActive ? "active-link" : ""}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink to="/login" className="admin-btn">Login</NavLink>
                </nav>

                <div className="nav-datetime" id="navDateTime">{dateTime}</div>
            </div>
        </header>
    );
};

export default Navbar;
