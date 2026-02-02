import React from 'react';
import { websiteData } from '../data/websiteData';

const Home = () => {
    const { hero, products, categories, offers, testimonials } = websiteData;

    return (
        <main>
            {/* HERO */}
            <section className="hero fullwidth">
                <img src={hero.backgroundImage} alt="Harati Hero" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <p className="premium-subtitle">{hero.subtitle}</p>
                    <h1>{hero.title}</h1>
                    <p>{hero.location} | Dial: {hero.phone}</p>
                    <a href={hero.buttonLink} className="hero-btn">Explore Collection</a>
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="product-section fullwidth" id="products">
                <h2 className="section-title">Signature Collection</h2>
                <div className="carousel">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} className="zoomable" alt={product.name} />
                            <h3>{product.name}</h3>
                            <span>Weight: {product.weight}</span>
                            <div className="price-note" style={{ marginBottom: '20px', fontSize: '14px', opacity: 0.7 }}>
                                *Pricing subject to daily market gold rate
                            </div>
                            <button className="add-booking-btn">View</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="categories fullwidth" style={{ backgroundColor: '#fff' }}>
                <h2 className="section-title">Gifts of Elegance</h2>
                <div className="category-cards">
                    {categories.map((category, index) => (
                        <a key={index} href={category.link} className="category-card">
                            <img src={category.image} alt={category.name} />
                            <h3>{category.name}</h3>
                        </a>
                    ))}
                </div>
            </section>

            {/* SPECIAL OFFERS */}
            <section className="special-offers fullwidth">
                <h2 className="section-title">Seasonal Curations</h2>
                <div className="carousel">
                    {offers.map((offer, index) => (
                        <div key={index} className="product-card" style={{ textAlign: 'center' }}>
                            <img src={offer.image} className="zoomable" alt={offer.title} />
                            <h3 style={{ marginBottom: '0' }}>{offer.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="testimonials fullwidth" style={{ backgroundColor: 'var(--primary-maroon)', color: '#fff' }}>
                <h2 className="section-title" style={{ color: '#fff' }}>Client Chronicles</h2>
                <div className="carousel">
                    {testimonials.map((test, index) => (
                        <div key={index} className="testimonial-card">
                            <p>"{test.comment}"</p>
                            <span>— {test.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
