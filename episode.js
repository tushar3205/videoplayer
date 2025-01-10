function navigate(episodeIndex) {
        document.getElementById("gfgFrame").src = episodeUrls[episodeIndex];
    }
    // Generate buttons based on the number of URLs in episodeUrls
    const episodeButtonsContainer = document.getElementById('episode-buttons-container');
    episodeUrls.forEach((url, index) => {
        const button = document.createElement('button');
        button.innerHTML = `Episode ${index + 1}`;
        button.onclick = () => navigate(index);
        episodeButtonsContainer.appendChild(button);
    });
