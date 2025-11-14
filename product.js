
import { movies } from "./home.js"; 

const container = document.querySelector("#movie-details");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const movie = movies.find((item) => item.id === id);

if (!movie) {
    container.innerHTML = `<p>Movie not found.</p>`;
} else {
    container.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h1>${movie.title}</h1>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p>${movie.description}</p>
    <p class="price"><strong>Price:</strong> $${movie.price.toFixed(2)}</p>
    <button id="addToCart" class="btn">Add to Basket</button>
    `;

    document
    .querySelector("#addToCart")
    .addEventListener("click", () => addToCart(movie));
}

function addToCart(movie) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(movie);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${movie.title} added to your basket!`);
}
