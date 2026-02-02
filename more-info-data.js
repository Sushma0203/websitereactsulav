// ================= MORE INFO PAGE DATA CONFIGURATION =================
// Update this file to change the page title, subtitle, description, and gallery

const moreInfoData = {
    title: "Established in 2007",
    subtitle: "A legacy of trust, purity, and craftsmanship",
    description: `
        <div class="owner-box">
            <h2>Our Story</h2>
            <h3>The Vision Behind Harati Maa Jyasa Pasa</h3>
            <p>
                Founded in 2007, Harati Maa Jyasa Pasa began with a simple mission: to provide the people of Lalitpur and beyond with jewelry that isn't just a commodity, but a piece of art. 
                With over 18 years of experience, we have grown to be one of the most trusted names in Gabahal, known for our uncompromising standards of purity and our ability to bring complex traditional designs to life.
            </p>
        </div>
        <p style="font-size: 17px; line-height: 1.8; margin-bottom: 25px;">
            We specialize in creating bespoke jewelry that celebrates life's most precious moments. Whether it's a traditional Nepali wedding set or a modern contemporary piece, our artisans pour their heart into every detail.
        </p>
    `,
    galleryImages: [
        "img/shop/shop1.jpg",
        "img/shop/shop2.jpg",
        "img/shop/shop3.jpg",
        "img/shop/shop4.jpg"
    ],
    // Fallback HTML if images aren't found in galleryImages array
    galleryHtml: `
        <div class="gallery-placeholder">
            <p>Our shop images showcasing our collection and craftsmanship.</p>
        </div>
    `
};
