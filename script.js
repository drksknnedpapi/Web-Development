let cart = [];
let cartCount = 0;
let cartTotal = 0;

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const product = this.closest('.product');
        const productId = product.dataset.id;
        const productName = product.dataset.name;
        const productPrice = parseInt(product.dataset.price);

        // Add product to cart
        addToCart(productId, productName, productPrice);
    });
});

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    cartCount++;
    cartTotal += price;
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const cartCountElem = document.getElementById('cartCount');
    const cartItemsElem = document.getElementById('cartItems');
    const cartTotalElem = document.getElementById('cartTotal');
    
    cartCountElem.textContent = cartCount;
    cartItemsElem.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
        cartItemsElem.appendChild(li);
    });

    cartTotalElem.textContent = cartTotal;
}

// Toggle Cart Sidebar
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');

cartBtn.addEventListener('click', function () {
    cartSidebar.classList.toggle('open');
});

// Checkout Button
document.getElementById('checkoutBtn').addEventListener('click', function () {
    alert('Proceeding to checkout!');
});
