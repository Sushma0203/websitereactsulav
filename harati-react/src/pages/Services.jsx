import React from 'react';
import { websiteData } from '../data/websiteData';

const Services = () => {
    const services = [
        { title: "गहना निर्माण", description: "तपाईंको रुचि अनुसारका नयाँ गहनाहरू अर्डरमा बनाइन्छ।" },
        { title: "मर्मत सम्भार", description: "पुराना र बिग्रिएका गहनाहरूको कुशल मर्मत गरिन्छ।" },
        { title: "सुन परीक्षण", description: "सुनको शुद्धता अत्याधुनिक प्रविधिबाट परीक्षण गरिन्छ।" },
        { title: "डिजाइन परामर्श", description: "विवाह र विशेष अवसरका लागि गहना छनोटमा सहयोग गरिन्छ।" }
    ];

    return (
        <main className="services-page">
            <section className="services-hero hero fullwidth">
                <img src="https://images.unsplash.com/photo-1599643478518-a744c5ff7efd?q=80&w=1974&auto=format&fit=crop" alt="Services BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>हाम्रा सेवाहरू</h1>
                    <p>हामी गुणस्तरीय सेवा र पूर्ण सन्तुष्टिको ग्यारेन्टी दिन्छौं।</p>
                </div>
            </section>

            <section className="services-list section fullwidth">
                <div className="service-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '2rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className="service-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px', border: '1px solid rgba(255,215,0,0.3)', textAlign: 'center' }}>
                            <h3 style={{ color: '#ffd700', marginBottom: '1rem' }}>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Services;
