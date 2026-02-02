import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className="notfound-page">
            <section className="hero fullwidth" style={{ height: '90vh', background: 'var(--primary-maroon)' }}>
                <div className="hero-content" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '120px', marginBottom: '10px', opacity: 0.2 }}>404</h1>
                    <h2 style={{ color: 'var(--premium-gold)', fontSize: '36px', marginBottom: '20px', fontFamily: 'Playfair Display, serif' }}>
                        The Piece You Seek Has Not Been Found
                    </h2>
                    <p style={{ color: '#fff', fontSize: '18px', marginBottom: '40px', opacity: 0.8 }}>
                        The page you are looking for might have been moved, removed, or never existed in our collection.
                    </p>
                    <NavLink to="/" className="hero-btn">Return to Atelier</NavLink>
                </div>
            </section>
        </main>
    );
};

export default NotFound;
