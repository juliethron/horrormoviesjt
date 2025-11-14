const container = document.querySelector("#movie-list");

const API_URL = "https://api.noroff.dev/api/v1/square-eyes";

async function fetchProducts() {
    container.innerHTML = `<p class="loading">Loading movies...</p>`;
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch products.");
        const products = await res.json();

        container.innerHTML = "";
        products.forEach(product => {
            container.innerHTML += `
                <div class="movie-card">
                    <img src="${product.imageUrl}" alt="${product.name}" />
                    <div class="movie-info">
                        <h3>${product.name}</h3>
                        <p>${product.genre}</p>
                        <p>$${product.price.toFixed(2)}</p>
                        <a href="product/index.html?id=${product.id}" class="btn">View Details</a>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        container.innerHTML = `<p class="error">⚠️ ${error.message}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", fetchProducts);
