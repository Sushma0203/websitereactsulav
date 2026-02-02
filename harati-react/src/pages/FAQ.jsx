import React from 'react';

const FAQ = () => {
    const faqs = [
        { q: "What karat is your gold?", a: "We only make 24 and 22 karat pure gold jewelry." },
        { q: "Can jewelry be made to order?", a: "Yes, we make jewelry according to your own design or interest." },
        { q: "Do you exchange old gold?", a: "Yes, we provide the facility for exchanging or purchasing old gold according to the current market rate." },
        { q: "What time is the shop open?", a: "Our shop is open seven days a week from 10 am to 7 pm." }
    ];

    return (
        <main className="faq-page">
            <section className="faq-hero hero fullwidth">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Frequently Asked Questions (FAQ)</h1>
                    <p>You can find answers to some of your questions here.</p>
                </div>
            </section>

            <section className="faq-content section fullwidth" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
                {faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: '25px', padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: '#5b0f0f', marginBottom: '10px' }}>Q: {faq.q}</h3>
                        <p style={{ color: '#555', borderLeft: '3px solid #d4af37', paddingLeft: '15px' }}>A: {faq.a}</p>
                    </div>
                ))}
            </section>
        </main>
    );
};

export default FAQ;
