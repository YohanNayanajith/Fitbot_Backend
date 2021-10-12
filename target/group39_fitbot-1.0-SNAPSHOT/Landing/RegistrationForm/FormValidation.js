$(document).ready(function () {
    $('#link_to_anither_page').hide();

    // Validate Username
    $('#first_name_check').hide();
    $('#last_name_check').hide(); //id of h5
    $('#email_check').hide();

    let usernameError = false;
    function validateUsername() {
        console.log("validate username called");
        let firstNameValue = $('#first_name').val();
        let lastNameValue = $('#last_name').val();
        if (firstNameValue.length == '' || lastNameValue.length == '') {
            $('#first_name_check').show();
            $('#last_name_check').show();
            usernameError = false;
            return false;
        }
        else if((firstNameValue.length < 3) || (firstNameValue.length > 20)) {
            $('#first_name_check').show();
            $('#first_name_check').html("**length of first name must be between 3 and 10");
            usernameError = false;
            return false;
        }else if((lastNameValue.length < 3) || (lastNameValue.length > 20)){
            $('#last_name_check').show();
            $('#last_name_check').html("**length of last name must be between 3 and 10");
            usernameError = false;
            return false;
        }
        else {
            $('#first_name_check').hide();
            $('#last_name_check').hide();
            usernameError = true;
        }
    }

    //validate date of birth
    $('#dob_check').hide();
    let dobError = false;
    $('#date_of_birth').keyup(function () {
        validateDOB();
    });
    function validateDOB() {
        let DOBValue = $('#date_of_birth').val();
        if(DOBValue.length == 0){
            $('#dob_check').show();
            dobError = false;
            return false;
        }
        let arr_date = DOBValue.split('-');
        const date = new Date();
        let year_age = date.getFullYear() - arr_date[0];
        // let month_age = date.getMonth()+1 - arr_date[1];
        // let date_age = date.getDate() - arr_date[2];

        if (year_age < 14 || year_age > 80) {
            $('#dob_check').show();
            $('#dob_check').html("**Your age should be 14 to 80");
            $('#dob_check').css("color", "red");
            dobError = false;
            return false;
        }
        else {
            $('#dob_check').hide();
            dobError = true;
        }
    }

    //validate phone number
    $('#phone_number_check').hide();
    $('#country_check').hide();
    let phoneNumberError = false;
    $('#phone_number').keyup(function () {
        validatePhoneNumber();
    });

    function phoneValidate(phoneNo){
        let regexPattern = new RegExp(/^[0-9-+]+$/);    // regular expression pattern
        return regexPattern.test(phoneNo);
    }

    function validatePhoneNumber() {
        let phoneNumberValue = $('#phone_number').val();
        let countryValue = $('#selected_country').val();
        console.log(countryValue);
        console.log(phoneNumberValue);
        if(phoneNumberValue.length == ''){
            $('#phone_number_check').show();
            phoneNumberError = false;
            return false;
        }else if(phoneNumberValue[0] == '+'){
            // let arr_date = phoneNumberValue.split('+');
            // console.log(arr_date);
            if(countryValue == 'Sri Lanka' && (phoneNumberValue[1] == 9 && phoneNumberValue[2] == 4)){
                $('#phone_number_check').hide();
                phoneNumberError = true;
            }else {
                $('#phone_number_check').show();
                phoneNumberError = false;
                return false;
            }
        }else if(!phoneValidate(phoneNumberValue)){
            $('#phone_number_check').show();
            phoneNumberError = false;
            $('#phone_number_check').html("**Phone number can contain only numbers from 0-9 and + or - sign");
            $('#phone_number_check').css("color","red");
            return false;
        }else{
            $('#phone_number_check').hide();
            phoneNumberError = true;
        }
    }

    //validate height
    $('#height_check').hide();
    let heightError = false;
    $('#height').keyup(function () {
        validateHeight();
    });
    function height_regex_Validate(heighhtValue){
        let regexPattern = new RegExp(/^[0-9]+$/);    // regular expression pattern
        return regexPattern.test(heighhtValue);
    }
    function validateHeight() {
        let heihtValue = $('#height').val();
        if(heihtValue.length == 0){
            $('#height_check').show();
            heightError = false;
            return false;
        }
        else if (!height_regex_Validate(heihtValue)) {
            $('#height_check').show();
            $('#height_check').html("**Your height should be a number");
            $('#height_check').css("color", "red");
            heightError = false;
            return false;
        }else if(heihtValue <= 55 || heihtValue >= 272){
            $('#height_check').show();
            $('#height_check').html("**Your height should be 55cm to 272cm");
            $('#height_check').css("color", "red");
            heightError = false;
            return false;
        }
        else {
            $('#height_check').hide();
            heightError = true;
        }
    }

    //weight validate
    $('#weight_check').hide();
    let weightError = false;
    $('#weight').keyup(function () {
        validateWeight();
    });
    function weight_regex_Validate(weighhtValue){
        let regexPattern = new RegExp(/^[0-9]+$/);    // regular expression pattern
        return regexPattern.test(weighhtValue);
    }
    function validateWeight() {
        let weightValue = $('#weight').val();
        if(weightValue.length == 0){
            $('#height_check').show();
            weightError = false;
            return false;
        }
        else if (!weight_regex_Validate(weightValue)) {
            $('#weight_check').show();
            $('#weight_check').html("**Your weight should be a number");
            $('#weight_check').css("color", "red");
            weightError = false;
            return false;
        }else if(weightValue <= 25 || weightValue >= 150){
            $('#weight_check').show();
            $('#weight_check').html("**Your weight should be 25kg to 150kg");
            $('#weight_check').css("color", "red");
            heightError = false;
            return false;
        }
        else {
            $('#weight_check').hide();
            weightError = true;
        }
    }

    // Validate Email
    const email = document.getElementById('email');
    let emailError =false;

    function email_regex_Validate(emailValue){
        let regexPattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);    // regular expression pattern
        // let regexPattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        return regexPattern.test(emailValue);
    }
    function validateEmail() {
        // let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        // let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // let s = email.value;
        let emailValue = $('#email').val();
        if(emailValue.length == ''){
            $('#email_check').show();
            emailError = false;
            return false;
        }
        else if(!email_regex_Validate(emailValue)){
            $('#email_check').show();
            $('#email_check').html("**Enter valid email");
            $('#email_check').css("color", "red");
            emailError = false;
            return false;
        }
        else{
            // email.classList.add('is-invalid');
            emailError = true;
            $('#email_check').hide();
        }
    }

    // Validate Password
    $('#password_check').hide();
    let passwordError = false;
    $('#reg_password').keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwrdValue = $('#reg_password').val();
        if (passwrdValue.length == '') {
            $('#password_check').show();
            passwordError = false;
            return false;
        }
        else if ((passwrdValue.length < 3) || (passwrdValue.length > 10)) {
            $('#password_check').show();
            $('#password_check').html("**length of your password must be between 3 and 10 and spaces must be unacceptable");
            $('#password_check').css("color", "red");
            passwordError = false;
            return false;
        } else {
            $('#password_check').hide();
            passwordError = true;
        }
    }

    // Validate Confirm Password
    $('#confirm_password_check').hide();
    let confirmPasswordError = false;
    $('#confirm_password').keyup(function () {
        validateConfirmPasswrd();
    });
    function validateConfirmPasswrd() {
        let confirmPasswordValue = $('#confirm_password').val();
        let passwrdValue = $('#reg_password').val();
        if (passwrdValue != confirmPasswordValue) {
            $('#confirm_password_check').show();
            $('#confirm_password_check').html("**Password didn't Match");
            $('#confirm_password_check').css("color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $('#confirm_password_check').hide();
            confirmPasswordError = true;
        }

    }

    // Submitt button

    $('#form_container').submit(function(e){

        validateUsername();
        validateDOB();
        validatePhoneNumber();
        validateEmail();
        validatePassword();
        validateConfirmPasswrd();
        validateHeight();
        validateWeight();
        console.log(usernameError);
        console.log(passwordError);
        console.log(confirmPasswordError);
        console.log(emailError);
        console.log(dobError);
        console.log(phoneNumberError);
        console.log(heightError);
        console.log(weightError);

        if ((usernameError == true) && (passwordError == true) && (confirmPasswordError == true) && (emailError == true) && (dobError == true) && (phoneNumberError == true) && (heightError == true) && (weightError == true)) {
            console.log("Form submit success");
            // xhttp.open("POST","http://localhost:8080/group39_fitbot_war_exploded/MedicalForm/MedicalForm.js");
            // xhttp.send();
            // $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
            location.replace("http://localhost:8080/group39_fitbot_war_exploded/medical");

            // const registerFormRequest = new XMLHttpRequest();
            // registerFormRequest.open('POST',"http://localhost:8080/group39_fitbot_war_exploded/register");
            // const ourData = JSON.parse(registerFormRequest.responseText);
            // console.log(ourData);

            // $('#reg_submit_btn').click(function() {
            //     console.log(ourRequest.responseText);
            // });
            // ourRequest.onload = function(){
            //     console.log(ourRequest.responseText);
            // }
            registerFormRequest.send();
            return true;

        } else {
            e.preventDefault();
            console.log("Form submit unsuccess");
            return false;
        }
    });
});