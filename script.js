/*
$(document).ready(function(){
  $('.currentYear').text( new Date().getFullYear() );
});

$(document).ready(function(){
  $('.date').text( document.lastModified);
});
*/

  let d = new Date();
  document.getElementById('year').innerHTML = d.getFullYear();
