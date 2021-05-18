/*
$(document).ready(function(){
  $('.currentYear').text( new Date().getFullYear() );
});

$(document).ready(function(){
  $('.date').text( document.lastModified);
});
*/

function currentYear () {
  let d = new Date();
  document.getElementById("year").innerHTML = d.getFullYear();
};
