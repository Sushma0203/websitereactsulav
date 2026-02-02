import React from 'react';

const About = () => {
    return (
        <main className="about-page">
            <section className="about-hero hero fullwidth">
                <img src="/img/about/about-us.jpg" alt="About BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>About Us</h1>
                    <p>We are a blend of traditional craftsmanship and modern elegance.</p>
                </div>
            </section>

            <section className="about-content">
                <div className="about-inner">
                    <img src="/img/about/shop.jpg" alt="Shop" style={{ width: '100%', borderRadius: '15px', marginBottom: '30px' }} />
                    <h2>The Story of Harati Maa Jyasa Pasa</h2>
                    <p>
                        Located in the heart of Patan, we are a trusted jewelry shop with years of experience.
                        Each of our jewelry pieces reflects Nepali culture and art. We never compromise on purity and quality.
                    </p>
                    <div className="about-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
                        <div className="feature">
                            <img src="/img/about/crafting.jpg" alt="Crafting" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h3>Exquisite Art</h3>
                        </div>
                        <div className="feature">
                            <img src="/img/about/quality.jpeg" alt="Quality" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h3>100% Purity</h3>
                        </div>
                        <div className="feature">
                            <img src="/img/about/service.png" alt="Service" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h3>Trusted by Generations</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
