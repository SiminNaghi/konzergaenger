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
    this.classList.toggle("active");});


    const today = new Date();
    const yyyy = today.getFullYear();
    let MM = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (MM < 10) MM = '0' + MM;
    
    const formattedToday = yyyy + '-' + MM + '-' + dd;
    document.getElementById('data').value = formattedToday;
    console.log(formattedToday);