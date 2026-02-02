import React from 'react';

const FAQ = () => {
    const faqs = [
        { q: "How pure is your gold?", a: "We use 24K and 22K gold to make sure it is of the highest quality." },
        { q: "Can I order custom designs?", a: "Yes, our skilled artists can make custom designs based on your ideas." },
        { q: "Can I exchange or upgrade my jewelry?", a: "We offer good rates if you want to trade or upgrade your certified gold jewelry." },
        { q: "What are your shop's opening hours?", a: "Our shop is open every day from 10:00 AM to 7:00 PM." }
    ];

    return (
        <main className="faq-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <div className="hero-overlay" style={{ background: 'var(--primary-maroon)' }}></div>
                <div className="hero-content">
                    <h1>Help & Support</h1>
                    <p>Common questions and answers.</p>
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
