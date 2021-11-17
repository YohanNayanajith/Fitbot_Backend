// google-login
// function onSignIn(googleUser) {
//     let profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }
//
// function signOut() {
//     let auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         console.log('User signed out.');
//     });
// }


$('.reset_password_text_input_warning').hide();
$('#reset_password_container').hide();
$('#reset_new_password_container').hide();

function close_model(){
    window.location.href = "http://localhost:8080/group39_fitbot_war_exploded";
}
console.log("login js form");

function togglePopup() {
    // alert("onclick event");
    $('.model').hide();
    $('#reset_password_container').show();
    $('.reset_password_text_input_warning').hide();
    $('#OTP_password_container').hide();
}

$(document).ready(function(){
    $('#reset_password_text_input_h5').hide();
    $('#OTP_password_text_input_h5').hide();
});

var OTP_number = null;
var contact_number_without = null;
function open_OTP_password_Popup(){
    $('#reset_password_text_input_h5').hide();

    let filter = /^[0-9-+]+$/;

    let random_number = Math.floor(1000 + Math.random() * 9000);
    OTP_number = random_number;
    let new_message = "Hi, Your OTP is "+random_number;
    let contact_number_val = $('#reset_password_contact_number').val().trim();
    // let contact_number_without = null;
    if(filter.test(contact_number_val)){
        if(contact_number_val.length == 10) {
            console.log("length 10");
        }else if( contact_number_val.length == 12){
            console.log(contact_number_val.length);

        }else{
            console.log("length 10 else");
            $('#reset_password_text_input_h5').html('You can only enter 10 or 12 characters');
            $('#reset_password_text_input_h5').css('color','red');
            return
        }

        if("+" == contact_number_val[0] && ( contact_number_val[1] == '9' && contact_number_val[2] == '4')){
            console.log("+94");
            contact_number_without = contact_number_val.slice(3,12);
            $('#reset_password_text_input_h5').css('border-color','green');
        }else{
            console.log("h5");
            contact_number_without = contact_number_val;
            contact_number_val = "+94"+contact_number_val;
            console.log(contact_number_val);
            $('#reset_password_text_input_h5').html('Only sri lankan people use this function');
            $('#reset_password_text_input_h5').css('color','red');
            return
        }
    }else {
        console.log("hide");
        $('#reset_password_text_input_h5').show();
        $('#reset_password_text_input_h5').css('color','red');
        return
    }

    let correct_otp = "0";

    $.ajax({
        method:"POST",
        url:"resetpassword",
        data: {"reset_password_contact_number":contact_number_without},
        // dataType:"json",
        // contentType:"application/json",
        success: function (result){
            if(result == "1"){
                alert(result);
                correct_otp = "1";
                console.log("Correct OTP "+correct_otp);
            }else{
                console.log(result);
                Swal.fire({
                    icon: 'error',
                    title: 'Try Again',
                    text: 'Your phone number cannot found!',
                    confirmButtonText:"Ok",
                    confirmButtonColor: '#932828',
                })
                return;
            }
        },
        error: function(err){
            console.log("phone number wrong", err);
            Swal.fire({
                icon: 'error',
                title: 'Try Again',
                text: 'System issue!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
            return;
        }
    });

        $.ajax({
            url: "https://meghaduta.dhahas.com/sms/sendSMS",
            type: "POST",
            data: JSON.stringify({
                "senders": [
                    contact_number_val
                ],
                "message": new_message,
                "apiKey": "61687c1b3fdf47002ef1c91d"
            }),
            dataType: 'json',
            contentType: 'application/json',
            success: function (response) {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'SMS sent',
                    text: 'OTP sent successfully!',
                    confirmButtonText: "Ok",
                    confirmButtonColor: '#0E2C4B',
                })
                setTimeout(function () {
                    $('#reset_password_container').hide();
                    $('#OTP_password_container').show();
                    // $('#reset_new_password_container').show();
                }, 2000);
            },
            error: function (error) {
                console.log("Something went wrong", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Try Again',
                    text: 'OTP sent unsuccessfully!',
                    confirmButtonText: "Ok",
                    confirmButtonColor: '#932828',
                })
            }
        });

    // $.ajax({
    //     method:"POST",
    //     url:"https://meghaduta.dhahas.com/sms/sendSMS",
    //     // accept: 'application/json',
    //     ContentType: 'application/json',
    //     data:  {
    //         "senders": [
    //             "+94758657450"
    //         ],
    //         "message": "Hi, Your OTP is 1111",
    //         "apiKey": "61687c1b3fdf47002ef1c91d"
    //     },
    //     dataType:"json",
    //     // contentType:"application/json",
    //     success: function (result){
    //         alert(result);
    //         $('#reset_password_container').hide();
    //         $('#reset_new_password_container').show();
    //     }
    // }).fail(function(a,b,err){
    //     console.log(err);
    //     alert("SMS fail");
    // });

}

function open_new_password_Popup(){
    let filter_OTP = /^[0-9-+]+$/;
    let OTP_val = $('#OTP_password_number').val().trim();
    if(filter_OTP.test(OTP_val)){
        if(OTP_val.length == 4) {
            console.log("length 4");
        }else{
            console.log("length 4 else");
            $('#OTP_password_text_input_h5').html('You entered OTP number is incorrect');
            $('#OTP_password_text_input_h5').css('color','red');
            Swal.fire({
                icon: 'error',
                title: 'Try Again',
                text: 'You entered OTP number is incorrect!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
            return
        }

        if(parseInt(OTP_val) == parseInt(OTP_number)){
            $('#OTP_password_container').hide();
            $('#reset_new_password_container').show();

            Swal.fire({
                icon: 'success',
                title: 'OTP is verified',
                text: 'OTP is correct!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#0E2C4B',
            })

            // window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/login';
        }else{
            console.log("h5");
            $('#OTP_password_text_input_h5').html('You entered OTP number is incorrect');
            $('#OTP_password_text_input_h5').css('color','red');
            Swal.fire({
                icon: 'error',
                title: 'Try Again',
                text: 'You entered OTP number is incorrect!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
            return
        }
    }else {
        console.log("hide");
        $('#OTP_password_text_input_h5').show();
        $('#OTP_password_text_input_h5').css('color','red');
        return
    }
}
// function open_new_password_Popup() {
//     passwordChecker();
// }

function open_confirm_password_Popup(){
    let password_update = $('#craete_new_password_forget_password').val().trim();
    let confirm_password_update = $('#confirm_new_password_forget_password').val().trim();

    $.ajax({
        method:"POST",
        url:"passwordConfirm",
        data: {"craete_new_password_forget_password":password_update,"confirm_new_password_forget_password":confirm_password_update,"phone_number":contact_number_without},
        // dataType:"json",
        // contentType:"application/json",
        success: function (result){
            if(result == "1"){
                Swal.fire({
                    icon: 'success',
                    title: 'Password updated',
                    text: 'Password is successfully updated!',
                    confirmButtonText:"Ok",
                    confirmButtonColor: '#0E2C4B',
                })
                console.log("password is correct");
                $('#reset_new_password_container').hide();
                window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/login'
            }else{
                console.log(result);
                Swal.fire({
                    icon: 'error',
                    title: 'Try Again',
                    text: 'Your password is incorrect!',
                    confirmButtonText:"Ok",
                    confirmButtonColor: '#932828',
                })
                return 0;
            }
        },
        error: function(err){
            console.log("phone number wrong", err);
            Swal.fire({
                icon: 'error',
                title: 'Try Again',
                text: 'System issue!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
            return 0;
        }
    });
}

function close_reset_password_Popup(){
    $('#reset_password_container').hide();
    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/login';
}

function close_OTP_password_Popup(){
    $('#reset_new_password_container').hide();
    $('#OTP_password_container').hide();
    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/login';
}

function close_new_password_Popup(){
    $('#reset_new_password_container').hide();
    $('#OTP_password_container').hide();
    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/login';
}

// login select
$(document).ready(function (){
    function email_regex_Validate(emailValue){
        let regexPattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);    // regular expression pattern
        // let regexPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        return regexPattern.test(emailValue);
    }
    $('#login_form_submit').submit(function(e){
        e.preventDefault();
        // alert("login js called");

        let login_username = $('#login_username').val().trim();
        let login_password = $('#login_password').val().trim();

        if(!email_regex_Validate(login_username)){
            alert(email_regex_Validate(login_username));
            Swal.fire({
                icon: 'error',
                title: 'Email type is incorrect!',
                // text: 'Cannot be empty!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
            return;
        }

        // let form_inputs = {"user_name":login_name,"user_password":login_password};
        // form_inputs = JSON.stringify(form_inputs);

        if(login_username == '' || login_password == ''){
            e.preventDefault();
            // alert("Cant empty feilds");
            Swal.fire({
                icon: 'error',
                title: 'Login unsuccessfully!',
                text: 'Cannot be empty!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
            return;
        }else if(login_username.length < 6){
            // alert("Password length should be greater than 3 characters");
            Swal.fire({
                icon: 'error',
                title: 'Login unsuccessfully!',
                text: 'Password length should be greater than 3 characters!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
        }

        $.ajax({
            method:"POST",
            url:"login",
            data: {login_username:login_username,login_password:login_password},
            // dataType:"json",
            // contentType:"application/json",
            success: function (result){
                if(result == "1"){
                    // alert(result);
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully login',
                        text: 'Physical Member!',
                        confirmButtonText:"Ok",
                        confirmButtonColor: '#0E2C4B',
                    })
                    setTimeout(function() {
                        window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                    }, 2000);

                }else if(result == "2"){
                    //virtual member
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else if(result == "3"){
                    //instructor
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/instructor';
                }else if(result == "4"){
                    //manager
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/manager';
                }else if(result == "5"){
                    //owner
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else if(result == "6"){
                    //admin
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else if(result == '7'){
                    Swal.fire({
                        icon: 'error',
                        title: 'Login unsuccessfully!',
                        text: 'You cannot log now.Please contact our administration!',
                        confirmButtonText:"Ok",
                        confirmButtonColor: '#932828',
                    })
                }else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login unsuccessfully!',
                        text: 'User name and password does not match!',
                        confirmButtonText:"Ok",
                        confirmButtonColor: '#932828',
                    })
                }

            },
            error: function(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Login unsuccessfully!',
                    text: 'User name and password does not match!',
                    confirmButtonText:"Ok",
                    confirmButtonColor: '#932828',
                })
            }
        });
    });
});

// remember me
const rmCheck = document.getElementById("login_remember_me")
const emailInput = document.getElementById("login_username");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
} else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
}

function lsRememberMe() {
    if (rmCheck.checked && emailInput.value !== "") {
        localStorage.username = emailInput.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.username = "";
        localStorage.checkbox = "";
    }
}


// $.ajax({
//     type:"POST",
//     url:"login",
//     dataType:"json",
//     success: function (response){
//         console.log(response);
//         alert("Leave added successfully");
//         // location.reload();
//     }
// });

// $(document).ready(function(){
//     $('#login_form_submit').submit(function(e){
//
//         let login_username = $('#login_username').val().trim();
//         let login_password = $('#login_password').val().trim();
//
//         if(login_username == '' && login_password == ''){
//             alert("User name is empty");
//             return false;
//         }
//
//         $.post("login",
//             {
//                 user_name:login_username,
//                 user_password:login_password
//             },function(data,status){
//                 if(parseInt(data) == 1){
//                     window.location.href("group39_fitbot_war_exploded/physicalMember");
//                 }else {
//                     alert(data);
//                     alert("Window cant show");
//                 }
//             });
//         // e.preventDefault();
//         alert("password is empty");
//     });
// });