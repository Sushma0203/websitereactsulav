import React from 'react';

const Book = () => {
    return (
        <main className="book-page">
            <section className="book-hero hero fullwidth">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Book Jewelry</h1>
                    <p>Book your favorite jewelry to secure it.</p>
                </div>
            </section>

            <section className="book-content section fullwidth" style={{ padding: '40px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', padding: '30px', background: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ color: '#5b0f0f', marginBottom: '20px' }}>Booking Form</h2>
                    <form>
                        <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                        <input type="tel" placeholder="Phone Number" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                        <select style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
                            <option>Select Jewelry Type</option>
                            <option>Necklace</option>
                            <option>Ring</option>
                            <option>Bangle</option>
                            <option>Other</option>
                        </select>
                        <textarea placeholder="Additional Information (if any)" rows="4" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }}></textarea>
                        <button type="submit" className="add-booking-btn" style={{ width: '100%' }}>Send Booking</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Book;
