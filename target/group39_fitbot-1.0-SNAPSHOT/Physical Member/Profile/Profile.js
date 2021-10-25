

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

// $(document).ready(function(){
//     $('#phy_mem_profile').click(function(){
//         alert("Iam here babe");
//     });
// });

function edit_profile_submit(){
    let edit_profile_container_detail_name = $('#edit_profile_container_detail_name').val().trim();
    let edit_profile_container_detail_last_name = $('#edit_profile_container_detail_last_name').val().trim();
    let edit_profile_container_detail_weight = $('#edit_profile_container_detail_weight').val().trim();
    let edit_profile_container_detail_last_height = $('#edit_profile_container_detail_last_height').val().trim();
    let edit_profile_container_detail_dob = $('#edit_profile_container_detail_dob').val().trim();
    let edit_profile_container_detail_last_conatct = $('#edit_profile_container_detail_last_conatct').val().trim();

    var completed_flag = "1";
    var result_object;

    if(edit_profile_container_detail_name == '' && edit_profile_container_detail_last_name == '' && edit_profile_container_detail_weight == '' && edit_profile_container_detail_last_height == '' && edit_profile_container_detail_dob == '' && edit_profile_container_detail_last_conatct == ''){
        Swal.fire({
            icon: 'error',
            title: 'Update Unsuccessfully!',
            text: 'Cannot empty every field!',
            confirmButtonText: "Ok",
            confirmButtonColor: '#932828',
        })
        completed_flag = "0";
        return;
    }else {

        $.ajax({
            method:"POST",
            url:"memberDetails",
            dataType:"json",
            // contentType:"application/json",
            success: function (result){
                // alert(result);
                console.log(result);
                console.log(typeof(result));
                result_object = result;
                console.log(result_object.weight);
                console.log(typeof(result_object));
            },
            error: function(error){
                console.log(error+"edit profile");
            }
        });

        $('#edit_profile_error_contact_number').hide();
        $('#edit_profile_error_weight').hide();
        $('#edit_profile_error_height').hide();
        $('#edit_profile_error_dob').hide();

        // alert(result_object);
        console.log(result_object);
        if(edit_profile_container_detail_name == ''){
            edit_profile_container_detail_name = result_object.first_name.toString();
        }

        if(edit_profile_container_detail_last_name == ''){
            edit_profile_container_detail_last_name = result_object.last_name.toString();
        }

        if(edit_profile_container_detail_weight == ''){
            edit_profile_container_detail_weight = result_object.weight.toString();
        }else if(edit_profile_container_detail_weight <= 25 || edit_profile_container_detail_weight >= 170){
            $('#edit_profile_error_weight').show();
            $('#edit_profile_error_weight').html("**Your weight should be 25kg to 170kg");
            $('#edit_profile_error_weight').css("color", "red");
            return false;
        }

        if(edit_profile_container_detail_last_height == ''){
            edit_profile_container_detail_last_height = result_object.height.toString();
        }else if(edit_profile_container_detail_last_height <= 55 || edit_profile_container_detail_last_height >= 272){
            $('#edit_profile_error_height').show();
            $('#edit_profile_error_height').html("**Your height should be 55cm to 272cm");
            $('#edit_profile_error_height').css("color", "red");
            return false;
        }

        let arr_date = edit_profile_container_detail_dob.split('-');
        const date = new Date();
        let year_age = date.getFullYear() - arr_date[0];

        if(edit_profile_container_detail_dob == ''){
            edit_profile_container_detail_dob = result_object.year.toString()+"-"+result_object.month.toString()+"-"+result_object.day.toString();
        }else if(year_age < 14 || year_age > 80){
            $('#edit_profile_error_dob').show();
            $('#edit_profile_error_dob').html("**Your age should be 14 to 80");
            $('#edit_profile_error_dob').css("color", "red");
            return false;
        }

        let regexPattern = new RegExp(/^[0-9-+]+$/);
        if(edit_profile_container_detail_last_conatct == ''){
            edit_profile_container_detail_last_conatct = result_object.contact_number.toString();
        }else if(!regexPattern.test(edit_profile_container_detail_last_conatct)){
            $('#edit_profile_error_contact_number').show();
            $('#edit_profile_error_contact_number').html("**Phone number can contain only numbers from 0-9 and + or - sign");
            $('#edit_profile_error_contact_number').css("color","red");
            return false;
        }else if('+' == edit_profile_container_detail_last_conatct[0]){
            $('#edit_profile_error_contact_number').show();
            $('#edit_profile_error_contact_number').html("**Phone number doesnt start with country code");
            $('#edit_profile_error_contact_number').css("color","red");
            return false;
        }
    }

    if(completed_flag == "1") {
        $.ajax({
            method: "POST",
            url: "editProfile",
            data: {
                edit_profile_container_detail_name: edit_profile_container_detail_name,
                edit_profile_container_detail_last_name: edit_profile_container_detail_last_name,
                edit_profile_container_detail_weight: edit_profile_container_detail_weight,
                edit_profile_container_detail_last_height: edit_profile_container_detail_last_height,
                edit_profile_container_detail_dob: edit_profile_container_detail_dob,
                edit_profile_container_detail_last_conatct: edit_profile_container_detail_last_conatct
            },
            // dataType:"json",
            // contentType:"application/json",
            success: function (result) {
                // alert(result);
                console.log(result);
                console.log(typeof (result));
                result.toString();
                console.log(typeof (result));
                if (result.trim() == "1") {
                    // alert(result);
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Updated',
                        text: 'Profile Updated!',
                        confirmButtonText: "Ok",
                        confirmButtonColor: '#0E2C4B',
                    })
                    // setTimeout(function() {
                    //     window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                    // }, 2000);
                    $('#edit_profile_container_detail').find("input[type=text], input[type=number], input[type=date], input[type=tel]").val("");
                    $('#edit_profile_container').hide();

                    getRegisterDetails();

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Update Unsuccessfully!',
                        text: 'Cannot update, System issue!',
                        confirmButtonText: "Ok",
                        confirmButtonColor: '#932828',
                    })
                }

            },
            error: function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Update Unsuccessfully!',
                    text: 'Check the details!',
                    confirmButtonText: "Ok",
                    confirmButtonColor: '#932828',
                })
            }
        });
    }
}

//leftsidebar repeated code
function getRegisterDetails(){
    $('#profile_physical_container_member').html('');
    $.ajax({
        method:"POST",
        url:"memberDetails",
        dataType:"json",
        // contentType:"application/json",
        success: function (result){
            // alert(result);
            const date = new Date();
            let year_age = date.getFullYear() - result.date_of_birth['year'];
            $('#profile_physical_container_member').append(
                '<span>'+result.first_name+" "+result.last_name+'</span><br>'
            );
            $('#profile_physical_container_member').append(
                '<span>'+'Age - '+year_age+'</span><br>'
            );
            $('#profile_physical_container_member').append(
                '<span>'+'Height - '+result.height+' Kg'+'</span><br>'
            );
            $('#profile_physical_container_member').append(
                '<span>'+'Weight - '+result.weight+' cm'+'</span><br>'
            );

            console.log(result);
        },
        error: function(error){
            console.log(error+"edit profile");
        }
    });
}