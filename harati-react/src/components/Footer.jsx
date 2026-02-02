import React from 'react';
import { NavLink } from 'react-router-dom';
import { websiteData } from '../data/websiteData';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <p className="footer-title">{websiteData.hero.title}</p>
                    <p className="footer-copy">{websiteData.footer.copy}</p>
                </div>

                <div className="footer-nav">
                    {websiteData.navLinks.map((link, index) => (
                        <NavLink key={index} to={link.link}>{link.name}</NavLink>
                    ))}
                </div>

                <div className="footer-social">
                    <a href={`mailto:${websiteData.footer.email}`} title="Email Us">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href={websiteData.footer.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={websiteData.footer.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href={websiteData.footer.tiktok} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
