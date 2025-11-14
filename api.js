
const BASE_URL = "https://v2.api.noroff.dev/square-eyes";


export async function getMovies() {
    try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch movies");
    const json = await response.json();
    return json.data;
    } catch (error) {
    console.error(error);
    throw error;
    }
}


export async function getMovieById(id) {
    try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch movie details");
    const json = await response.json();
    return json.data;
    } catch (error) {
    console.error(error);
    throw error;
    }
}
