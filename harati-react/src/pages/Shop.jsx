import React from 'react';
import { websiteData } from '../data/websiteData';

const Shop = () => {
    return (
        <main className="shop-page">
            <section className="hero fullwidth" style={{ height: '50vh' }}>
                <img src="/img/shop/necklace2.jpg" alt="Harati Collection" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Shop Our Designs</h1>
                    <p>Browse our full collection of handcrafted gold jewelry.</p>
                </div>
            </section>

            <section className="product-section section fullwidth" style={{ backgroundColor: '#fff' }}>
                <h2 className="section-title">Our Collection</h2>
                <div className="carousel">
                    {websiteData.products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} className="zoomable" alt={product.name} />
                            <h3>{product.name}</h3>
                            <span>{product.weight}</span>
                            <div className="price-note" style={{ marginBottom: '20px', fontSize: '14px', opacity: 0.7 }}>
                                *Pricing subject to daily market gold rate
                            </div>
                            <button className="add-booking-btn">View</button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Shop;
