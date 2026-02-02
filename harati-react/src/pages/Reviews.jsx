import React from 'react';
import { websiteData } from '../data/websiteData';

const Reviews = () => {
    return (
        <main className="reviews-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <div className="hero-overlay" style={{ background: 'var(--primary-maroon)' }}></div>
                <div className="hero-content">
                    <h1>Collector Chronicles</h1>
                    <p>Echoes of trust and satisfaction from our distinguished clientele.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff' }}>
                <div className="carousel">
                    {websiteData.testimonials.map((test, index) => (
                        <div key={index} className="testimonial-card">
                            <p>"{test.comment}"</p>
                            <span>— {test.name}</span>
                        </div>
                    ))}
                    <div className="testimonial-card">
                        <p>"The artisanal depth and service levels at Harati Maa are truly unmatched in Nepal."</p>
                        <span>— Sunil Shakya</span>
                    </div>
                </div>

                <div style={{ marginTop: '120px' }}>
                    <h2 className="section-title">Share Your Experience</h2>
                    <div style={{ maxWidth: '650px', margin: '0 auto', background: '#fff', padding: '60px', borderRadius: '30px', boxShadow: 'var(--shadow-premium)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                        <form>
                            <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }} />
                            <textarea placeholder="Your reflection..." rows="4" style={{ width: '100%', padding: '15px', marginBottom: '40px', border: '1px solid #eee', borderRadius: '12px', background: '#f9f9f9', fontFamily: 'inherit' }}></textarea>
                            <button type="submit" className="add-booking-btn" style={{ padding: '20px' }}>Publish Feedback</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Reviews;
