document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const title = document.getElementById('movieTitle').value;
    const description = document.getElementById('movieDescription').value;
    const category = document.getElementById('movieCategory').value;
    const thumbnail = document.getElementById('movieThumbnail').files[0];
    const movieFile = document.getElementById('movieFile').files[0];
    
    // In a real application, you would upload these to a server
    // For this demo, we'll just show an alert
    alert(`Movie "${title}" uploaded successfully!\n(Note: This is a demo. In a real app, files would be uploaded to a server.)`);
    
    // Reset form
    this.reset();
});