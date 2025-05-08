// Sample data - in real app, this would come from API
const trendingMovies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        thumbnail: "assets/movies/avengers.jpg",
        year: 2019,
        quality: "4K"
    },
    {
        id: 2,
        title: "The Dark Knight",
        thumbnail: "assets/movies/dark-knight.jpg",
        year: 2008,
        quality: "HD"
    },
    {
        id: 3,
        title: "Inception",
        thumbnail: "assets/movies/inception.jpg",
        year: 2010,
        quality: "HD"
    },
    {
        id: 4,
        title: "Interstellar",
        thumbnail: "assets/movies/interstellar.jpg",
        year: 2014,
        quality: "4K"
    }
];

const latestPosts = [
    {
        id: 1,
        title: "Top 10 Movies to Watch This Weekend",
        thumbnail: "assets/blog/weekend-movies.jpg",
        date: "May 15, 2023"
    },
    {
        id: 2,
        title: "New Streaming Releases for May 2023",
        thumbnail: "assets/blog/may-releases.jpg",
        date: "May 10, 2023"
    }
];

// Load trending movies
document.addEventListener('DOMContentLoaded', () => {
    const trendingContainer = document.getElementById('trendingMovies');
    const postsContainer = document.getElementById('latestPosts');
    
    // Load movies
    trendingMovies.forEach(movie => {
        trendingContainer.innerHTML += `
            <div class="movie-card">
                <a href="watch.html?id=${movie.id}">
                    <img src="${movie.thumbnail}" alt="${movie.title}">
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <div class="meta">
                            <span>${movie.year}</span>
                            <span>${movie.quality}</span>
                        </div>
                    </div>
                </a>
            </div>
        `;
    });
    
    // Load blog posts
    latestPosts.forEach(post => {
        postsContainer.innerHTML += `
            <div class="post-card">
                <a href="post.html?id=${post.id}">
                    <img src="${post.thumbnail}" alt="${post.title}">
                    <div class="post-info">
                        <h3>${post.title}</h3>
                        <div class="meta">
                            <span>${post.date}</span>
                        </div>
                    </div>
               
