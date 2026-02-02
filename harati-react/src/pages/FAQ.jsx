import React from 'react';

const FAQ = () => {
    const faqs = [
        { q: "तपाईंको सुन कति क्यारेटको हुन्छ?", a: "हामी २४ र २२ क्यारेटको शुद्ध सुनको गहनाहरू मात्र बनाउँछौं।" },
        { q: "के गहना अर्डरमा बनाउन सकिन्छ?", a: "हो, हामी तपाईंको आफ्नै डिजाइन वा रुचि अनुसार गहनाहरू अर्डरमा बनाउँछौं।" },
        { q: "के तपाईं पुरानो सुन साट्नुहुन्छ?", a: "हो, हामी हालको बजार दर अनुसार पुरानो सुन साट्ने वा खरिद गर्ने सुविधा प्रदान गर्दछौं।" },
        { q: "पसल कति बजेसम्म खुल्ला रहन्छ?", a: "हाम्रो पसल बिहान १० बजेदेखि साँझ ७ बजेसम्म सातै दिन खुल्ला रहन्छ।" }
    ];

    return (
        <main className="faq-page">
            <section className="faq-hero hero fullwidth">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>सोधिएका प्रश्नहरू (FAQ)</h1>
                    <p>तपाईंका केही जिज्ञासाहरूका उत्तरहरू यहाँ पाउन सक्नुहुन्छ।</p>
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
