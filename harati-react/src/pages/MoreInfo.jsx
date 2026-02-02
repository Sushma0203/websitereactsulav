import React from 'react';

const MoreInfo = () => {
    return (
        <main className="more-info-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <img src="/img/about/jewellery.jpg" alt="More Information" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>More Information</h1>
                    <p>Deep dive into our history and values.</p>
                </div>
            </section>

            <section className="product-section fullwidth" style={{ backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left', padding: '0 20px' }}>
                    <h2 className="section-title">Our Heritage & Commitment</h2>

                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '15px' }}>Generations of Trust</h3>
                        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
                            Harati Maa Jyasa Pasa has been a cornerstone of the Patan jewelry community for decades.
                            Our journey began with a simple promise: to provide the purest gold and the most intricate
                            handcrafted designs to our valued patrons.
                        </p>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '15px' }}>The Art of Craftsmanship</h3>
                        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
                            Every piece in our collection is a testament to the skill of our master artisans.
                            Combining ancient Newari techniques with modern aesthetics, we create jewelry that is
                            both a work of art and a symbol of prestige.
                        </p>
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '15px' }}>Quality Assurance</h3>
                        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
                            We strictly adhere to international standards of purity. Our gold is hallmark certified,
                            ensuring that every customer receives exactly what they pay for. Purity is not just a
                            standard for us; it is our identity.
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <a href="/contact" className="hero-btn">Visit Our Showroom</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MoreInfo;
