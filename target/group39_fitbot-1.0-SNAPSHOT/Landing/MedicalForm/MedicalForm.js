$(document).ready(function(){

    $("#reg_submit_btn").attr("disabled", true);
    $('input[type="checkbox"]').click(function(){
        if($('#medical_question_terms').prop("checked") == true) {
            // alert("Checkbox is checked.");
            console.log("Checkbox is checked");
            // $('#edit_profile_error_dob').html("**Your age should be 14 to 80");
            $('#reg_submit_btn').css("background-color", "#0E2C4B");
            $('#reg_submit_btn').css("box-shadow", "0 10px 10px rgba(0, 0, 0, 0.25)");
            $("#reg_submit_btn").attr("disabled", false);
        }
    });

    $('#reg_back_btn').click(function(){
        Swal.fire({
            title: 'Are you sure?',
            text: "Registration is not completed,You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0E2C4B',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, go back!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Success!',
                //     'Your file has been deleted.',
                //     'success'
                // )
                window.location.href = "http://localhost:8080/group39_fitbot_war_exploded/register";
            }else if (result.isDenied){
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Successfully Updated',
        //     text: 'Profile Updated!',
        //     confirmButtonText: "Ok",
        //     confirmButtonColor: '#0E2C4B',
        // })
    });

    $('#form_container').submit(function(e){
        // alert('medical form');
        e.preventDefault();

        let form_data = $("form").serializeArray();
        console.log(form_data);

        let data = {};
        $.each(form_data, function(i, field){
            // $("#results").append(field.name + ":" + field.value + " ");
            data[field.name] = field.value;
        });
        console.log("Data"+data);

        $.ajax({
            method:"POST",
            url:"medical",
            data: data,
            // dataType:"json",
            // contentType:"application/json",
            success: function (result){
                if(result.trim() == "1"){
                    // alert(result);
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Register',
                        // text: 'Physical Member!',
                        confirmButtonText:"Ok",
                        confirmButtonColor: '#0E2C4B',
                    })
                    // setTimeout(function() {
                    //     window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/';
                    // }, 2000);

                }else if(result.trim() == "2"){
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Unsuccessfully!',
                        text: 'You have to complete previous form!',
                        confirmButtonText:"Ok",
                        confirmButtonColor: '#932828',
                    })
                }else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Unsuccessfully!',
                        text: 'Registration cannot completed!',
                        confirmButtonText:"Ok",
                        confirmButtonColor: '#932828',
                    })
                }

            },
            error: function(error){
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Unsuccessfully!',
                    text: 'Cannot resolve, System issue!!',
                    confirmButtonText:"Ok",
                    confirmButtonColor: '#932828',
                })
            }
        });
        // if(form_data.length == 6){
        //     alert('length is 6');
        //     console.log(form_data.medical_first_question14);
        //     $.each(form_data, function(i, field){
        //         $("#results").append(field.name + ":" + field.value + " ");
        //     });
        //     if(form_data.medical_first_question14 == 'Other1' && form_data.medical_second_question6 == 'Other2' && form_data.medical_third_question == '' && form_data.medical_fourth_question == '' && form_data.medical_fifth_question == '' && form_data.medical_six_question == ''){
        //         console.log("form is empty");
        //     }
        // }


        // let  = $('#first_question_1').val().trim();
        // $('#first_question_2').val().trim();
        // $('#first_question_3').val().trim();
        // $('#first_question_4').val().trim();
        // $('#first_question_5').val().trim();
        // $('#first_question_6').val().trim();
        // $('#first_question_7').val().trim();
        // $('#first_question_8').val().trim();
        // $('#first_question_9').val().trim();
        // $('#first_question_10').val().trim();
        // $('#first_question_11').val().trim();
        // $('#first_question_12').val().trim();
        // $('#first_question_13').val().trim();
        // $('#first_question_14').val().trim();



        Swal.fire({
            title: 'Are you sure?',
            text: "Registration are not completed,You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0E2C4B',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, complete!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire(
                //     'Success!',
                //     'Your file has been deleted.',
                //     'success'
                // )
                window.location.href = "http://localhost:8080/group39_fitbot_war_exploded/register";
            }else if (result.isDenied){
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    });
});