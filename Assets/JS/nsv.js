var coll = document.getElementsByClassName("button");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
var date = document.getElementsByClassName("data");


  date[0].addEventListener("click", function() {
    this.classList.toggle("active");
    
    
  });

var zet = document.getElementsByClassName("zet"); 

function Time() {
    const d = new Date();
    var e = d.getDate();
    var m = d.getMonth();
    var y = d.getFullYear();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    return e + ":" + m + ":" + y + "|" + h + ":" + m + ":" + s;
    
} 


console.log(Time());
