// var modal = document.getElementById('fitbot_login_modal');
// location.href = "../NavBar/NavBar.html";

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//
//     }
// }
//
// function close_model(){
//     modal.style.display='none';
// }
//
// function login_cancel(){
//     modal.style.display='none';
// }
console.log("login js form");


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