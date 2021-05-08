function lastM() {
    let dateT = document.lastModified;
    document.getElementById("date").innerHTML = dateT;
  }

function year() {
  let d = new Date();
  let currentYear = d.getFullYear();
}
