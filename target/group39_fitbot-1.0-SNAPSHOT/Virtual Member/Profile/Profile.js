function virtual_member_profile(){
    let profile_workout = document.getElementById("phy_mem_profile");
    let profile_workout_i = document.getElementById("phy_mem_profile_i");
    let profile_text = document.getElementById("physical_member_profile_text");
    profile_workout.style.backgroundColor = "white";
    profile_workout_i.style.color = "black";
    profile_text.style.color = "black";
}

$(document).ready(function(){
    $('#edit_page').click(function () {
      $('#edit_page_load').load('http://127.0.0.1:5501/Virtual%20Member/EditProfile/editProfileV.html #edit_profile_home',function(responseTxt, statusTxt, xhr){
        if(statusTxt == "error")
          alert("Error: edit page error " + xhr.status + ": " + xhr.statusText);
        });
    });
}); 