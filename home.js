

const apiUrl = "https://v2.api.noroff.dev/square-eyes";
const container = document.querySelector("#movie-list");

async function getMovies() {
    container.innerHTML = `<p class="loading">Loading horror titles...</p>`;

    try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error("Failed to fetch movies.");
    }

    const result = await response.json();
    const movies = result.data;

    if (!movies || movies.length === 0) {
        container.innerHTML = `<p class="error">No movies found. Try again later.</p>`;
        return;
    }

    container.innerHTML = "";
    movies.forEach((movie) => {
        container.innerHTML += `
        <div class="movie-card">
            <img src="${movie.image.url}" alt="${movie.image.alt || movie.title}" />
            <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>${movie.genre || "Horror / Thriller"}</p>
            <p>$${movie.price}</p>
            <a href="product/index.html?id=${movie.id}" class="btn">View Details</a>
            </div>
        </div>
        `;
    });
    } catch (error) {
    container.innerHTML = `
        <p class="error">⚠️ Something went wrong while loading movies.<br>
        Please check your connection or try again later.</p>
    `;
    }
}

getMovies();
