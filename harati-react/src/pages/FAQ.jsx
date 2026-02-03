import React from 'react';

const FAQ = () => {
    const featuredFaqs = [
        {
            q: "How do I sell my gold?",
            a: "Bring your gold to our shop. We test purity, weigh it, and offer the best current market price."
        },
        {
            q: "Do you make custom jewelry?",
            a: "Yes, our master jewelers create personalized designs tailored to your taste and budget."
        },
        {
            q: "Can I book an appointment?",
            a: "Yes, appointments can be booked via phone, email, or our website."
        }
    ];

    const allQuestions = [
        { q: "How long does jewelry appraisal take?", a: "The appraisal process typically takes 15-30 minutes depending on the number of items and their complexity." },
        { q: "Do you buy old or broken gold jewelry?", a: "Yes, we accept old or broken gold jewelry for exchange or buyback based on the purity and weight." },
        { q: "How is the gold price calculated?", a: "Gold price is calculated based on the current market rate, purity (karat), and weight of the item." },
        { q: "Is the making charge refundable?", a: "Making charges are generally not refundable as they cover the labor and craftsmanship involved in creating the piece." },
        { q: "Do you provide repair services?", a: "Yes, we provide professional repair, cleaning, and restoration services for all types of gold jewelry." },
        { q: "How long does it take to make custom jewelry?", a: "Custom jewelry typically takes 10-15 business days, depending on the intricacy of the design." },
        { q: "What payment methods do you accept?", a: "We accept Cash, QR Payments (eSewa, Khalti, Fonepay), and Bank Transfers." },
        { q: "Is advance booking required for custom orders?", a: "While not mandatory, we recommend booking a consultation to ensure our designer is available to discuss your requirements." },
        { q: "Can I redesign my old jewelry?", a: "Absolutely! We specialize in transforming your old gold jewelry into stunning modern designs." },
        { q: "Do you provide gold purity testing?", a: "Yes, we use advanced testing methods to provide accurate purity reports for your gold items." }
    ];

    return (
        <main className="faq-page">
            <section className="hero fullwidth" style={{ height: '45vh' }}>
                <img src="/img/about/jewellery.jpg" alt="FAQ" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Frequently Asked Questions</h1>
                    <p>Everything you need to know about our gold & jewelry services</p>
                </div>
            </section>

            <section className="product-section fullwidth" style={{ backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>

                    {/* FEATURED QUESTIONS */}
                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '28px', color: 'var(--primary-maroon)', marginBottom: '40px', textAlign: 'center' }}>
                            ⭐ Featured Questions
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            {featuredFaqs.map((faq, index) => (
                                <div key={index} style={{ padding: '30px', background: 'var(--bg-cream)', borderRadius: '20px', position: 'relative', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
                                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'var(--primary-maroon)', color: '#fff', padding: '4px 12px', fontSize: '10px', borderRadius: '50px', fontWeight: '700', letterSpacing: '1px' }}>FEATURED</span>
                                    <h3 style={{ marginTop: '20px', marginBottom: '15px', fontSize: '18px' }}>{faq.q}</h3>
                                    <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ALL QUESTIONS */}
                    <div>
                        <h2 style={{ fontSize: '28px', color: 'var(--primary-maroon)', marginBottom: '40px', textAlign: 'center' }}>
                            All Questions
                        </h2>
                        <div style={{ background: '#fff' }}>
                            {allQuestions.map((faq, index) => (
                                <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
                                    <details style={{ cursor: 'pointer' }}>
                                        <summary style={{ fontSize: '18px', fontWeight: '600', color: 'var(--primary-maroon)', padding: '10px 0', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            {faq.q}
                                            <span style={{ color: 'var(--premium-gold)', fontSize: '20px' }}>+</span>
                                        </summary>
                                        <div style={{ padding: '15px 20px', color: '#666', lineHeight: '1.7', background: '#fcfcfc', borderRadius: '10px', marginTop: '10px' }}>
                                            {faq.a}
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default FAQ;
