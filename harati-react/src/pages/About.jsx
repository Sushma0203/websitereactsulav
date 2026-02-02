import React from 'react';
import { websiteData } from '../data/websiteData';

const About = () => {
    return (
        <main className="about-page">
            <section className="about-hero hero fullwidth">
                <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" alt="About BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>हाम्रो बारेमा</h1>
                    <p>हामी परम्परागत कला र आधुनिकताको संगम हौं।</p>
                </div>
            </section>

            <section className="about-content">
                <div className="about-inner">
                    <h2>हात्ती मा ज्यासा पस को कथा</h2>
                    <p>
                        हामी पाटनको मध्यभागमा अवस्थित वर्षौंदेखिको विश्वासिलो सुन पसल हौं। हाम्रा प्रत्येक गहनाहरूमा
                        नेपाली संस्कृति र कलाको झल्को पाइन्छ। हामी शुद्धता र गुणस्तरमा कहिल्यै सम्झौता गर्दैनौं।
                    </p>
                    <div className="about-features">
                        <div className="feature">
                            <i className="fas fa-gem"></i>
                            <h3>उत्कृष्ट कला</h3>
                        </div>
                        <div className="feature">
                            <i className="fas fa-certificate"></i>
                            <h3>१००% शुद्धता</h3>
                        </div>
                        <div className="feature">
                            <i className="fas fa-handshake"></i>
                            <h3>पुस्तौंदेखिको विश्वास</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
