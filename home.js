

const container = document.querySelector("#movie-list");


export const movies = [
    {
        id: "1",
        title: "Inception",
        genre: "Sci-Fi / Action",
        price: 19.99,
        description: "A mind-bending thriller where dreams become reality.",
        image: { url: "images/inception.jpg", alt: "Poster for Inception" }
    },
    {
        id: "2",
        title: "The Lion King",
        genre: "Animation / Family",
        price: 17.99,
        description: "A young lion prince learns the true meaning of responsibility and bravery.",
        image: { url: "images/lionking.jpg", alt: "Poster for The Lion King" }
    },
    {
        id: "3",
        title: "Avengers: Endgame",
        genre: "Action / Superhero",
        price: 14.99,
        description: "The Avengers assemble for the ultimate showdown against Thanos.",
        image: { url: "images/avengers.jpg", alt: "Poster for Avengers: Endgame" }
    },
    {
        id: "4",
        title: "The Matrix",
        genre: "Sci-Fi / Action",
        price: 21.99,
        description: "A hacker discovers the truth about reality and fights back.",
        image: { url: "images/matrix.jpg", alt: "Poster for The Matrix" }
    },
    {
        id: "5",
        title: "Coco",
        genre: "Animation / Family",
        price: 18.99,
        description: "A young boy discovers his family's musical past in a magical land.",
        image: { url: "images/coco.jpg", alt: "Poster for Coco" }
    }
];


export function loadMovies() {
    if (!container) return;

    container.innerHTML = ""; 

    movies.forEach((movie) => {
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

document.addEventListener("DOMContentLoaded", () => {
    loadMovies();
});
