/*
 404 Page
 Dan Shafman
 2.19.17
*/
function random(){
  var rand =  Math.floor(Math.random() * 33);
  document.body.style.backgroundImage = "url(/../img/img"+rand+".jpg)";
}
random();
