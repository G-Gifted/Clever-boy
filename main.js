var overload = document.getElementById('overload');
var icon = document.getElementById('play');

function play(){
  if (overload.paused) {
    overload.play();
    icon.src = 'pause.jpg';
  } else {
    overload.pause();
    icon.src = 'play.jpg';
  }
  }
