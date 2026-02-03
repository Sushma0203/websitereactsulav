import React, { useState } from 'react';
import { websiteData } from '../data/websiteData';
import ImageModal from '../components/ImageModal';

const Shop = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filters, setFilters] = useState({
        category: 'All Categories',
        metal: 'All Metals',
        purity: 'All',
        minPrice: '',
        maxPrice: ''
    });
    const [activeFilters, setActiveFilters] = useState({ ...filters });

    const handleOpenModal = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        setActiveFilters({ ...filters });
    };

    const clearFilters = () => {
        const initial = {
            category: 'All Categories',
            metal: 'All Metals',
            purity: 'All',
            minPrice: '',
            maxPrice: ''
        };
        setFilters(initial);
        setActiveFilters(initial);
    };

    const filteredProducts = websiteData.products.filter(product => {
        const catMatch = activeFilters.category === 'All Categories' || product.category === activeFilters.category;
        const metalMatch = activeFilters.metal === 'All Metals' || product.metal === activeFilters.metal;
        const purityMatch = activeFilters.purity === 'All' || product.purity === activeFilters.purity;
        const minPriceMatch = activeFilters.minPrice === '' || product.price >= parseFloat(activeFilters.minPrice);
        const maxPriceMatch = activeFilters.maxPrice === '' || product.price <= parseFloat(activeFilters.maxPrice);

        return catMatch && metalMatch && purityMatch && minPriceMatch && maxPriceMatch;
    });

    return (
        <main className="shop-page">
            <section className="hero fullwidth" style={{ height: '40vh' }}>
                <img src="/img/shop/necklace2.jpg" alt="Harati Collection" className="bg-img" />
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Shop Our Designs</h1>
                    <p>Browse our full collection of handcrafted gold jewelry.</p>
                </div>
            </section>

            <div className="shop-container">
                {/* FILTER SIDEBAR */}
                <aside className="filter-sidebar">
                    <div className="filter-group">
                        <h3>Category</h3>
                        <select name="category" value={filters.category} onChange={handleFilterChange}>
                            <option>All Categories</option>
                            <option>Rings</option>
                            <option>Necklaces</option>
                            <option>Bracelets</option>
                            <option>Earrings</option>
                            <option>Chains</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Metal Type</h3>
                        <select name="metal" value={filters.metal} onChange={handleFilterChange}>
                            <option>All Metals</option>
                            <option>Gold</option>
                            <option>Silver</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Purity</h3>
                        <select name="purity" value={filters.purity} onChange={handleFilterChange}>
                            <option value="All">All Purity</option>
                            <option>24K Gold</option>
                            <option>22K Gold</option>
                            <option>Sterling Silver (925)</option>
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Price Range</h3>
                        <div className="price-inputs">
                            <input
                                type="number"
                                name="minPrice"
                                placeholder="Min"
                                value={filters.minPrice}
                                onChange={handleFilterChange}
                            />
                            <span>-</span>
                            <input
                                type="number"
                                name="maxPrice"
                                placeholder="Max"
                                value={filters.maxPrice}
                                onChange={handleFilterChange}
                            />
                        </div>
                    </div>

                    <div className="filter-actions">
                        <button className="apply-btn" onClick={applyFilters}>Apply Filters</button>
                        <button className="clear-btn" onClick={clearFilters}>Clear All</button>
                    </div>
                </aside>

                {/* PRODUCT LIST */}
                <section className="product-display">
                    <div className="carousel">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} className="zoomable" alt={product.name} />
                                <h3>{product.name}</h3>
                                <div style={{ marginBottom: '10px' }}>
                                    <span style={{ fontSize: '14px', color: '#777' }}>{product.category} | {product.purity}</span>
                                </div>
                                <span>{product.weight}</span>
                                <div className="price-note" style={{ marginBottom: '20px', fontSize: '14px', opacity: 0.7 }}>
                                    *Pricing subject to daily market gold rate
                                </div>
                                <button className="add-booking-btn" onClick={() => handleOpenModal(product.image)}>View</button>
                            </div>
                        ))}
                        {filteredProducts.length === 0 && (
                            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '50px' }}>
                                <h3>No products found matching your filters.</h3>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <ImageModal
                isOpen={!!selectedImage}
                imageSrc={selectedImage}
                onClose={handleCloseModal}
            />
        </main>
    );
};

export default Shop;
