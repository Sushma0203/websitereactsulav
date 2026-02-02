import React from 'react';
import { websiteData } from '../data/websiteData';

const Reviews = () => {
    return (
        <main className="reviews-page">
            <section className="reviews-hero hero fullwidth">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Customer Reviews</h1>
                    <p>See what our valued customers have to say.</p>
                </div>
            </section>

            <section className="reviews-content section fullwidth" style={{ padding: '40px 20px' }}>
                <div className="testimonial-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
                    {websiteData.testimonials.map((test, index) => (
                        <div key={index} className="testimonial-card" style={{ width: 'auto' }}>
                            <p>"{test.comment}"</p>
                            <span>- {test.name}</span>
                        </div>
                    ))}
                    {/* Placeholder review */}
                    <div className="testimonial-card" style={{ width: 'auto' }}>
                        <p>"The best jewelry designs in Patan can be found here."</p>
                        <span>- Sunil Shakya</span>
                    </div>
                </div>

                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <h2 style={{ color: '#5b0f0f', marginBottom: '20px' }}>Leave Your Feedback</h2>
                    <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '30px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                        <form>
                            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }} />
                            <textarea placeholder="Feedback" rows="4" style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '8px' }}></textarea>
                            <button type="submit" className="add-booking-btn" style={{ width: '100%' }}>Send Feedback</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Reviews;
