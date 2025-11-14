

const container = document.querySelector("#movie-list");

const demoMovies = [
    { title: "Evil Dead II", genre: "Supernatural Horror", price: 19.99, image: "images/evildead2.jpg" },
    { title: "Five Nights at Freddy's", genre: "Thriller / Game Adaptation", price: 17.99, image: "images/fnaf.jpg" },
    { title: "Alien", genre: "Sci-Fi Horror", price: 14.99, image: "images/alien.jpg" },
    { title: "Longlegs", genre: "Psychological Horror", price: 21.99, image: "images/longlegs.jpg" },
    { title: "Talk to Me", genre: "Supernatural Horror", price: 18.99, image: "images/talktome.jpg" },
    { title: "Malignant", genre: "Mystery / Body Horror", price: 16.99, image: "images/malignant.jpg" },
    { title: "The Blackening", genre: "Comedy Horror", price: 15.99, image: "images/theblackening.jpg" },
    { title: "Barbarian", genre: "Thriller / Horror", price: 17.49, image: "images/barbarian.jpg" },
    { title: "Spree", genre: "Satirical Horror", price: 14.49, image: "images/spree.jpg" },
    { title: "Hereditary", genre: "Psychological Horror", price: 19.49, image: "images/hereditary.jpg" },
    { title: "Halloween", genre: "Slasher Classic", price: 13.99, image: "images/halloween.jpg" },
    { title: "Mandy", genre: "Psychedelic Horror", price: 22.49, image: "images/mandy.jpg" },
    { title: "Censor", genre: "Psychological / Meta Horror", price: 16.49, image: "images/censor.jpg" },
];

function loadMovies() {
    container.innerHTML = "";
    demoMovies.forEach(movie => {
    container.innerHTML += `
        <div class="movie-card">
        <img src="${movie.image}" alt="${movie.title}" />
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.genre}</p>
            <p>$${movie.price.toFixed(2)}</p>
            <a href="product/index.html?title=${encodeURIComponent(movie.title)}" class="btn">View Details</a>
        </div>
        </div>
    `;
    });
}

loadMovies();

