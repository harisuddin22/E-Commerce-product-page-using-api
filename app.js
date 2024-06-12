document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        const products = data.slice(0, 14);

        for (const product of products) {
            const productCardHTML = `
                <div class="product-card">
                    <img src="${product.thumbnailUrl}" alt="${product.title}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">${product.title}</h3>
                        <p class="price">$${(products.indexOf(product) + 1) * 10}.99</p>
                        <button class="buy-button">Add to Cart</button>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productCardHTML;
        }
        
    })
    .catch(error => console.error('Error fetching products:', error));
});
