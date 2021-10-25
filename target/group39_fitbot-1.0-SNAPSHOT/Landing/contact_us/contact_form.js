//
// function validateEmail() {
//    let emailValue = $('#email').val();
//    if(emailValue.length == ''){
//       $('#email_check').show();
//       emailError = false;
//       return false;
//    }
//    else if(!email_regex_Validate(emailValue)){
//       $('#email_check').show();
//       $('#email_check').html("**Enter valid email");
//       $('#email_check').css("color", "red");
//       emailError = false;
//       return false;
//    }
//    else{
//       // email.classList.add('is-invalid');
//       emailError = true;
//       $('#email_check').hide();
//    }
// }


//click submit
$(document).ready(function (){
   $('#contact_form_submit') .submit(function (e){
      e.preventDefault();
      let name=$('#name').val();
      let email=$('#email').val();
      let contact=$('#contact').val();
      let message=$('#message').val();

      $.ajax({
         method:'POST',
         url:"contact_us",
         contentType: 'application/json; charset=utf-8',
         data: {name:name, email:email,contact:contact,message:message},

         success:function (result){
         }


      });
   });
});