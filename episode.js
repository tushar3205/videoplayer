// Function to generate the episode buttons
function generateEpisodeButtons() {
    const container = document.getElementById('episode-buttons-container');
    
    // Clear previous buttons (if any)
    container.innerHTML = '';

    // Create buttons dynamically based on the episode URLs
    episodeUrls.forEach((url, index) => {
        const button = document.createElement('button');
        button.innerHTML = `EP ${index + 1}`;  // Label the button as "EP 1", "EP 2", etc.
        button.onclick = function() {
            changeEpisode(url);  // Call the changeEpisode function with the selected URL
        };
        container.appendChild(button);  // Append the button to the container
    });
}

// Function to change the iframe source based on the selected episode
function changeEpisode(url) {
    const iframe = document.getElementById('player');
    iframe.innerHTML = `<iframe id="player" width="100%" height="800" frameborder="0" src="${url}" allowfullscreen=""></iframe>`; 
    // Update the iframe using innerHTML to dynamically set the src attribute
}

// Call generateEpisodeButtons() once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', generateEpisodeButtons);
