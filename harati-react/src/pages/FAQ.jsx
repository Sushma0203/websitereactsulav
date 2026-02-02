import React from 'react';

const FAQ = () => {
    const faqs = [
        { q: "What is the purity standard of your gold?", a: "We exclusively craft in 24K and 22K hallmarks to ensure the highest global standards of purity." },
        { q: "Do you accept custom design commissions?", a: "Yes, our master artisans specialize in bringing your personal visions to life through bespoke commissions." },
        { q: "Can I exchange or upgrade my existing jewelry?", a: "We offer competitive market rates for upgrades and exchanges of certified gold jewelry." },
        { q: "What are your atelier's operating hours?", a: "Our boutique is open daily from 10:00 AM to 7:00 PM for your convenience." }
    ];

    return (
        <main className="faq-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <div className="hero-overlay" style={{ background: 'var(--primary-maroon)' }}></div>
                <div className="hero-content">
                    <h1>Curated Assistance</h1>
                    <p>Find answers to your most frequent inquiries.</p>
                </div>
            </section>

            <section className="product-section fullwidth" style={{ maxWidth: '900px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: '30px', padding: '30px', background: '#fff', borderRadius: '20px', boxShadow: 'var(--shadow-premium)', textAlign: 'left' }}>
                        <h3 style={{ marginBottom: '15px' }}>{faq.q}</h3>
                        <p style={{ color: '#666', borderLeft: '3px solid var(--premium-gold)', paddingLeft: '20px' }}>{faq.a}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default FAQ;
