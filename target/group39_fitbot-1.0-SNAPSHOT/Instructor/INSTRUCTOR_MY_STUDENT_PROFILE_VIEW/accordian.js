var acc = document.getElementsByClassName("ins_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var acc_sachi = this.nextElementSibling;
    if (acc_sachi.style.maxHeight) {
        acc_sachi.style.maxHeight = null;
    } else {
        acc_sachi.style.maxHeight = acc_sachi.scrollHeight + "px";
    } 
  });
}