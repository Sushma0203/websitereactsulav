import React from 'react';
import { websiteData } from '../data/websiteData';

const Shop = () => {
    return (
        <main className="shop-page">
            <section className="shop-hero hero fullwidth">
                <img src="https://images.unsplash.com/photo-1630030538573-ce972bcb6020?q=80&w=1974&auto=format&fit=crop" alt="Shop BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>हाम्रो पसल</h1>
                    <p>उत्कृष्ट गहनाहरूको संग्रह</p>
                </div>
            </section>

            <section className="product-grid section fullwidth">
                <h2 className="section-title">सबै गहनाहरू</h2>
                <div className="carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {websiteData.products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} className="zoomable" alt={product.name} />
                            <h3>{product.name}</h3>
                            <span>तौल: {product.weight}</span>
                            <div className="price-note">*अन्तिम मूल्य दैनिक सुनको दरमा आधारित हुनेछ</div>
                            <button className="add-booking-btn">बुकिङको लागि थप्नुहोस्</button>
                        </div>
                    ))}
                    {/* Placeholder products to fill the grid */}
                    <div className="product-card">
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop" className="zoomable" alt="नयाँ डिजाइन" />
                        <h3>सुनको औंठी</h3>
                        <span>तौल: १ तोला</span>
                        <div className="price-note">*अन्तिम मूल्य दैनिक सुनको दरमा आधारित हुनेछ</div>
                        <button className="add-booking-btn">बुकिङको लागि थप्नुहोस्</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Shop;
