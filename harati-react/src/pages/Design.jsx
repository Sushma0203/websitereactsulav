import React from 'react';

const Design = () => {
    const designs = [
        { title: "Lalitpur Traditional Necklace", image: "/img/shop/necklace1.jpg" },
        { title: "Contemporary Gold Band", image: "/img/shop/ring1.jpg" },
        { title: "Regal Bridal Suite", image: "/img/shop/necklace4.jpg" },
        { title: "Minimalist Gold Tops", image: "/img/shop/earring1.jpg" }
    ];

    return (
        <main className="design-page">
            <section className="hero fullwidth" style={{ height: '50vh' }}>
                <img src="/img/designs.jpg" alt="Our Atelier" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>The Design Portfolio</h1>
                    <p>Experience the intersection of traditional heritage and modern luxury.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff' }}>
                <div className="carousel">
                    {designs.map((design, index) => (
                        <div key={index} className="product-card">
                            <img src={design.image} alt={design.title} style={{ height: '280px' }} />
                            <h3>{design.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Design;
