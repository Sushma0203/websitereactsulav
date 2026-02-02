import React from 'react';
import { websiteData } from '../data/websiteData';

const Shop = () => {
    return (
        <main className="shop-page">
            <section className="shop-hero hero fullwidth">
                <img src="/img/shop/necklace2.jpg" alt="Shop BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Our Shop</h1>
                    <p>Collection of Exquisite Jewelry</p>
                </div>
            </section>

            <section className="product-grid section fullwidth">
                <h2 className="section-title">All Jewelry</h2>
                <div className="carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {websiteData.products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} className="zoomable" alt={product.name} />
                            <h3>{product.name}</h3>
                            <span>Weight: {product.weight}</span>
                            <div className="price-note">*Final price based on daily gold rate</div>
                            <button className="add-booking-btn">Add for Booking</button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Shop;
