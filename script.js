/*
$(document).ready(function(){
  $('.currentYear').text( new Date().getFullYear() );
});

$(document).ready(function(){
  $('.date').text( document.lastModified);
});
*/

function currentYear () {
  let y = new Date(year);
  document.getElementById("year").innerHTML = y;
};
