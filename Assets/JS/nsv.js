var coll = document.getElementsByClassName("button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
var date = document.getElementsByClassName("data");

date[0].addEventListener("click", function () {
  this.classList.toggle("active");
});

const today = new Date();
let yyyy = today.getFullYear();
let MM = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = "0" + dd;
if (MM < 10) MM = "0" + MM;

document.getElementById("data").value = yyyy + "-" + MM + "-" + dd;


var map = document.getElementById("maps").value;
    maps[0].addEventListener("click", function () {
      getElementById("mapss").classList.toggle("active");
});
 