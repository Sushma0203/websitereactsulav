import React from 'react';
import { websiteData } from '../data/websiteData';

const Home = () => {
    const { hero, products, categories, offers, testimonials } = websiteData;

    return (
        <main>
            {/* HERO */}
            <section className="hero fullwidth">
                <img src={hero.backgroundImage} alt="Hero BG" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>{hero.title}</h1>
                    <p>{hero.subtitle}</p>
                    <p>{hero.location} | Call: {hero.phone}</p>
                    <a href={hero.buttonLink} className="hero-btn">{hero.buttonText}</a>
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="product-section fullwidth" id="products">
                <h2 className="section-title">प्रमुख उत्पादनहरू</h2>
                <div className="carousel">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} className="zoomable" alt={product.name} />
                            <h3>{product.name}</h3>
                            <span>तौल: {product.weight}</span>
                            <div className="price-note">*अन्तिम मूल्य दैनिक सुनको दरमा आधारित हुनेछ</div>
                            <button className="add-booking-btn">बुकिङको लागि थप्नुहोस्</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="categories fullwidth">
                <h2 className="section-title">कोटि अनुसार छनोट गर्नुहोस्</h2>
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
                <h2 className="section-title">विशेष अफरहरू</h2>
                <div className="offers">
                    {offers.map((offer, index) => (
                        <div key={index} className="offer-card">
                            <img src={offer.image} className="zoomable" alt={offer.title} />
                            <h3>{offer.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="testimonials fullwidth">
                <h2 className="section-title">ग्राहकहरूको भनाइ</h2>
                <div className="testimonial-cards">
                    {testimonials.map((test, index) => (
                        <div key={index} className="testimonial-card">
                            <p>"{test.comment}"</p>
                            <span>- {test.name}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
