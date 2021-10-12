//country selector
// $(function () {
//     $("#country").change(function() {
//         var val = $(this).val();
//         var text = $("#country option:selected").text();
//         $("#selected_country").html(val + '<br>' + text);
//     });
// });

console.log("Iam back");

// client-side form validate
function regFormValidate(frm) {
    // read form data
    let dob = frm.date_of_birth.value;
    let phoneNo = frm.phone_number.value;
    let country = frm.selected_country.value;
    let password = frm.reg_password.value;
    let confirmPassword = frm.confirm_password.value;
    let membershipType = frm.membership_type.value;
    let membershipCategory = frm.membership_category.value;
    let height = frm.height.value;
    let weight = frm.weight.value;
    let flag = true;

    // client side form validation logic
    const date = new Date();
    let year_age = date.getFullYear() - dob.getFullYear();
    let month_age = date.getMonth() - dob.getMonth();
    let date_age = date.getDate() - dob.getDate();

    if((year_age >= 14 && year_age <= 80)){
        alert("Person age must be between 14 to 80");
        frm.date_of_birth.focus();
        console.log("Age verify")
        flag = false;
    }
    if(!(password === confirmPassword)){
        alert("Password and confirm password must be equal");
        frm.confirm_password.focus();
        flag = false;
    }
    if(!(height >= 80 && height <= 250)){
        alert("Person height must be between 80cm to 250cm");
        let height_value = document.getElementById("height");
        height_value.style.borderColor = "red";
        frm.height.focus();
        flag = false;
    }
    if(!(weight >= 28 && weight <= 150)){
        alert("Person weight must be between 28kg to 150kg");
        let weight_value = document.getElementById("weight");
        weight_value.style.borderColor = "red";
        frm.weight.focus();
        flag = false;
    }

    console.log(dob);
    console.log(phoneNo);
    console.log(country);
    console.log(password);
    console.log(confirmPassword);
    console.log(membershipType);
    console.log(membershipCategory);
    console.log(height);
    console.log(weight);


    return flag;
    // true => form is error free
    // false => form validation errors
}