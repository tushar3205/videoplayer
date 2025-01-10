// Function to generate the episode buttons and iframes
function generateEpisodeButtonsAndIframes() {
    const buttonsContainer = document.getElementById('episode-buttons-container');
    const iframeContainer = document.getElementById('embed_holder');

    // Clear the previous buttons and iframes
    buttonsContainer.innerHTML = '';
    iframeContainer.innerHTML = '';

    // Loop through episode URLs to generate buttons and iframes
    episodeUrls.forEach((url, index) => {
        // Create a button for each episode
        const button = document.createElement('button');
        button.innerHTML = `EP ${index + 1}`;
        button.onclick = function() {
            showIframe(index);  // Show the iframe corresponding to the clicked episode
        };
        buttonsContainer.appendChild(button); // Append button to the container

        // Create an iframe for each episode
        const iframe = document.createElement('iframe');
        iframe.src = url;  // Set the URL of the iframe
        iframe.width = "100%";
        iframe.height = "800";
        iframe.frameborder = "0";
        iframe.allowfullscreen = true;

        // Append the iframe to the iframe container
        iframeContainer.appendChild(iframe);
    });
}

// Function to show the iframe for the selected episode and hide others
function showIframe(episodeIndex) {
    const iframes = document.querySelectorAll('.iframe-container iframe');

    // Hide all iframes
    iframes.forEach(iframe => {
        iframe.style.display = 'none';
    });

    // Show the iframe for the selected episode
    iframes[episodeIndex].style.display = 'block';
}

// Call the function once the page content is loaded
document.addEventListener('DOMContentLoaded', generateEpisodeButtonsAndIframes);
