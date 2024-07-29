document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');

    // Add event listeners to 'Add to cart' buttons
    document.querySelectorAll('.addcart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const productElement = event.target.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.querySelector('h2').innerText;
        const productPrice = parseFloat(productElement.querySelector('p:last-of-type').innerText.replace('Price: $', '').replace('/lb', ''));

        const product = {
            id: productId,
            name: productName,
            price: productPrice
        };

        cart.push(product);
        renderCart();
    }

    function renderCart() {
        if (!cartItems) return;

        cartItems.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `${product.name} - $${product.price.toFixed(2)} <button class="remove-from-cart" data-id="${product.id}">Remove</button>`;
            cartItems.appendChild(li);
            totalPrice += product.price;
        });

        totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }

    function removeFromCart(event) {
        const productId = event.target.getAttribute('data-id');
        const productIndex = cart.findIndex(product => product.id === productId);

        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
        }

        renderCart();
    }

    document.querySelector('.place-order').addEventListener('click', placeOrder);

    function placeOrder() {
        alert('Order placed successfully!');
        cart.length = 0;
        renderCart();
    }
});
