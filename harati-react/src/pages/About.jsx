import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main className="about-page">
            <section className="hero fullwidth">
                <img src="/img/about/about-us.jpg" alt="Harati Craftsmanship" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Our Legacy</h1>
                    <p>Fusing timeless tradition with contemporary elegance since generations.</p>
                </div>
            </section>

            <section className="product-section fullwidth" style={{ backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 className="section-title">The Story of Harati Maa</h2>
                    <img src="/img/about/shop.jpg" alt="Our Atelier" style={{ width: '100%', borderRadius: '30px', marginBottom: '50px', boxShadow: 'var(--shadow-premium)' }} />

                    <div style={{ textAlign: 'left', maxWidth: '850px', margin: '0 auto 60px' }}>
                        <p style={{ fontSize: '20px', color: '#555', marginBottom: '25px', lineHeight: '1.8' }}>
                            Welcome to Harati Maa Jyasa Pasa, a trusted name in handcrafted gold jewellery located in the heart of Patan.
                            We blend Nepal’s rich Newari heritage with modern artistry to create jewellery that lasts a lifetime.
                        </p>
                        <p style={{ fontSize: '20px', color: '#555', marginBottom: '25px', lineHeight: '1.8' }}>
                            For generations, our craftsmen have delivered purity, elegance, and authenticity.
                            Each design reflects culture, devotion, and precision.
                        </p>
                        <p style={{ fontSize: '20px', color: '#555', marginBottom: '35px', lineHeight: '1.8' }}>
                            Jewellery for us is not just an emotion. From weddings to daily wear, we promise trust, quality, and satisfaction.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                            <div style={{ padding: '20px', background: 'var(--bg-cream)', borderRadius: '15px', fontWeight: '600', color: 'var(--primary-maroon)' }}>Premium Craftsmanship</div>
                            <div style={{ padding: '20px', background: 'var(--bg-cream)', borderRadius: '15px', fontWeight: '600', color: 'var(--primary-maroon)' }}>100% Purity Guaranteed</div>
                            <div style={{ padding: '20px', background: 'var(--bg-cream)', borderRadius: '15px', fontWeight: '600', color: 'var(--primary-maroon)' }}>Trusted by Generations</div>
                        </div>
                    </div>

                    <div className="carousel">
                        <div className="product-card" style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
                            <img src="/img/about/quality.jpeg" alt="Premium Quality" style={{ height: '220px' }} />
                            <h3 style={{ fontSize: '22px' }}>Premium Quality</h3>
                            <p style={{ fontSize: '15px', color: '#777' }}>Finest gold and gemstones ensuring brilliance and durability.</p>
                        </div>
                        <div className="product-card" style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
                            <img src="/img/about/crafting.jpg" alt="Exclusive Designs" style={{ height: '220px' }} />
                            <h3 style={{ fontSize: '22px' }}>Exclusive Designs</h3>
                            <p style={{ fontSize: '15px', color: '#777' }}>Traditional Newari and modern jewellery crafted with care.</p>
                        </div>
                        <div className="product-card" style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
                            <img src="/img/about/service.png" alt="Personalized Service" style={{ height: '220px' }} />
                            <h3 style={{ fontSize: '22px' }}>Personalized Service</h3>
                            <p style={{ fontSize: '15px', color: '#777' }}>We guide you personally to find your perfect jewellery.</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '50px' }}>
                        <Link to="/more-info" className="hero-btn">More About Owner & Shop</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
