import React from 'react';

const Services = () => {
    const services = [
        { title: "Jewelry Making", description: "New jewelry is made to order according to your interest." },
        { title: "Repair & Maintenance", description: "Efficient repair of old and damaged jewelry." },
        { title: "Gold Testing", description: "Purity of gold is tested using state-of-the-art technology." },
        { title: "Design Consultation", description: "Assisting in jewelry selection for weddings and special occasions." }
    ];

    return (
        <main className="services-page">
            <section className="services-hero hero fullwidth">
                <img src="/img/home/necklace.jpg" alt="Services BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Our Services</h1>
                    <p>We guarantee quality service and complete satisfaction.</p>
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
