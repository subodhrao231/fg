// Sample movie data
const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        thumbnail: "images/movies/avengers.jpg",
        category: "action"
    },
    {
        id: 2,
        title: "The Dark Knight",
        thumbnail: "images/movies/dark-knight.jpg",
        category: "action"
    },
    {
        id: 3,
        title: "Inception",
        thumbnail: "images/movies/inception.jpg",
        category: "sci-fi"
    },
    {
        id: 4,
        title: "The Shawshank Redemption",
        thumbnail: "images/movies/shawshank.jpg",
        category: "drama"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        thumbnail: "images/movies/pulp-fiction.jpg",
        category: "drama"
    },
    {
        id: 6,
        title: "The Godfather",
        thumbnail: "images/movies/godfather.jpg",
        category: "drama"
    }
];

// Load featured movies
document.addEventListener('DOMContentLoaded', () => {
    const featuredMoviesContainer = document.getElementById('featuredMovies');
    
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.thumbnail}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="category">${movie.category}</span>
            </div>
        `;
        featuredMoviesContainer.appendChild(movieCard);
    });
});