function adm_employees() {
  let anchor_employees = document.getElementById("admin_employees");
  let anchor_employees_i = document.getElementById("admin_employees_i");
  let anchor_employees_text = document.getElementById("admin_employees_text");
  // console.log("mokada meee dashboard");
  anchor_employees.style.backgroundColor = "white";
  anchor_employees_i.style.color = "black";
  anchor_employees_text.style.color = "black";
}

//employeecount function of ajax
function employeecount(){
  $.ajax({
    method:'POST',
    url:"employeecount",
    dataType:'json',
    // contentType:"application/json",
  }).done(function(result){
    $('#instructorcount').html('');
    $('#maintainercount').html('');
    $('#branchmanagercount').html('');
    $('#totalemployee').html('');

    alert(result);
    $.map(result,function(y){
      $('#instructorcount').append(

          `<p>${y.instructor_count}</p>`
      );
      $('#maintainercount').append(

          `<p>${y.maintainer_count}</p>`
      );
      $('#branchmanagercount').append(

          `<p>${y.branch_manager_count}</p>`
      );

      $('#totalemployee').append(

          `<p>${y.instructor_count+y.maintainer_count+y.branch_manager_count}</p>`
      );
    });

    // alert(result);
    // alert("Data is comming babe");
  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });
}

//Function to print the employeetable
function printemployee(){
  $.ajax({
    method:'POST',
    url:"employee",
    data: {
      type: "All"
    },
    // contentType:"application/json",
  }).done(function(result){
    $('#employee_list_table_body').html('');
    document.getElementById("title_employees").innerHTML = "All Employees";
    console.log(result);
    $.map(result,function(x){
      if(x.status=="active") {
        $('#employee_list_table_body').append(
            `<tr class="employee_info"><td>${x.employee_id}</td><td>${x.firstname + ' ' + x.lastname}</td><td>${x.branch_id}</td><td>${x.designation}</td><td>${x.email}</td><td><a onclick="employeeview_popup('${x.employee_id}')"><i class='bx bxs-show bx-tada bx-flip-horizontal view_popup' ></i></a>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>`
        );
      }
    });
    searchemployee();

  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });

}

//Clsoing of Employeevie
function close_employeeview_Popup() {
  $('#employee_view').hide();
}

//Popup of employeeview
function employeeview_popup(name){
  alert(name);
  $.ajax({
    method:'POST',
    url:"employee",
    data : {
        type: "All"
    },
    // contentType:"application/json",
  }).done(function(result){
    $('#title_values').html('');
    $('#employee_name_head').html('');
    $('#remove_button').html('');
    console.log(result);
    $.map(result,function(x){
      if(x.employee_id==name) {
        $('#employee_name_head').append(
            `<h1>${x.firstname + ' ' + x.lastname}</h1>`
        );
        $('#title_values').append(
            `<ul><li>${x.firstname + ' ' + x.lastname}</li><li>${x.nic}</li><li>${x.gender}</li><li>${x.email}</li><li>${x.primarycontact}</li><li>${x.dob}</li><li>24</li><li>${x.branch_id}</li><li>${x.designation}</li></ul>`
        );
        $('#remove_button').append(
            `<input type="button" class ="rem_button" value="Remove" onclick="removeemployee('${x.employee_id}','${x.designation}')">`
        );
      }
    });

  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });


  $('#employee_view').show();
}

function removeemployee(employeeid,employee_type){
  alert(employeeid);
  alert(employee_type);
  alert("Faalil");
  $.ajax({
    method: 'POST',
    url: "removeemployee",
    data: {
      employee_id: employeeid,
      designation:employee_type,
    },
    }).done(function (result) {

    if (result.trim() == 1) {
      Swal.fire({
        icon: 'success',
        title: "Successfully Removed",
        text: '',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Success',
        confirmButtonColor: '#0E2C4B',
        footer: '<a href="#">View Branch</a>'
      });
      $('#employee_view').hide();
      printemployee();
      employeecount();
    }
    if (result.trim() == 0) {
      Swal.fire({
        icon: 'error',
        title: "Cannot be Removed",
        text: 'Some Errors',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again',
        confirmButtonColor: '#0E2C4B',
        // footer: '<a href="#" onclick=">View Employee</a>'
      });
    }

  }).fail(function (a, b, err) {

    alert("Faalil");
    Swal.fire({
      icon: 'error',
      title: "Can't remove...",
      text: 'Something went wrong!',
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again!!!',
      confirmButtonColor: '#0E2C4B',
      footer: '<a>Register again</a>'
    });
    console.log(a, b, err);
  });

}

//Function to print the instructors
function printinstructor(){
  $.ajax({
    method:'POST',
    url:"employee",
    data: {
      type: "Instructor"
    },
    // contentType:"application/json",
  }).done(function(result){
    $('#employee_list_table_body').html('')
    document.getElementById("title_employees").innerHTML = "Instructors";
    console.log(result);
    $.map(result,function(x){
      if(x.status=="active") {
        $('#employee_list_table_body').append(
            `<tr class="employee_info"><td>${x.employee_id}</td><td>${x.firstname + ' ' + x.lastname}</td><td>${x.branch_id}</td><td>${x.designation}</td><td>${x.email}</td><td><a onclick="employeeview_popup('${x.employee_id}')"><i class='bx bxs-show bx-tada bx-flip-horizontal view_popup' ></i></a>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>`
        );
      }
    });
      searchemployee();
  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });

}

//Function to print the instructors
function printmaintainer(){
  $.ajax({
    method:'POST',
    url:"employee",
    data: {
      type: "Maintainer"
    },
    // contentType:"application/json",
  }).done(function(result){
    $('#employee_list_table_body').html('');
    document.getElementById("title_employees").innerHTML = "Maintainers";
    console.log(result);
    $.map(result,function(x){
      if(x.status=="active") {
        $('#employee_list_table_body').append(
            `<tr class="employee_info"><td>${x.employee_id}</td><td>${x.firstname + ' ' + x.lastname}</td><td>${x.branch_id}</td><td>${x.designation}</td><td>${x.email}</td><td><a onclick="employeeview_popup('${x.employee_id}')"><i class='bx bxs-show bx-tada bx-flip-horizontal view_popup' ></i></a>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>`
        );
      }
    });
      searchemployee();
  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });

}

//Function to print the instructors
function printbranchmanager(){
  $.ajax({
    method:'POST',
    url:"employee",
    data: {
      type: "Branch Manager"
    },
    // contentType:"application/json",
  }).done(function(result){
    $('#employee_list_table_body').html('')
    document.getElementById("title_employees").innerHTML = "Branch Managers";
    console.log(result);
    $.map(result,function(x){
      if(x.status=="active") {
        $('#employee_list_table_body').append(
            `<tr class="employee_info"><td>${x.employee_id}</td><td>${x.firstname + ' ' + x.lastname}</td><td>${x.branch_id}</td><td>${x.designation}</td><td>${x.email}</td><td><a onclick="employeeview_popup('${x.employee_id}')"><i class='bx bxs-show bx-tada bx-flip-horizontal view_popup' ></i></a>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>`
        );
      }
    });
      searchemployee();
  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });

}

function searchemployee(){
  $('#search_employee').keyup(function(){
    // alert("yohan2");
    let value = $(this).val().toLowerCase();
    $('.employee_info').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
}

