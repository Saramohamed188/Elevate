document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-container");
    const loadingIndicator = document.getElementById("loading");
    const errorIndicator = document.getElementById("error");

    async function fetchProducts() {
        try {
            loadingIndicator.classList.remove("hidden");

            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) throw new Error('Failed to fetch products');

            const products = await response.json();
            renderProducts(products);
        } catch (error) {
            errorIndicator.classList.remove("hidden");
        } finally {
            loadingIndicator.classList.add("hidden");
        }
    }

    function renderProducts(products) {
        productContainer.innerHTML = products.map(product => `
            <div class="product-card p-4 border border-gray-300 shadow-md">
                <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-cover mb-4 grayscale hover:grayscale-0 transition duration-300">
                <h2 class="font-bold text-lg">${product.title}</h2>
                <p class="mt-2 text-gray-600">$${product.price}</p>
                <p class="mt-1 text-gray-500">Rating: ${product.rating.rate} ⭐</p>
            </div>
        `).join('');
    }

    fetchProducts();
});
