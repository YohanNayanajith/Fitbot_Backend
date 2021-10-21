function adm_employees() {
  let anchor_employees = document.getElementById("admin_employees");
  let anchor_employees_i = document.getElementById("admin_employees_i");
  let anchor_employees_text = document.getElementById("admin_employees_text");
  // console.log("mokada meee dashboard");
  anchor_employees.style.backgroundColor = "white";
  anchor_employees_i.style.color = "black";
  anchor_employees_text.style.color = "black";
}

$(document).ready(function () {
  $('#employee_form').submit(function (e) {

    // let form_data = $('#form_container').serializeArray();
    // let json_data_form = JSON.stringify(form_data);
    // console.log(json_data_form);
    // alert(json_data_form);


    // alert(form_data);


    $.ajax({
      method: 'POST',
      url: "addemployee",
      data: {
        'designation': designation,
        'employee_id': employee_id,
        'branch_name': branch_name,
        'first_name_employee': first_name_employee,
        'last_name_employee': last_name_employee,
        'gender_employee': gender_employee,
        'email_employee': email_employee,
        'nic_employee': nic_employee,
        'date_of_birth_employee': date_of_birth_employee,
        'address_employee': address_employee,
        'contact_no1_employee': contact_no1_employee,
        'contact_no2_employee': contact_no2_employee
      },
      dataType: "json",
      // contentType:"application/json; charset=utf-8",
    }).done(function (result) {
      alert(result);
      Swal.fire({
        icon: 'error',
        title: "Can't register...",
        text: 'Something went wrong!',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again!',
        confirmButtonColor: '#0E2C4B',
        footer: '<a href="register">Register again</a>'
      })


    }).fail(function (a, b, err) {
      e.preventDefault();
      alert(err);
      Swal.fire({
        icon: 'error',
        title: "Can't register...",
        text: 'Something went wrong!',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again!!!',
        confirmButtonColor: '#0E2C4B',
        footer: '<a href="register">Register again</a>'
      });
      console.log(a, b, err);
    });

  });
});