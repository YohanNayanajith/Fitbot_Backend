// $(document).ready(function(){
//     $('#appointments_physical').hide();
// });

function physical_member_appointments() {
    // let payments_physical = document.querySelector(".payments_physical");
    let anchor_appointments = document.getElementById("phy_mem_appointments");
    let anchor_appointments_i = document.getElementById("phy_mem_appointments_i");
    let appointments_text = document.getElementById("physical_member_appointments_text");
    console.log("mokada meee appointments");
    // payments_physical.className += "_active";
    anchor_appointments.style.backgroundColor = "white";
    anchor_appointments_i.style.color = "black";
    appointments_text.style.color = "black";

    // $('#appointments_physical').show();
}