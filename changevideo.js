function changeVideoUrl(newUrl) {
  const videoElement = document.getElementById('video');
  if (videoElement) {
    videoElement.src = newUrl;
    videoElement.load();
    videoElement.play();
  } else {
    console.log('Video element not found');
  }
}
