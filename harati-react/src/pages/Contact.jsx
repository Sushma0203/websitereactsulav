import React from 'react';

const Contact = () => {
    return (
        <main className="contact-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <div className="hero-overlay" style={{ background: 'var(--primary-maroon)' }}></div>
                <div className="hero-content">
                    <h1>Connect With Us</h1>
                    <p>We invite you to experience our collections in person.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px', padding: '100px 40px' }}>
                <div style={{ flex: '1 1 400px', maxWidth: '500px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '30px' }}>Atelier Details</h2>
                    <p style={{ marginBottom: '20px', fontSize: '18px' }}><i className="fas fa-map-marker-alt" style={{ color: 'var(--premium-gold)', marginRight: '15px' }}></i> Patan, Lalitpur, Nepal</p>
                    <p style={{ marginBottom: '20px', fontSize: '18px' }}><i className="fas fa-phone" style={{ color: 'var(--premium-gold)', marginRight: '15px' }}></i> +977-9841234567</p>
                    <p style={{ marginBottom: '20px', fontSize: '18px' }}><i className="fas fa-envelope" style={{ color: 'var(--premium-gold)', marginRight: '15px' }}></i> concierge@haratimaa.com</p>
                    <p style={{ marginBottom: '20px', fontSize: '18px' }}><i className="fas fa-clock" style={{ color: 'var(--premium-gold)', marginRight: '15px' }}></i> Boutique Hours: 10 AM - 7 PM</p>
                </div>

                <div style={{ flex: '1 1 400px', maxWidth: '540px', background: '#fff', padding: '50px', borderRadius: '30px', boxShadow: 'var(--shadow-premium)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                    <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>Direct Inquiry</h3>
                    <form>
                        <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                        <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                        <textarea placeholder="How may we assist you?" rows="5" style={{ width: '100%', padding: '15px', marginBottom: '30px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }}></textarea>
                        <button type="submit" className="add-booking-btn" style={{ padding: '18px' }}>Send Message</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
