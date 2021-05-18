/*
$(document).ready(function(){
  $('.currentYear').text( new Date().getFullYear() );
});

$(document).ready(function(){
  $('.date').text( document.lastModified);
});
*/

let d = new Date();
/*
document.getElementById('year').innerHTML = d.getFullYear();
*/
let year = document.querySelector("#year");

year.innerHTML = d.getFullYear();

let dateMod = document.querySelector("#dateM");

dateMod.innerHTML = d.document.lastModified;