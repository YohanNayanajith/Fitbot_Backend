function physical_member_profile(){
    let profile_workout = document.getElementById("phy_mem_profile");
    let profile_workout_i = document.getElementById("phy_mem_profile_i");
    let profile_text = document.getElementById("physical_member_profile_text");
    profile_workout.style.backgroundColor = "white";
    profile_workout_i.style.color = "black";
    profile_text.style.color = "black";
}

function edit_profile_popup(){
    // alert("profile image");
    $('#edit_profile_container').show();
}

function edit_profile_submit(){
    let first_name = $('#edit_profile_container_detail_name').val().trim();
    let last_name = $('#edit_profile_container_detail_last_name').val().trim();
    let weight = $('#edit_profile_container_detail_weight').val().trim();
    let height = $('#edit_profile_container_detail_last_height').val().trim();
    let date_of_birth = $('#edit_profile_container_detail_dob').val().trim();
    let contact_number = $('#edit_profile_container_detail_last_conatct').val().trim();

    alert(first_name);
}

function close_edit_profile_Popup(){
    $('#edit_profile_container').hide();
}

function edit_profile_change_password(){
    $('#edit_profile_container').hide();
    $('#edit_profile_change_password_container').show();
}

function close_edit_profile_change_password_Popup(){
    $('#edit_profile_change_password_container').hide();
}

function edit_profile_change_password_back(){
    $('#edit_profile_change_password_container').hide();
    $('#edit_profile_container').show();
}
function edit_profile_change_password_submit(){
    //swal - Are You sure?
    // $('#edit_profile_change_password_container').hide();
    let new_password = $('#edit_profile_container_change_new_password').val().trim();
    let confirm_password = $('#edit_profile_container_change_confirm_password').val().trim();
}