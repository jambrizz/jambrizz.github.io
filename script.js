/*
$(document).ready(function(){
  $('.currentYear').text( new Date().getFullYear() );
});

$(document).ready(function(){
  $('.date').text( document.lastModified);
});
*/

function currentYear () {
  let y = new Date(currentYear);
  document.getElementById("year").innerHTML = y;
};
