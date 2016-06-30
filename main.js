setInterval(loop, 500);

function loop() {
var num = Math.floor(Math.random() * 6) + 1;
if (num == 5) {
  meld("HEY");
} else if (num == 2) {
  meld("LISTEN");
} else if (num == 6) {
  meld("HELLO");
} else {}
}

function meld(value) {
  var audio = new Audio(value + ".mp3");
audio.play();
  
 // setTimeout(alert ("\n\n\n" + value + "!!!\n\n\n"), 3000);
}
