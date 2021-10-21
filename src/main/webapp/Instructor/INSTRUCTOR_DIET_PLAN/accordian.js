var acc = document.getElementsByClassName("history_title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var history_info = this.nextElementSibling;
    if (history_info.style.maxHeight) {
        history_info.style.maxHeight = null;
    } else {
        history_info.style.maxHeight = history_info.scrollHeight + "px";
    } 
  });
}







