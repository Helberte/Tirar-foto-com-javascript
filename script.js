var video = document.querySelector('video');
console.log(video);

navigator.mediaDevices.getUserMedia({video: true})
.then(stream => {
  video.srcObject = stream;
  video.play();
})
.catch();