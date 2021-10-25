function adm_employees() {
  let anchor_employees = document.getElementById("admin_employees");
  let anchor_employees_i = document.getElementById("admin_employees_i");
  let anchor_employees_text = document.getElementById("admin_employees_text");
  // console.log("mokada meee dashboard");
  anchor_employees.style.backgroundColor = "white";
  anchor_employees_i.style.color = "black";
  anchor_employees_text.style.color = "black";
}

// function adm_employees_add(){
//     page_select(sideBar_links_variable);
//     sideBar_links_variable = "#adm_add_employees";
//
//     if(load[4] == 0){
//           $("#adm_add_employees").load('http://localhost:8080/group39_fitbot_war_exploded/Admin/AddEmployees/employee_add.html #add_employee_view',function(responseTxt, statusTxt, xhr){
//             // $("#validation_employee_id").hide();
//             // $("#validation_branch").hide();
//             // $("#validation_first_name").hide();
//             // $("#validation_last_name").hide();
//             // $("#validation_address").hide();
//             // $("#validation_email").hide();
//             // $("#validation_nic").hide();
//             // $("#validation_contactno1").hide();
//             // $("#validation_contactno2").hide();
//             // $("#validation_dob").hide();
//           if(statusTxt == "error")
//               alert(`Error: ${xhr.status}: ${xhr.statusText}`);
//           });
//
//
//
//       $(document).on('submit', '#employee_form', function(e) {
//     //     e.preventDefault();
//     //     // alert("submitted");
//     //
//     //     let designation = $("#designation").val();
//     //     let employee_id = $("#employee_id").val();
//     //     let branch_name = $("#branch_name").val();
//     //     let first_name_employee = $("#first_name_employee").val();
//     //     let last_name_employee = $("#last_name_employee").val();
//     //     let gender_employee =$("#gender_employee").val();
//     //     let email_employee =$("#email_employee").val();
//     //     let nic_employee =$("#nic_employee").val();
//     //     let date_of_birth_employee = $("#date_of_birth_employee").val();
//     //     let address_employee = $("#date_of_birth_employee").val();
//     //     let contact_no1_employee =$("#contact_no1_employee").val();
//     //     let contact_no2_employee =$("#contact_no2_employee").val();
//     //
//     //     //   let employee_id_error=false;
//     //     //   let branch_name_error =false;
//     //     //   let first_name_error =false;
//     //     //   let last_name_error=false;
//     //     //   let email_error=false;
//     //     //   let nic_error=false;
//     //     //   let dob_error=false;
//     //     //   let address_error=false;
//     //     //   let contactno1_error=false;
//     //     //   let contactno2_error=false;
//     //     //
//     //     //   //Branch_name validation
//     //     // if(branch_name.length == "" && designation!="maintainer"){
//     //     //   // alert("faalil");
//     //     //   $("#validation_branch").show();
//     //     //   branch_name_error =true;
//     //     // }
//     //     // else if (branch_name.length != "" && designation=="maintainer"){
//     //     //   $('#validation_branch').html("**No Branch for Maintainer");
//     //     //   $('#validation_branch').css("color", "red");
//     //     //   $("#validation_branch").show();
//     //     //   branch_name_error =true;
//     //     // }
//     //     // else {
//     //     //   $("#validation_branch").hide();
//     //     // }
//     //     //
//     //     // //validation of employee_id
//     //     // if(employee_id.length == ""){
//     //     //   $("#validation_employee_id").show();
//     //     //   employee_id_error=true;
//     //     // }
//     //     // else if (employee_id.length !=7 )
//     //     // {
//     //     //   $('#validation_employee_id').html("**length of the employee id must be 7");
//     //     //   $('#validation_employee_id').css("color", "red");
//     //     //   $("#validation_employee_id").show();
//     //     //   employee_id_error=true;
//     //     // }
//     //     // else {
//     //     //   $("#validation_employee_id").hide();
//     //     // }
//     //     //
//     //     // //validation of firstname
//     //     // if(first_name_employee.length == ""){
//     //     //   $("#validation_first_name").show();
//     //     //     first_name_error =true;
//     //     // }
//     //     // else {
//     //     //   $("#validation_first_name").hide();
//     //     // }
//     //     //
//     //     // //validation of lastname
//     //     // if(last_name_employee.length == ""){
//     //     //   $("#validation_last_name").show();
//     //     //   last_name_error=true;
//     //     // }
//     //     // else {
//     //     //   $("#validation_last_name").hide();
//     //     // }
//     //     //
//     //     // //validation of email
//     //     // if(email_employee.length == ""){
//     //     //   $("#validation_email").show();
//     //     //   email_error=true;
//     //     // }
//     //     // else if (!email_pattern_Validate(email_employee)){
//     //     //   $('#validation_email').show();
//     //     //   $('#validation_email').html("**Enter valid email");
//     //     //   $('#validation_email').css("color", "red");
//     //     //   email_error = true;
//     //     //
//     //     // }
//     //     // else {
//     //     //   $("#validation_email").hide();
//     //     // }
//     //     //
//     //     // //validation of nic
//     //     // if(nic_employee.length == ""){
//     //     //   $("#validation_nic").show();
//     //     //   nic_error=true;
//     //     // }
//     //     // // else if (nic_employee.length !=10 || nic_employee.length !=12 )
//     //     // // {
//     //     // //   $('#validation_nic').html("**length of the nic must be 10 or 12");
//     //     // //   $('#validation_nic').css("color", "red");
//     //     // //   $("#validation_nic").show();
//     //     // //   nic_error=true;
//     //     // // }
//     //     // else {
//     //     //   $("#validation_nic").hide();
//     //     // }
//     //
//     //   //Full validation
//     //   //   if(employee_id_error==true || branch_name_error==true || first_name_error==true || last_name_error==true || email_error==true || nic_error==true || dob_error==true)
//     //   //   {
//     //   //     return false;
//     //   //   }
//     //
//     //     $.ajax({
//     //   method: 'POST',
//     //   url: "addemployee",
//     //   data: {
//     //     designation: designation,
//     //     employee_id: employee_id,
//     //     branch_name: branch_name,
//     //     first_name_employee: first_name_employee,
//     //     last_name_employee: last_name_employee,
//     //     gender_employee: gender_employee,
//     //     email_employee: email_employee,
//     //     nic_employee: nic_employee,
//     //     date_of_birth_employee: date_of_birth_employee,
//     //     address_employee: address_employee,
//     //     contact_no1_employee: contact_no1_employee,
//     //     contact_no2_employee: contact_no2_employee
//     //   },
//     //   // dataType: "json",
//     //   // contentType:"application/json; charset=utf-8",
//     // }).done(function (result) {
//     //
//     //   if(result =="1") {
//     //     $('#employee_form input[type="text"],input[type="email"],input[type="date"]').val('');
//     //     Swal.fire({
//     //       icon: 'success',
//     //       title: "Successfully Added",
//     //       text: 'Employee Added!',
//     //       confirmButtonText: '<i class="fa fa-thumbs-up"></i> Success',
//     //       confirmButtonColor: '#0E2C4B',
//     //       footer: '<a href="#">View Employee</a>'
//     //     });
//     //   }
//     //       if(result =="0") {
//     //         Swal.fire({
//     //           icon: 'error',
//     //           title: "Cannot be Added",
//     //           text: 'Check for Primary Values',
//     //           confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again',
//     //           confirmButtonColor: '#0E2C4B',
//     //           // footer: '<a href="#" onclick=">View Employee</a>'
//     //         });
//     //       }
//     //
//     // }).fail(function (a, b, err) {
//     //
//     //   alert("Faalil");
//     //   Swal.fire({
//     //     icon: 'error',
//     //     title: "Can't register...",
//     //     text: 'Something went wrong!',
//     //     confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again!!!',
//     //     confirmButtonColor: '#0E2C4B',
//     //     footer: '<a>Register again</a>'
//     //   });
//     //   console.log(a, b, err);
//     // });
//
//   });
//
//           load[4] += 1;
//         }else{
//           $('#adm_add_employees').show();
//          }
//   }

