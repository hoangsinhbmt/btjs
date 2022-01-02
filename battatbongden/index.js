function batden(){
var denEl = document.getElementById("bongden");
var dem = 1;
console.log(denEl)
denEl.src = "./img/pic_bulbon.gif"
}
function tatden(){
var denEl = document.getElementById("bongden");
console.log(denEl)
denEl.src = "./img/pic_bulboff.gif"
}
var num1 = 345 % 10;
console.log(num1);
var num2 = 345 / 10 - 345 % 10;
Math.floor(num2);
var num3 = num2 % 10;
var num4 = num2 / 10 - num2 % 10;
Math.floor(num4);
console.log(num4);