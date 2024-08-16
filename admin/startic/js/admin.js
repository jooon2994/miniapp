// admin.js

// Sample data
const orders = [
    { id: 1, customer: 'John Doe', items: ['AirPods', 'Smart Watch'], total: '2500 Br', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', items: ['Laptop'], total: '45000 Br', status: 'Shipped' }
];

const products = [
    { id: 1, name: 'AirPods', price: '1000 Br', description: 'Wireless Bluetooth Earbuds', image: 'assets/images/product1.png' },
    { id: 2, name: 'Smart Watch', price: '1500 Br', description: 'Waterproof Fitness Tracker', image: 'assets/images/product2.png' },
    { id: 3, name: 'Laptop', price: '45000 Br', description: 'High-performance laptop', image: 'assets/images/product3.png' }
];

// Load orders into the admin page
function loadOrders() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = ''; // Clear previous orders

    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order-item';
        orderDiv.innerHTML = `
            <p><strong>Order ID:</strong> ${order.id}</p>
            <p><strong>Customer:</strong> ${order.customer}</p>
            <p><strong>Items:</strong> ${order.items.join(', ')}</p>
            <p><strong>Total:</strong> ${order.total}</p>
            <p><strong>Status:</strong> ${order.status}</p>
        `;
        ordersList.appendChild(orderDiv);
    });
}

// Load products into the admin page
function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <p><strong>Name:</strong> ${product.name}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <img src="${product.image}" alt="${product.name}" width="100" height="100">
        `;
        productList.appendChild(productDiv);
    });
}

// Function to show the add product form
function showAddProductForm() {
    document.getElementById('add-product-modal').classList.remove('hidden');
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// Handle the add product form submission
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value;

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        description,
        image
    };

    products.push(newProduct);
    loadProducts();
    closeModal('add-product-modal');
});

// Initialize the admin page
window.onload = function() {
    loadOrders();
    loadProducts();
};
