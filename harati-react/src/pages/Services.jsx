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
                <div className="services-container">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Services;
