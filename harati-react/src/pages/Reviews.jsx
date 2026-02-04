import React, { useState } from 'react';

const Reviews = () => {
    const [message, setMessage] = useState('');

    const handleButtonClick = () => {
        setMessage('Currently not working, please mail us. Thank you.');
    };
    const pastReviews = [
        {
            name: "Shanta Kumar Thapa",
            rating: 5,
            comment: "They really helped me get my custome design in flexible price. Thank you for amazing service",
            date: "Jan 11, 2026"
        },
        {
            name: "Aayush Shakya",
            rating: 5,
            comment: "Been a regular customer since year always a pleasant experience to do business here.",
            date: "Jan 11, 2026"
        },
        {
            name: "Anjeela Magar",
            rating: 5,
            comment: "Really an amazing shopping experience here.",
            date: "Jan 11, 2026"
        },
        {
            name: "Sulav Shakya",
            rating: 5,
            comment: "Really great service and owner were really friendly",
            date: "Dec 29, 2025"
        },
        {
            name: "Sushma Thapa",
            rating: 5,
            comment: "amazing",
            date: "Dec 29, 2025"
        },
        {
            name: "Jenisha Mulmi",
            rating: 5,
            comment: "an amazing business with mr sulav , he was really kind and helped me a lot",
            date: "Jan 25, 2026"
        }
    ];

    return (
        <main className="reviews-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <img src="/img/bg.jpg" alt="Customer Reviews" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Customer Reviews</h1>
                    <p>What our valued patrons say about us.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff', padding: '100px 20px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                    {/* SUBMIT REVIEW SECTION */}
                    <div style={{ marginBottom: '80px', textAlign: 'center' }}>
                        <h2 className="section-title">Share Your Experience</h2>
                        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--bg-cream)', padding: '40px', borderRadius: '30px', boxShadow: 'var(--shadow-premium)', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
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
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '12px', background: '#fff', fontFamily: 'inherit' }} />
                                <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>Your Rating</label>
                                    <div style={{ display: 'flex', gap: '5px', fontSize: '24px', color: 'var(--premium-gold)' }}>
                                        {[...Array(5)].map((_, i) => <span key={i} style={{ cursor: 'pointer' }}>⭐</span>)}
                                    </div>
                                </div>
                                <textarea placeholder="Write your review here..." rows="4" style={{ width: '100%', padding: '15px', marginBottom: '30px', border: '1px solid #ddd', borderRadius: '12px', background: '#fff', fontFamily: 'inherit' }}></textarea>
                                <button type="button" onClick={handleButtonClick} className="add-booking-btn" style={{ padding: '18px' }}>Submit Review</button>
                            </form>
                        </div>
                    </div>

                    {/* PAST REVIEWS SECTION */}
                    <div>
                        <h2 style={{ fontSize: '32px', color: 'var(--primary-maroon)', marginBottom: '40px', textAlign: 'center' }}>Past Reviews</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            {pastReviews.map((review, index) => (
                                <div key={index} className="review-card">
                                    <h3 style={{ fontSize: '20px', marginBottom: '5px', color: 'var(--primary-maroon)' }}>{review.name}</h3>
                                    <div className="review-stars">
                                        {[...Array(review.rating)].map((_, i) => <span key={i}>⭐ </span>)}
                                    </div>
                                    <p style={{ color: '#555', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px' }}>
                                        "{review.comment}"
                                    </p>
                                    <span style={{ fontSize: '13px', opacity: 0.5, fontWeight: '600' }}>{review.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Reviews;
