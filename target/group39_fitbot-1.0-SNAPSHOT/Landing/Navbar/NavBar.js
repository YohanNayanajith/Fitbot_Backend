//mobile view
function toggle_navbar() {
    console.log("mobile view is ready");
    let x = document.getElementById("nav_mobile");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

//scroll function
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     let navbar = document.getElementById("nav_mobile");
//     let sticky = navbar.offsetTop;
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("fixed")
//     }else {
//         navbar.classList.remove("fixed");
//         // navbar.classList.add("fixed")
//     }
// }
// console.log("Navbar js is called");

//login button
console.log("navbar js");
// $(document).ready(function(){
//     $('#dropbtn').click(function(){
//         $.ajax({
//             type:"GET",
//             url:"login",
//             data: JSON.stringify(this.data),
//             contentType:"application/json",
//         }).done(function(response){
//             alert(response);
//             console.log(response);
//             if(response == "login"){
//                 location.href =  "group39_fitbot_war_exploded/login";
//             }else {
//                 alert("Cant find login page");
//             }
//             // location.reload();
//         }).fail(function(a,b,err){
//             console.log(err);
//         });
//     });
// });


//registration button
// document.getElementById("registration").onclick = function (){
//     location.href = "/register";
// }

// $(document).ready(function(){
//     $('#dropbtn').click(function(){
//         $('#container').load("Landing/Login/login.html #fitbot_login_modal");
//     });
// });
