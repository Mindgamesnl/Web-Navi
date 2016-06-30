setInterval(loop, 150);
function loop() {
var num = Math.floor(Math.random() * 6) + 1;
if (num == 5) {
  fnc_sound("HEY");
} else if (num == 2) {
  fnc_sound("LISTEN");
} else if (num == 6) {
  fnc_sound("HELLO");
} else {}}
function fnc_sound(value) {
    document.getElementById("text").innerHTML = "<h1>" + value + "</h1>";
var audio = new Audio(value + ".mp3");
audio.play();
}
