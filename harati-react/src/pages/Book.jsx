import React from 'react';

const Book = () => {
    return (
        <main className="book-page">
            <section className="book-hero hero fullwidth">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>गहना बुकिङ गर्नुहोस्</h1>
                    <p>आफ्नो मनपर्ने गहना सुरक्षित गर्न बुकिङ गर्नुहोस्।</p>
                </div>
            </section>

            <section className="book-content section fullwidth" style={{ padding: '40px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto', padding: '30px', background: '#fff', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ color: '#5b0f0f', marginBottom: '20px' }}>बुकिङ फारम</h2>
                    <form>
                        <input type="text" placeholder="पूरा नाम" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                        <input type="tel" placeholder="फोन नम्बर" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                        <select style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
                            <option>गहनाको प्रकार छान्नुहोस्</option>
                            <option>हार</option>
                            <option>औंठी</option>
                            <option>चुरा</option>
                            <option>अन्य</option>
                        </select>
                        <textarea placeholder="थप जानकारी (यदि छ भने)" rows="4" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }}></textarea>
                        <button type="submit" className="add-booking-btn" style={{ width: '100%' }}>बुकिङ पठाउनुहोस्</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Book;
