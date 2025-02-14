document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
    loadCart();
});

async function loadProducts() {
    const response = await fetch("/api/products");
    const products = await response.json();
    const productsContainer = document.getElementById("products");

    productsContainer.innerHTML = "";
    products.forEach(product => {
        const productCard = `
            <div class="col-md-3">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">加入購物車</button>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}

async function loadCart() {
    const response = await fetch("/api/cart");
    const cart = await response.json();
    const cartContainer = document.getElementById("cart");

    cartContainer.innerHTML = "";
    cart.forEach(product => {
        const cartItem = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${product.name} - $${product.price.toFixed(2)}
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${product.id})">移除</button>
            </li>
        `;
        cartContainer.innerHTML += cartItem;
    });
}

async function addToCart(productId) {
    const response = await fetch(`/api/products`);
    const products = await response.json();
    const product = products.find(p => p.id === productId);

    await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    });

    loadCart();
}

async function removeFromCart(productId) {
    await fetch(`/api/cart/${productId}`, { method: "DELETE" });
    loadCart();
}
