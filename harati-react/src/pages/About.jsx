import React from 'react';

const About = () => {
    return (
        <main className="about-page">
            <section className="about-hero hero fullwidth">
                <img src="/img/about/about-us.jpg" alt="About BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>हाम्रो बारेमा</h1>
                    <p>हामी परम्परागत कला र आधुनिकताको संगम हौं।</p>
                </div>
            </section>

            <section className="about-content">
                <div className="about-inner">
                    <img src="/img/about/shop.jpg" alt="Shop" style={{ width: '100%', borderRadius: '15px', marginBottom: '30px' }} />
                    <h2>हात्ती मा ज्यासा पस को कथा</h2>
                    <p>
                        हामी पाटनको मध्यभागमा अवस्थित वर्षौंदेखिको विश्वासिलो सुन पसल हौं। हाम्रा प्रत्येक गहनाहरूमा
                        नेपाली संस्कृति र कलाको झल्को पाइन्छ। हामी शुद्धता र गुणस्तरमा कहिल्यै सम्झौता गर्दैनौं।
                    </p>
                    <div className="about-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
                        <div className="feature">
                            <img src="/img/about/crafting.jpg" alt="Crafting" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h3>उत्कृष्ट कला</h3>
                        </div>
                        <div className="feature">
                            <img src="/img/about/quality.jpeg" alt="Quality" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h3>१००% शुद्धता</h3>
                        </div>
                        <div className="feature">
                            <img src="/img/about/service.png" alt="Service" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' }} />
                            <h3>पुस्तौंदेखिको विश्वास</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
