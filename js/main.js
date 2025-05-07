// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Hero Slider
    initHeroSlider();
    
    // Load Categories
    loadCategories();
    
    // Load Products
    loadProducts();
    
    // Load Reviews
    loadReviews();
    
    // Load Value Cards
    loadValueCards();
    
    // Setup event listeners
    setupEventListeners();
});

function initHeroSlider() {
    const slider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideCount = slides.length;
    
    function goToSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }
    
    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
}

function loadCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    
    const categories = [
        {
            title: "Apparel",
            image: "images/apparel.png",
            subcategories: ["T-Shirts", "Hoodies", "Caps"]
        },
        {
            title: "Home Goods",
            image: "images/home-goods.png",
            subcategories: ["Mugs", "Pillows", "Wall Art"]
        },
        {
            title: "Accessories",
            image: "images/accessories.png",
            subcategories: ["Phone Cases", "Tote Bags", "Stickers"]
        }
    ];
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        categoryCard.innerHTML = `
            <div class="category-image">
                <img src="${category.image}" alt="${category.title}">
            </div>
            <h3 class="category-title">${category.title}</h3>
            <ul class="subcategories">
                ${category.subcategories.map(item => `<li><a href="#">${item}</a></li>`).join('')}
            </ul>
            <a class="btn btn-small" href="#">Explore ${category.title}</a>
        `;
        
        categoriesGrid.appendChild(categoryCard);
    });
}

function loadProducts() {
    const productsGrid = document.querySelector('.products-grid');
    
    const products = [
        {
            title: "Car Full Wrap",
            image: "images/car-wrap.png",
            price: "$299.99"
        },
        {
            title: "Device Skins",
            image: "images/device-skins.png",
            price: "$19.99"
        },
        {
            title: "Credit Card Skins",
            image: "images/credit-card.png",
            price: "$9.99"
        },
        {
            title: "Wall Art",
            image: "images/wall-art.png",
            price: "$49.99"
        }
    ];
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">${product.price}</p>
            <a class="cta-button" href="#">Shop Now</a>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

function loadReviews() {
    const reviewsGrid = document.querySelector('.reviews-grid');
    
    const reviews = [
        {
            user: "Marouane Dahbi",
            rating: "★★★★★",
            content: "I recently wrapped my car with Prints Masters, and I couldn't be happier with the results! The quality of the material is outstanding—it's durable, easy to work with, and has a flawless finish. The color options are vibrant and true to the online previews. Installation was straightforward thanks to the air-release technology, which made it simple to avoid bubbles and wrinkles. The precision of the cuts ensured a perfect fit for my vehicle. Not only does my car look brand new, but the wrap also provides excellent protection for the original paint. Highly recommend this product for anyone looking to give their car a fresh, professional look!",
            image: "images/review1.webp"
        },
        {
            user: "Imane Wahib",
            rating: "★★★★☆",
            content: "Love the design! It is simple but has personality and I've gotten a ton of compliments in the first week that I've had it! Quality of the material is really high for the price as well. No complaints at all, application was super straightforward and quick.",
            image: "images/review2.png"
        },
        {
            user: "Safia Laghzoul",
            rating: "★★★★★",
            content: "I'm absolutely thrilled with how my storefront turned out! The design perfectly captures the chic and modern aesthetic I envisioned for my clothing store. The signage is bold and eye-catching, and the window displays are incredibly well-lit and inviting. The attention to detail, from the elegant lighting to the reflection effects, really makes the store stand out on the street. Many customers have already commented on how the new look draws them in. Thank you for transforming my vision into reality—I couldn't have asked for a better result. I'm confident this design will help elevate my brand and attract more customers. Excellent work all around!",
            image: "images/review3.webp"
        }
    ];
    
    reviews.forEach(review => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        
        reviewCard.innerHTML = `
            <div class="review-header">
                <span class="review-user">${review.user}</span>
                <span class="review-rating">${review.rating}</span>
            </div>
            <p class="review-content">
                <img src="${review.image}" alt="${review.user}'s review" class="fr-fic fr-dib fr-rounded">
                ${review.content}
            </p>
        `;
        
        reviewsGrid.appendChild(reviewCard);
    });
}

function loadValueCards() {
    const valueGrid = document.querySelector('.value-grid');
    
    const values = [
        {
            title: "Higher Earnings",
            content: "Up to 40% commissions - double most platforms"
        },
        {
            title: "Own Your Power",
            content: "Keep all rights + sell the same designs elsewhere"
        },
        {
            title: "Viral Challenges",
            content: "$500+ weekly prizes and brand collabs"
        }
    ];
    
    values.forEach(value => {
        const valueCard = document.createElement('div');
        valueCard.className = 'value-card';
        
        valueCard.innerHTML = `
            <h3>${value.title}</h3>
            <p>${value.content}</p>
        `;
        
        valueGrid.appendChild(valueCard);
    });
}

function setupEventListeners() {
    // Image upload for AR preview
    const imageUpload = document.getElementById('image-upload');
    const arPreview = document.querySelector('.ar-preview');
    
    imageUpload.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onload = function(event) {
                arPreview.innerHTML = `<img src="${event.target.result}" alt="AR Preview" style="max-width:100%; max-height:100%;">`;
            }
            
            reader.readAsDataURL(file);
        }
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        // Simple validation
        if (emailInput.value && emailInput.value.includes('@')) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
    
    // Mobile menu toggle (for smaller screens)
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
}
