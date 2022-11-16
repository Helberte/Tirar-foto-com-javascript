var video = document.querySelector('video');
var botao = document.querySelector('button');
// este metodo pede permissão ao usuário para utilizar a midia
// do dispositivo, só funciona em conexões https

// documentação
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

//este metodo recebe um objeto como parametro que especifica 
// o tipo de midia que será utilizada, audio ou video

//este metodo retorna uma promisse, ou seja, algo assincrono,
// já que esta linha pode demorar um pouco para terminar a 
// execussão. Esta promisse é revertida numa stream

// .then para promisses significa que será executada a função
// caso ocorra tudo bem, caso não ocorra, ele irá executar o
// catch

// uma promisse é uma forma de lidarmos com o processamento assincrono
// da aplicação
navigator.mediaDevices.getUserMedia({
  video: {
    width: window.screen.width,
    height: 450
  },
  audio: false
})
.then(stream => {
  video.srcObject = stream;
  video.play();
})
.catch( _ => {
  alert("Não foi possível encontrar a câmera.");
});

botao.addEventListener('click', () =>{
  var canvas = document.querySelector('canvas');
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;

  var context = canvas.getContext('2d');
  context.drawImage(video, 0, 0);

  var link = document.createElement('a');
  link.download = "foto.png";
  link.href = canvas.toDataURL();
  link.textContent = "clique para baixa a imagem.";

  document.body.appendChild(link);
});