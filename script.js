function lastM() {
    let dateT = document.lastModified;
    document.getElementById("date").innerHTML = dateT;
  }

/*function year() {
  let d = new Date();
  let year = d.getFullYear();
  document.getElementById("currentYear").innerHTML = year;
}*/
$(document).ready(function(){
  $('.currentYear').text( new Date().getFullYear() );
});

$(document).ready(function(){
  $('.date').text( document.lastModified);
});