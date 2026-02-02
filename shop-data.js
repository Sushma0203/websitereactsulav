// ================= SHOP PAGE DATA CONFIGURATION =================
// Update this file to manage categories, metals, and products

const shopData = {
    categories: [
        { id: 1, name: "Necklaces" },
        { id: 2, name: "Earrings" },
        { id: 3, name: "Rings" },
        { id: 4, name: "Bangles" },
        { id: 5, name: "Bridal Sets" }
    ],

    products: [
        {
            id: 1,
            name: "Traditional Gold Necklace",
            category: "Necklaces",
            metal_type: "Gold",
            purity: "24K",
            weight: "25.5 Tola",
            price: 150000,
            image: "img/product1.jpg"
        },
        {
            id: 2,
            name: "Designer Gold Earrings",
            category: "Earrings",
            metal_type: "Gold",
            purity: "22K",
            weight: "12.0 Tola",
            price: 75000,
            image: "img/product2.jpg"
        },
        {
            id: 3,
            name: "Sterling Silver Ring",
            category: "Rings",
            metal_type: "Silver",
            purity: "925",
            weight: "2.5 Tola",
            price: 5000,
            image: "img/product3.jpg"
        },
        {
            id: 4,
            name: "Modern Gold Bangles",
            category: "Bangles",
            metal_type: "Gold",
            purity: "24K",
            weight: "18.0 Tola",
            price: 110000,
            image: "img/product4.jpg"
        },
        {
            id: 5,
            name: "Royal Bridal Set",
            category: "Bridal Sets",
            metal_type: "Gold",
            purity: "24K",
            weight: "50.0 Tola",
            price: 350000,
            image: "img/product5.jpg"
        },
        {
            id: 6,
            name: "Floral Silver Earrings",
            category: "Earrings",
            metal_type: "Silver",
            purity: "925",
            weight: "5.0 Tola",
            price: null, // Price on Request
            image: "img/product6.jpg"
        }
    ]
};
