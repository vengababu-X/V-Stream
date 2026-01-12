const input = document.getElementById("videoUrl");
const button = document.getElementById("playBtn");
const video = document.getElementById("player");

button.onclick = () => {
  const url = input.value.trim();
  if (!url) return;

  // Native HLS (Safari, iOS)
  if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = url;
    video.play();
    return;
  }

  // HLS.js for Chrome, Android, desktop
  if (window.Hls) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
    });
  } else {
    alert("HLS not supported in this browser");
  }
};
