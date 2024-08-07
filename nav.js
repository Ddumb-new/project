document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('index-nav').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('shop-nav').addEventListener('click', function() {
        window.location.href = 'shop.html';
    });

    document.getElementById('contact-nav').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
    
    
});

function redirectToCheckout(productName, productPrice) {
    // Redirect to checkout page with query parameters for product details
    window.location.href = `checkout.html?name=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}`;
}
