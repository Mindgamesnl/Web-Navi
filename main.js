setInterval(loop, 8000);

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
  alert ("\n\n\n" + value + "!!!\n\n\n");
}
