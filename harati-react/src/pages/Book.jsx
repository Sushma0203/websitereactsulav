import React from 'react';

const Book = () => {
    return (
        <main className="book-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <div className="hero-overlay" style={{ background: 'var(--primary-maroon)' }}></div>
                <div className="hero-content">
                    <h1>Exclusive Reservation</h1>
                    <p>Secure your favorite masterwork before it finds another home.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff', padding: '100px 20px' }}>
                <div style={{ maxWidth: '650px', margin: '0 auto', padding: '60px', background: '#fff', borderRadius: '30px', boxShadow: 'var(--shadow-premium)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                    <h2 style={{ marginBottom: '40px', textAlign: 'center' }}>Reservation Request</h2>
                    <form>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                            <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                        </div>
                        <select style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit', color: '#666' }}>
                            <option>Piece Type</option>
                            <option>Necklace</option>
                            <option>Ring</option>
                            <option>Earrings</option>
                            <option>Bespoke Commission</option>
                        </select>
                        <textarea placeholder="Specific requirements or preferences..." rows="5" style={{ width: '100%', padding: '15px', marginBottom: '40px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }}></textarea>
                        <button type="submit" className="add-booking-btn" style={{ padding: '20px' }}>Submit Reservation</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Book;
