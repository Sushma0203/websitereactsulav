import React from 'react';

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
                    <p style={{ fontSize: '20px', color: '#555', maxWidth: '800px', margin: '0 auto 50px' }}>
                        Nestled in the cultural heart of Patan, we are more than just a jewelry shop. We are custodians of a
                        heritage where every piece tells a story of devotion, purity, and unparalleled craftsmanship.
                    </p>

                    <div className="carousel">
                        <div className="product-card" style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
                            <img src="/img/about/crafting.jpg" alt="Artistry" style={{ height: '220px' }} />
                            <h3 style={{ fontSize: '22px' }}>Exquisite Artistry</h3>
                            <p style={{ fontSize: '15px', color: '#777' }}>Master artisans handcrafting every detail with precision.</p>
                        </div>
                        <div className="product-card" style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
                            <img src="/img/about/quality.jpeg" alt="Purity" style={{ height: '220px' }} />
                            <h3 style={{ fontSize: '22px' }}>Guaranteed Purity</h3>
                            <p style={{ fontSize: '15px', color: '#777' }}>Ensuring 100% authenticity in every gram of gold.</p>
                        </div>
                        <div className="product-card" style={{ boxShadow: 'none', border: 'none', background: 'transparent' }}>
                            <img src="/img/about/service.png" alt="Heritage" style={{ height: '220px' }} />
                            <h3 style={{ fontSize: '22px' }}>Ancestral Trust</h3>
                            <p style={{ fontSize: '15px', color: '#777' }}>A legacy built on trust and relationships over decades.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
