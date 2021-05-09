$(document).ready(function(){
  $('.currentYear').text( new Date().getFullYear() );
});

$(document).ready(function(){
  $('.date').text( document.lastModified);
});