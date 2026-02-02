import React from 'react';

const Contact = () => {
    return (
        <main className="contact-page">
            <section className="contact-hero hero fullwidth">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Contact Us</h1>
                    <p>Call us or visit our shop directly.</p>
                </div>
            </section>

            <section className="contact-content section fullwidth" style={{ padding: '40px 20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                <div className="contact-info" style={{ flex: '1 1 300px', maxWidth: '500px' }}>
                    <h2 style={{ color: '#5b0f0f', marginBottom: '20px' }}>Contact Information</h2>
                    <p style={{ marginBottom: '15px' }}><i className="fas fa-map-marker-alt" style={{ color: '#d4af37', marginRight: '10px' }}></i> Patan, Lalitpur, Nepal</p>
                    <p style={{ marginBottom: '15px' }}><i className="fas fa-phone" style={{ color: '#d4af37', marginRight: '10px' }}></i> +977-9841234567</p>
                    <p style={{ marginBottom: '15px' }}><i className="fas fa-envelope" style={{ color: '#d4af37', marginRight: '10px' }}></i> haratimaa@gmail.com</p>
                    <p style={{ marginBottom: '15px' }}><i className="fas fa-clock" style={{ color: '#d4af37', marginRight: '10px' }}></i> Open: 10 AM - 7 PM</p>
                </div>

                <div className="contact-form" style={{ flex: '1 1 300px', maxWidth: '500px', background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <form>
                        <input type="text" placeholder="Name" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                        <input type="email" placeholder="Email" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                        <textarea placeholder="Message" rows="5" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }}></textarea>
                        <button type="submit" className="add-booking-btn" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
