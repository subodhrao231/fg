const moviesData = require('../../../db.json').movies;

exports.handler = async (event, context) => {
    try {
        const { id } = event.queryStringParameters || {};
        
        if (id) {
            // Return single movie
            const movie = moviesData.find(m => m.id == id);
            if (!movie) {
                return {
                    statusCode: 404,
                    body: JSON.stringify({ error: 'Movie not found' })
                };
            }
            return {
                statusCode: 200,
                body: JSON.stringify(movie)
            };
        }
        
        // Return all movies
        return {
            statusCode: 200,
            body: JSON.stringify(moviesData)
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err.message })
        };
    }
};