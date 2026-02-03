import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Gold Buying & Selling",
            description: "We provide fair gold exchange rates for buying and selling your gold. Transparent and trusted service for all our customers.",
            icon: "fas fa-exchange-alt"
        },
        {
            title: "Jewelry Customization",
            description: "Create your dream jewelry with our custom design services. Bring your vision to life with expert craftsmanship.",
            icon: "fas fa-pencil-ruler"
        },
        {
            title: "Valuation & Appraisal",
            description: "Get accurate gold and jewelry appraisals by certified experts. Ensure you know the true value of your assets.",
            icon: "fas fa-balance-scale"
        },
        {
            title: "Secure Transactions",
            description: "Every transaction is secured and transparent. Your trust is our top priority, providing complete peace of mind.",
            icon: "fas fa-shield-alt"
        },
        {
            title: "Insurance & Protection",
            description: "We provide insurance options for valuable jewelry, ensuring your investment is fully protected.",
            icon: "fas fa-file-contract"
        },
        {
            title: "Customer Support",
            description: "Our dedicated support team is always available to help you with queries and personalized advice.",
            icon: "fas fa-headset"
        },
        {
            title: "Certified Products",
            description: "All our products come with authenticity certificates to guarantee genuine gold and craftsmanship.",
            icon: "fas fa-certificate"
        },
        {
            title: "Exclusive Collections",
            description: "Explore our premium and limited edition collections for unique, handcrafted jewelry pieces.",
            icon: "fas fa-gem"
        }
    ];

    return (
        <main className="services-page">
            <section className="hero fullwidth" style={{ height: '45vh' }}>
                <img src="/img/home/necklace.jpg" alt="Harati Services" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Our Premium Services</h1>
                    <p>Dedicated to excellence and your complete satisfaction.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', padding: '0 20px' }}>
                    {services.map((service, index) => (
                        <div key={index} className="service-card" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: '#fff',
                            borderRadius: '20px',
                            boxShadow: 'var(--shadow-premium)',
                            border: '1px solid rgba(197, 160, 89, 0.15)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: 'var(--bg-cream)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                color: 'var(--primary-maroon)',
                                fontSize: '28px'
                            }}>
                                <i className={service.icon}></i>
                            </div>
                            <h3 style={{ fontSize: '22px', marginBottom: '15px', color: 'var(--primary-maroon)' }}>{service.title}</h3>
                            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Services;
