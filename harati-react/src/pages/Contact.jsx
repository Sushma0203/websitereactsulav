import React from 'react';

const Contact = () => {
    return (
        <main className="contact-page">
            <section className="contact-hero hero fullwidth">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>हामीलाई सम्पर्क गर्नुहोस्</h1>
                    <p>हामीलाई फोन गर्नुहोस् वा सिधै पसलमा आउनुहोस्।</p>
                </div>
            </section>

            <section className="contact-content section fullwidth" style={{ padding: '40px 20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                <div className="contact-info" style={{ flex: '1 1 300px', maxWidth: '500px' }}>
                    <h2 style={{ color: '#5b0f0f', marginBottom: '20px' }}>तपाईंको सम्पर्क जानकारी</h2>
                    <p style={{ marginBottom: '15px' }}><i className="fas fa-map-marker-alt" style={{ color: '#d4af37', marginRight: '10px' }}></i> पाटन, ललितपुर, नेपाल</p>
                    <p style={{ marginBottom: '15px' }}><i className="fas fa-phone" style={{ color: '#d4af37', marginRight: '10px' }}></i> +९७७-९८४१२३४५६७</p>
                    <p style={{ marginBottom: '15px' }}><i className="fas fa-envelope" style={{ color: '#d4af37', marginRight: '10px' }}></i> haratimaa@gmail.com</p>
                    <p style={{ marginBottom: '15px' }}><i className="fas fa-clock" style={{ color: '#d4af37', marginRight: '10px' }}></i> खुल्ला: बिहान १० - बेलुका ७ बजे</p>
                </div>

                <div className="contact-form" style={{ flex: '1 1 300px', maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <form>
                        <input type="text" placeholder="नाम" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                        <input type="email" placeholder="इमेल" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                        <textarea placeholder="सन्देश" rows="5" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }}></textarea>
                        <button type="submit" className="add-booking-btn" style={{ width: '100%' }}>पठाउनुहोस्</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
