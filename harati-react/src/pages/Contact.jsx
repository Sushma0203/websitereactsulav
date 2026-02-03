import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Currently not working, please mail us. Thank you.');
        // Reset form or other logic if needed
        e.target.reset();
    };
    return (
        <main className="contact-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <img src="/img/bg.jpg" alt="Contact Us" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Contact Us / Send Your Design</h1>
                    <p>We're here to help you create your dream jewelry.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff', padding: '100px 40px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '60px' }}>

                    {/* CONTACT DETAILS */}
                    <div style={{ flex: '1 1 400px', maxWidth: '500px', textAlign: 'left' }}>
                        <h2 style={{ fontSize: '32px', color: 'var(--primary-maroon)', marginBottom: '30px' }}>Our Contact Details</h2>

                        <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '50px', height: '50px', background: 'var(--bg-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-maroon)', fontSize: '20px' }}>
                                📍
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '14px', opacity: 0.6, textTransform: 'uppercase' }}>Address</h4>
                                <p style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>Gabahal, Lalitpur</p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '50px', height: '50px', background: 'var(--bg-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-maroon)', fontSize: '20px' }}>
                                📞
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '14px', opacity: 0.6, textTransform: 'uppercase' }}>Phone</h4>
                                <p style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>9849102289</p>
                            </div>
                        </div>

                        <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '50px', height: '50px', background: 'var(--bg-cream)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-maroon)', fontSize: '20px' }}>
                                ✉
                            </div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '14px', opacity: 0.6, textTransform: 'uppercase' }}>Email</h4>
                                <p style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>haratimaajp@gmail.com</p>
                            </div>
                        </div>

                        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', background: 'var(--bg-cream)', padding: '25px', borderRadius: '20px', borderLeft: '4px solid var(--premium-gold)' }}>
                            You can send us your jewelry design ideas, screenshots, or custom requirements. Our experts will guide you personally.
                        </p>
                    </div>

                    {/* CONTACT FORM */}
                    <div style={{ flex: '1 1 400px', maxWidth: '540px', background: '#fff', padding: '50px', borderRadius: '30px', boxShadow: 'var(--shadow-premium)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                        <h3 style={{ fontSize: '24px', color: 'var(--primary-maroon)', marginBottom: '30px', textAlign: 'center' }}>Send a Message / Design</h3>
                        {message && (
                            <div style={{
                                padding: '15px',
                                background: '#d4edda',
                                color: '#155724',
                                border: '1px solid #c3e6cb',
                                borderRadius: '10px',
                                marginBottom: '20px',
                                textAlign: 'center'
                            }}>
                                {message}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '20px' }}>
                                <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                            </div>
                            <div style={{ marginBottom: '20px' }}>
                                <textarea placeholder="How can we help you? Describe your custom requirements..." rows="4" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }}></textarea>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--primary-maroon)' }}>
                                    Upload your design (Optional)
                                </label>
                                <input type="file" style={{ width: '100%', padding: '10px', border: '2px dashed var(--premium-gold)', borderRadius: '12px', background: 'rgba(197, 160, 89, 0.05)', cursor: 'pointer' }} />
                                <small style={{ display: 'block', marginTop: '5px', opacity: 0.6 }}>Supports JPG, PNG, PDF (Max 5MB)</small>
                            </div>

                            <button type="submit" className="add-booking-btn" style={{ padding: '18px' }}>Send Message</button>
                        </form>
                    </div>
                </div>

                {/* MAP SECTION */}
                <div style={{ maxWidth: '1200px', margin: '80px auto 0' }}>
                    <h2 style={{ fontSize: '28px', color: 'var(--primary-maroon)', marginBottom: '30px', textAlign: 'center' }}>Find Us In Patan</h2>
                    <div style={{ width: '100%', height: '450px', borderRadius: '30px', overflow: 'hidden', boxShadow: 'var(--shadow-premium)', border: '1px solid rgba(197, 160, 89, 0.1)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3639947816827!2d85.31828631435345!3d27.6751249828065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd7579698d%3A0xc3f5879a9539366e!2sGabahal%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1706950000000!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
