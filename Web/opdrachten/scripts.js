 "use strict";
var angle = 0;
function klikken(){
    console.log("click registered");
    var spin = document.getElementById("pg");
    angle+=90;
    spin.style.transform = "rotate("+angle+"deg)";
}