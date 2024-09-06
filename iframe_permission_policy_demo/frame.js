get_user_media_btn = document.getElementById('request-camera-btn');
get_user_media_btn.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({video: true});
    const video = document.createElement('video');
    video.srcObject = stream;
    video.autoplay = true;
    document.body.appendChild(video);
  } catch (e) {
    console.error(e);
    const error_paragraph = document.createElement('p');
    error_paragraph.innerHTML = e;
    document.body.appendChild(error_paragraph);
  }
});