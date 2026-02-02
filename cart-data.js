// ================= CART PAGE DATA CONFIGURATION =================
// Update this file to manage cart items and pricing

const cartData = {
    // Current Metal Rates (per Tola)
    rates: {
        gold: 150000,  // Rs. per Tola
        silver: 1500   // Rs. per Tola
    },

    // Booking Fee
    bookingFee: 5000,

    // Payment Accounts (QR Codes)
    paymentAccounts: [
        {
            name: "Harati Jewellery - eSewa",
            qrImage: "img/qr/esewa-qr.png"
        },
        {
            name: "Harati Jewellery - Khalti",
            qrImage: "img/qr/khalti-qr.png"
        },
        {
            name: "Harati Jewellery - Bank",
            qrImage: "img/qr/bank-qr.png"
        }
    ],

    // Cart Items (this would typically come from localStorage or session)
    items: [
        {
            id: 1,
            name: "Traditional Gold Necklace",
            image: "img/product1.jpg",
            tola: 25,
            quantity: 1
        },
        {
            id: 2,
            name: "Designer Gold Earrings",
            image: "img/product2.jpg",
            tola: 12,
            quantity: 1
        }
        // Add more items as needed
    ]
};

// Cart Management Functions
const CartManager = {
    // Get cart from localStorage
    getCart: function () {
        const saved = localStorage.getItem('haratiCart');
        return saved ? JSON.parse(saved) : cartData.items;
    },

    // Save cart to localStorage
    saveCart: function (items) {
        localStorage.setItem('haratiCart', JSON.stringify(items));
    },

    // Add item to cart
    addItem: function (item) {
        const cart = this.getCart();
        const existing = cart.find(i => i.id === item.id);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        this.saveCart(cart);
        return cart;
    },

    // Remove item from cart
    removeItem: function (itemId) {
        let cart = this.getCart();
        cart = cart.filter(i => i.id !== itemId);
        this.saveCart(cart);
        return cart;
    },

    // Update quantity
    updateQuantity: function (itemId, quantity) {
        const cart = this.getCart();
        const item = cart.find(i => i.id === itemId);

        if (item && quantity > 0) {
            item.quantity = quantity;
            this.saveCart(cart);
        }

        return cart;
    },

    // Clear cart
    clearCart: function () {
        localStorage.removeItem('haratiCart');
        return [];
    },

    // Calculate item price
    calculateItemPrice: function (tola, quantity, goldRate) {
        return tola * quantity * goldRate;
    },

    // Calculate total
    calculateTotal: function (items, goldRate) {
        return items.reduce((total, item) => {
            return total + this.calculateItemPrice(item.tola, item.quantity, goldRate);
        }, 0);
    }
};
