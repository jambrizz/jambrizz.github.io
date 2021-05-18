/* This variable is to get the current date*/
let d = new Date();
/* This querySelector is to locate the id="year" to modify*/
let year = document.querySelector("#year");
/* This is to insert the current year in the above id*/
year.innerHTML = d.getFullYear();
/* This querySelector is to locate the class="dateMod" to modify*/
let dateMod = document.querySelector(".date");

dateMod.innerHTML = document.lastModified;