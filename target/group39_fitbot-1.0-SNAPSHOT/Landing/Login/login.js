$('.reset_password_text_input_warning').hide();
$('#reset_password_container').hide();
$('#reset_new_password_container').hide();

function close_model(){
    window.location.href = "http://localhost:8080/group39_fitbot_war_exploded";
}
console.log("login js form");

function togglePopup() {
    alert("onclick event");
    $('.model').hide();
    $('#reset_password_container').show();
    $('.reset_password_text_input_warning').hide();
}

function close_reset_password_Popup(){
    $('#reset_password_container').hide();
    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/login';
}

function open_new_password_Popup(){

    $.ajax({
        method:"POST",
        url:"https://meghaduta.dhahas.com/sms/sendSMS",
        // accept: 'application/json',
        ContentType: 'application/json',
        data: {
            "senders": [
                "+94758657450"
            ],
            "message": "Hi, Your OTP is 1111",
            "apiKey": "61687c1b3fdf47002ef1c91d"
        },
        // dataType:"json",
        // contentType:"application/json",
        success: function (result){
            alert(result);
            $('#reset_password_container').hide();
            $('#reset_new_password_container').show();

        }
    }).fail(function(a,b,err){
        console.log(err);
        alert("SMS fail");
    });
}

function close_new_password_Popup(){
    $('#reset_new_password_container').hide();
    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/login';
}


$(document).ready(function (){
    // $('#login_form_submit').submit(function(e){
    //     e.preventDefault();
    // });


    $('#login_form_submit').submit(function(e){
        e.preventDefault();
        // alert("login js called");
        let login_username = $('#login_username').val();
        let login_password = $('#login_password').val();
        // let form_inputs = {"user_name":login_name,"user_password":login_password};
        // form_inputs = JSON.stringify(form_inputs);

        if(login_username == '' || login_password == ''){
            e.preventDefault();
            alert("Cant empty feilds");
            return;
        }else if(login_username.length < 3){
            alert("Password length should be greater than 3 characters");
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
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else if(result == "2"){
                    //virtual member
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else if(result == "3"){
                    //instructor
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else if(result == "4"){
                    //manager
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else if(result == "5"){
                    //owner
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else if(result == "6"){
                    //admin
                    window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/physicalMember';
                }else{
                    alert("wrong");
                }

            }
        });
    });
});




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