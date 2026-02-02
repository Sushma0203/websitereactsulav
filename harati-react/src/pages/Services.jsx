import React from 'react';

const Services = () => {
    const services = [
        { title: "Bespoke Jewelry Crafting", description: "Individually handcrafted masterpieces designed to your unique vision." },
        { title: "Artisanal Restoration", description: "Meticulous repair and preservation of your most cherished heirlooms." },
        { title: "Purity Certification", description: "Advanced gold testing technology ensuring 100% authentic purity." },
        { title: "Bridal Consultation", description: "Personalized styling and curation for weddings and regal occasions." }
    ];

    return (
        <main className="services-page">
            <section className="hero fullwidth" style={{ height: '50vh' }}>
                <img src="/img/home/necklace.jpg" alt="Harati Services" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Exceptional Services</h1>
                    <p>Dedicated to excellence and your complete satisfaction.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff' }}>
                <div className="carousel">
                    {services.map((service, index) => (
                        <div key={index} className="product-card" style={{ textAlign: 'center', padding: '40px' }}>
                            <h3 style={{ fontSize: '26px', marginBottom: '20px' }}>{service.title}</h3>
                            <p style={{ color: '#666', fontSize: '16px' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Services;
