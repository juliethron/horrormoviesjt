const container = document.querySelector("#movie-list");

const demoMovies = [
    {
        id: "1",
        title: "Inception",
        description: "A mind‑bending thriller where dreams become reality.",
        genre: "Sci‑Fi / Action",
        price: 19.99,
        discountedPrice: 17.99,
        onSale: true,
        image: { url: "images/inception.jpg", alt: "Poster for Inception" }
    },
    {
        id: "2",
        title: "The Lion King",
        description: "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        genre: "Animation / Family",
        price: 17.99,
        discountedPrice: 17.99,
        onSale: false,
        image: { url: "images/lionking.jpg", alt: "Poster for The Lion King" }
    },
];

function loadMovies() {
    container.innerHTML = "";
    demoMovies.forEach(movie => {
        container.innerHTML += `
            <div class="movie-card">
                <img src="${movie.image.url}" alt="${movie.image.alt}" />
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.genre}</p>
                    <p>$${movie.price.toFixed(2)}</p>
                    <a href="product/index.html?id=${encodeURIComponent(movie.id)}" class="btn">View Details</a>
                </div>
            </div>
        `;
    });
}

loadMovies();
