import React from 'react';

const Design = () => {
    const designs = [
        { title: "न्युवारी परम्परागत हार", image: "/img/shop/necklace1.jpg" },
        { title: "आधुनिक सुनको औंठी", image: "/img/shop/ring1.jpg" },
        { title: "विवाह विशेष सेट", image: "/img/shop/necklace4.jpg" },
        { title: "सिम्पल टप्स", image: "/img/shop/earring1.jpg" }
    ];

    return (
        <main className="design-page">
            <section className="design-hero hero fullwidth">
                <img src="/img/designs.jpg" alt="Designs BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>हाम्रा डिजाइनहरू</h1>
                    <p>हाम्रा उत्कृष्ट र अद्वितीय गहनाका डिजाइनहरू यहाँ हेर्नुहोस्।</p>
                </div>
            </section>

            <section className="design-grid section fullwidth">
                <div className="category-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', padding: '2rem' }}>
                    {designs.map((design, index) => (
                        <div key={index} className="category-card" style={{ width: 'auto' }}>
                            <img src={design.image} alt={design.title} />
                            <h3>{design.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Design;
