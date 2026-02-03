import React from 'react';
import { Link } from 'react-router-dom';

const MoreInfo = () => {
    return (
        <main className="more-info-page">
            <section className="hero fullwidth" style={{ height: '45vh' }}>
                <img src="/img/about/jewellery.jpg" alt="More Information" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>More About Our Shop & Owner</h1>
                    <p>History · Vision · Dedication</p>
                </div>
            </section>

            <section className="product-section fullwidth" style={{ backgroundColor: '#fff' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left', padding: '0 20px' }}>

                    {/* OWNER SECTION */}
                    <div style={{ marginBottom: '50px', padding: '30px', background: 'var(--bg-cream)', borderRadius: '20px', borderLeft: '5px solid var(--premium-gold)' }}>
                        <h3 style={{ color: 'var(--primary-maroon)', marginBottom: '15px', fontSize: '24px' }}>
                            👑 Owner: Mr. Chhatra Ratna Shakya
                        </h3>
                        <p style={{ fontSize: '18px', color: 'var(--primary-maroon)', fontWeight: '500', marginBottom: '20px' }}>
                            Sub Owner: Ms. Reshma Shakya, with dedicated support from Mr. Sulav Shakya
                        </p>
                        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
                            The foundation of Harati Maa Jyasa Pasa is built upon the vision and hard work of the Shakya family,
                            dedicated to mastering traditional Newari gold craftsmanship. Their passion for precision, purity,
                            and meaningful designs has shaped the identity of this shop.
                        </p>
                        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', marginTop: '15px' }}>
                            Under their guidance, the shop continues to uphold trust, quality, and customer satisfaction,
                            ensuring each jewellery piece reflects authenticity and cultural heritage.
                        </p>
                    </div>

                    {/* HISTORY SECTION */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2 style={{ color: 'var(--primary-maroon)', fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            🏛 Our Shop History
                        </h2>
                        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
                            Established in 2062 B.S, Harati Maa Jyasa Pasa began as a small traditional workshop in Patan,
                            inspired by the rich Newari culture of metal craft. Over the years, the shop evolved into a
                            trusted jewellery house known for handcrafted artistry and premium gold designs.
                        </p>
                        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.8' }}>
                            Today, we proudly serve customers from across Nepal, offering everything from traditional
                            Newari patterns to contemporary wedding jewellery.
                        </p>
                    </div>

                    {/* SPECIALITY SECTION */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2 style={{ color: 'var(--primary-maroon)', fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            💛 What Makes Us Special
                        </h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {[
                                "100% purity assurance in every piece",
                                "Handcrafted by skilled Newari artisans",
                                "Designs rooted in heritage yet suitable for modern lifestyles",
                                "Decades of trust from families and generations",
                                "Personalized and custom jewellery services"
                            ].map((item, i) => (
                                <li key={i} style={{ fontSize: '18px', color: '#555', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--premium-gold)' }}>✔</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* GALLERY SECTION */}
                    <div style={{ marginBottom: '60px' }}>
                        <h2 style={{ color: 'var(--primary-maroon)', fontSize: '28px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            📸 Our Shop
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                            <img src="/img/about/shop.jpg" alt="Shop Interior" style={{ width: '100%', borderRadius: '15px', boxShadow: 'var(--shadow-premium)' }} />
                            <img src="/img/about/jewellery.jpg" alt="Jewellery Display" style={{ width: '100%', borderRadius: '15px', boxShadow: 'var(--shadow-premium)' }} />
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '40px' }}>
                        <Link to="/about" className="hero-btn" style={{ background: 'var(--primary-maroon)', color: '#fff' }}>
                            ⬅ Back to About Page
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MoreInfo;
