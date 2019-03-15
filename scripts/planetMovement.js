var kerbol;
var moho;
var eve;
var kerbin;
var duna;
var dres;
var jool;
var eeloo;
var planets
function init(){
  kerbol = document.getElementById("kerbol");
  moho = document.getElementById("mohoContainer");
  eve = document.getElementById("eveContainer");
  kerbin = document.getElementById("kerbinContainer");
  duna = document.getElementById("dunaContainer");
  dres = document.getElementById("dresContainer");
  jool = document.getElementById("joolContainer");
  eeloo = document.getElementById("eelooContainer");
  move();
}
function move(){
  moho.style.top = "100px";
}
