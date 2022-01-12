
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});



searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});


// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if(sidebar.classList.contains("open")){
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  }else {
    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
  }
}

function visibleSocialMedia(){
  var social_media = document.querySelector(".social_media_icons_side_bar");
  var social_media_active = document.querySelector(".social_media_icons_side_bar_active");
  var width_social_media = document.querySelector(".social_media_icons_width_menu");
  var width_social_media_active = document.querySelector(".social_media_icons_width_menu_active");
  if (sidebar.classList.contains("open")) {
    social_media_active.classList.replace("social_media_icons_side_bar_active","social_media_icons_side_bar");
    width_social_media_active.classList.replace("social_media_icons_width_menu_active","social_media_icons_width_menu");
  } else {
    social_media.className += "_active";
    width_social_media.classList.replace("social_media_icons_width_menu", "social_media_icons_width_menu_active");

  }
}




var sideBar_links_variable = "#admin_dashboard_implementation";

function page_select(sideBar_links_variable){
  if(sideBar_links_variable == "#admin_dashboard_implementation"){
    $('#admin_dashboard_implementation').hide();
    clear_dashboard_functions("admin_dashboard","admin_dashboard_i","admin_dashboard_text");
    console.log("dashboard");

    //Employees
  }else if(sideBar_links_variable == "#adm_employees"){
    $('#adm_employees').hide();
    clear_dashboard_functions("admin_employees","admin_employees_i","admin_employees_text");
    console.log("employees");
  }

  else if(sideBar_links_variable == "#adm_add_employees"){
    $('#adm_add_employees').hide();
    clear_dashboard_functions("admin_employees","admin_employees_i","admin_employees_text");
    console.log("employees");
  }

  //Members
  else if(sideBar_links_variable == "#adm_members"){
    $('#adm_members').hide();
    clear_dashboard_functions("admin_members","admin_members_i","admin_members_text");
    console.log("members");
  }

  //Branches
  else if(sideBar_links_variable == "#adm_branches"){
    $('#adm_branches').hide();
    clear_dashboard_functions("admin_branches","admin_branches_i","admin_branches_text");
    console.log("branches");
  }

  else if(sideBar_links_variable == "#adm_branch_add"){
    $('#adm_branch_add').hide();
    clear_dashboard_functions("admin_branches","admin_branches_i","admin_branches_text");
    console.log("branches");
  }


  //Reports
  else if(sideBar_links_variable == "#adm_reports"){
    $('#adm_reports').hide();
    clear_dashboard_functions("admin_reports","admin_reports_i","admin_reports_text");
    console.log("reports");
  }
  
}

function clear_dashboard_functions(full_background,dashboard_icon,dashboard_text) {
  // let payments_physical = document.querySelector(".payments_physical");
  let full_background_ID = document.getElementById(full_background);
  let dashboard_icon_ID = document.getElementById(dashboard_icon);
  let dashboard_text_ID = document.getElementById(dashboard_text);
  console.log("dashboard link closed");
  // payments_physical.className += "_active";
  full_background_ID.style.backgroundColor = "#0E2C4B";
  dashboard_icon_ID.style.color = "white";
  dashboard_text_ID.style.color = "white";
}

//logout function
function log_out_function(){
  $.ajax({
    method:"POST",
    url:"logout",
    data:"",
    success: function(result){
      alert(result);
      if(result == "1"){
        Swal.fire({
          title: 'Do you want to log out?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0E2C4B',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, log out!'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "http://localhost:8080/group39_fitbot_war_exploded/login";
          }else if (result.isDenied){
            // Swal.fire('Changes are not saved', '', 'info')
            console.log("Log out cancel");
          }
        })
      }else {
        console.log("Something went wrong");
        setTimeout(function() {
          Swal.fire({
            icon: 'error',
            title: 'Try Again',
            text: 'Logout unsuccessfully!',
            confirmButtonText:"Ok",
            confirmButtonColor: '#932828',
          })
        }, 2000);
      }
    },
    error: function(error){
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Try Again',
        text: 'Logout unsuccessfully!',
        confirmButtonText:"Ok",
        confirmButtonColor: '#932828',
      })
    }
  });
}

//dashboard
$(document).ready(function(){
  load[0] += 1;
  $('#admin_dashboard_implementation').load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Dashboard/dashboard.html #dashboard_admin',function(responseTxt, statusTxt, xhr){
    if(statusTxt == "error")
      alert(`Error: ${xhr.status}: ${xhr.statusText}`);
    employeecount_dashboard();
    chart();
  });
});


var load = [0,0,0,0,0,0,0,0,0,0,0];

$(document).ready(function() {
  //dashboard
  $('#admin_dashboard').click(function () {
    if (load[0] == 0) {
      load[0] += 1;
      console.log(load);
    } else if (sideBar_links_variable == "#admin_dashboard_implementation") {
      return;
    } else {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#admin_dashboard_implementation";
      $('#admin_dashboard_implementation').show();
    }
  });


  //admin_members
  $('#admin_members').click(function () {
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#adm_members";

    if (load[7] == 0) {
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Members/members.html #memberview_admin', function (responseTxt, statusTxt, xhr) {
          printmember();
        $('#member_view').hide();
        if (statusTxt == "error")
          alert(`Error: ${xhr.status}: ${xhr.statusText}`);
      });
      load[7] += 1;
    } else {
      $('#adm_members').show();
    }
  });


  $('#admin_branches').click(function () {
    if (sideBar_links_variable === "#adm_branch_add") {
      sideBar_links_variable = "#adm_branches";
      $('#adm_branch_add').hide();
    } else if (sideBar_links_variable !== "#adm_branches") {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#adm_branches";
    }

    if (load[5] == 0) {
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Branches/branches.html #home-content-branch', function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "error")
          alert(`Error: ${xhr.status}: ${xhr.statusText}`);

        printbranches();
        accord();
      });
      load[5] += 1;
    } else {
      $('#adm_branches').show();
    }
  });

  //Function to view addbranches form
  $(function () {
    $(document).on("click", '#add_newbranch', function () {
      $('#adm_branches').hide();
      sideBar_links_variable = "#adm_branch_add";

      if (load[10] == 0) {
        $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/AddBranch/branch_add.html #branch_add', function (responseTxt, statusTxt, xhr) {
                        $("#validation_branch_id").hide();
                        $("#validation_branch_name").hide();
                        $("#validation_branch_email").hide();
                        $("#validation_branch_address").hide();
                        $("#validation_branchcontactno1").hide();
                        $("#validation_branchcontactno2").hide();

          if (statusTxt == "error")
            alert(`Faalil: ${xhr.status}: ${xhr.statusText}`);
        });

        $(document).on('submit', '#branch_form', function (e) {
            e.preventDefault();
            let branch_id = $("#branch_id").val();
            let branch_name =$("#branch_name").val();
            let branch_address=$("#branch_address").val();
            let branch_email = $("#branch_email").val();
            let contactno1_branch = $("#contactno1_branch").val();
            let contactno2_branch =$("#contactno2_branch").val();
            let branch_pic = $("#branch_id").val();


            let branch_id_error=false;
            let branch_name_error=false;
            let branch_address_error=false;
            let branch_email_error=false;
            let contactno1_branch_error=false;
            let contactno2_branch_error=false;
            let branch_pic_error=false;

            //validation of branchid
            if (branch_id.length=="")
            {
              $("#validation_branch_id").show();
                  branch_id_error=true;
            }
            else
            {
              $("#validation_branch_id").hide();
            }

            //validation of branchname
            if (branch_name.length=="")
            {
              $("#validation_branch_name").show();
                  branch_name_error=true;
            }
            else
            {
              $("#validation_branch_name").hide();
            }

            //validation of branchemail
            if (branch_email.length=="")
            {
              $("#validation_branch_email").show();
              branch_email_error=true;
            }
            else
            {
              $("#validation_branch_email").hide();
            }

            //validation of branchaddress
            if (branch_address.length=="")
            {
              $("#validation_branch_address").show();
              branch_address_error=true;
            }
            else
            {
              $("#validation_branch_address").hide();
            }

            //validation of primary contact
            if (contactno1_branch.length == "") {
              $("#validation_branchcontactno1").show();
                  contactno1_branch_error = true;

            } else {
              $("#validation_branchcontactno1").hide();
            }

            //validation of secondary contact
            if (contactno2_branch.length == "") {
              $("#validation_branchcontactno2").show();
                  contactno2_branch_error = true;
            } else {
              $("#validation_branchcontactno2").hide();
            }


          //Full validation
          if (branch_id_error == true || branch_name_error == true || branch_email_error == true || branch_pic_error== true || branch_email_error == true || contactno1_branch_error == true || contactno2_branch_error== true ) {
            return false;
          }




          $.ajax({
            method: 'POST',
            url: "addbranch",
            data: {
              branch_id : branch_id,
              branch_name : branch_name,
              branch_address : branch_address,
              branch_email : branch_email,
              contactno1_branch : contactno1_branch,
              contactno2_branch : contactno2_branch,
              branch_pic : branch_pic

            },
          }).done(function (result) {

            if (result.trim() == 1) {
              $('#branch_form input[type="text"],input[type="email"],input[type="date"]').val('');
              Swal.fire({
                icon: 'success',
                title: "Successfully Added",
                text: 'Branch Added!',
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Success',
                confirmButtonColor: '#0E2C4B',
                footer: '<a href="#">View Branch</a>'
              });
            }
            if (result.trim() == 0) {
              Swal.fire({
                icon: 'error',
                title: "Cannot be Added",
                text: 'Check for Primary Values',
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again',
                confirmButtonColor: '#0E2C4B',
                // footer: '<a href="#" onclick=">View Employee</a>'
              });
            }

          }).fail(function (a, b, err) {

            alert("Faalil");
            Swal.fire({
              icon: 'error',
              title: "Can't register...",
              text: 'Something went wrong!',
              confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again!!!',
              confirmButtonColor: '#0E2C4B',
              footer: '<a>Register again</a>'
            });
            console.log(a, b, err);
          });
        });
        load[10] += 1;
      } else {
        $('#adm_branch_add').show();
      }

    });
  });


//employees
    $('#admin_employees').click(function () {
      if (sideBar_links_variable === "#adm_add_employees") {
        sideBar_links_variable = "#adm_employees";
        $('#adm_add_employees').hide();
      } else if (sideBar_links_variable !== "#adm_employees") {
        page_select(sideBar_links_variable);
        sideBar_links_variable = "#adm_employees";
      }

      if (load[6] == 0) {
        $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Employees/employees.html #employeeview_admin', function (responseTxt, statusTxt, xhr) {
          $('#employee_view').hide();
          if (statusTxt == "error")
            alert(`Error: ${xhr.status}: ${xhr.statusText}`);
          printemployee();
          employeecount();

        });
        load[6] += 1;
      } else {
        $('#adm_employees').show();

      }
    });

    //Function to view add employee form
    $(function () {
      $(document).on("click", '#admin_add_employees', function () {
        $('#adm_employees').hide();
        sideBar_links_variable = "#adm_add_employees";

        if (load[4] == 0) {
          $("#adm_add_employees").load('http://localhost:8080/group39_fitbot_war_exploded/Admin/AddEmployees/employee_add.html #add_employee_view', function (responseTxt, statusTxt, xhr) {
            $("#validation_employee_id").hide();
            $("#validation_branch").hide();
            $("#validation_first_name").hide();
            $("#validation_last_name").hide();
            $("#validation_address").hide();
            $("#validation_email").hide();
            $("#validation_nic").hide();
            $("#validation_contactno1").hide();
            $("#validation_contactno2").hide();
            $("#validation_dob").hide();
            if (statusTxt == "error")
              alert(`Error: ${xhr.status}: ${xhr.statusText}`);
          });


          $(document).on('submit', '#employee_form', function (e) {
            alert("Faalil");
            e.preventDefault();
            // alert("submitted");

            let designation = $("#designation").val();
            let employee_id = $("#employee_id").val();
            let branch_name = $("#branch_name").val();
            let first_name_employee = $("#first_name_employee").val();
            let last_name_employee = $("#last_name_employee").val();
            let gender_employee = $("#gender_employee").val();
            let email_employee = $("#email_employee").val();
            let nic_employee = $("#nic_employee").val();
            let date_of_birth_employee = $("#date_of_birth_employee").val();
            let address_employee = $("#address_employee").val();
            let contact_no1_employee = $("#contact_no1_employee").val();
            let contact_no2_employee = $("#contact_no2_employee").val();
            let status = "active";

            let employee_id_error = false;
            let branch_name_error = false;
            let first_name_error = false;
            let last_name_error = false;
            let email_error = false;
            let nic_error = false;
            let dob_error = false;
            let address_error = false;
            let contactno1_error = false;
            let contactno2_error = false;

            //Branch_name validation
            if (branch_name.length == "" && designation != "maintainer") {
              // alert("faalil");
              $("#validation_branch").show();
              branch_name_error = true;
            } else {
              $("#validation_branch").hide();
            }

            //validation of employee_id
            if (employee_id.length == "") {
              $("#validation_employee_id").show();
              employee_id_error = true;
            } else if (employee_id.length != 7) {
              $('#validation_employee_id').html("**length of the employee id must be 7");
              $('#validation_employee_id').css("color", "red");
              $("#validation_employee_id").show();
              employee_id_error = true;
            } else {
              $("#validation_employee_id").hide();
            }

            //validation of firstname
            if (first_name_employee.length == "") {
              $("#validation_first_name").show();
              first_name_error = true;
            } else {
              $("#validation_first_name").hide();
            }

            //validation of lastname
            if (last_name_employee.length == "") {
              $("#validation_last_name").show();
              last_name_error = true;
            } else {
              $("#validation_last_name").hide();
            }

            //validation of email
            if (email_employee.length == "") {
              $("#validation_email").show();
              email_error = true;
            } else {
              $("#validation_email").hide();
            }

            //validation of nic
            if (nic_employee.length == "") {
              $("#validation_nic").show();
              nic_error = true;
            } else if ((nic_employee.length != 10) == (nic_employee.length != 12)) {
              $('#validation_nic').html("**length of the nic must be 10 or 12");
              $('#validation_nic').css("color", "red");
              $("#validation_nic").show();
              nic_error = true;
            } else {
              $("#validation_nic").hide();
            }

            //validation of dob
            if (date_of_birth_employee.length == 0) {
              $("#validation_dob").show();
              dob_error = true;
            } else if (age_validation(date_of_birth_employee)) {
              $('#validation_dob').html("**age must be between 20 and 55");
              $('#validation_dob').css("color", "red");
              $("#validation_dob").show();
              dob_error = true;
            } else {
              $("#validation_dob").hide();
            }

            //validation of address
            if (address_employee.length == "") {
              $("#validation_address").show();
              address_error = true;
            } else {
              $("#validation_address").hide();
            }

            //validation of primary contact
            if (contact_no1_employee.length == "") {
              $("#validation_contactno1").show();
              contactno1_error = true;
            } else {
              $("#validation_contactno1").hide();
            }

            //validation of secondary contact
            if (contact_no2_employee.length == "") {
              $("#validation_contactno2").show();
              contactno2_error = true;
            } else {
              $("#validation_contactno2").hide();
            }


            //Full validation
            if (employee_id_error == true || branch_name_error == true || first_name_error == true || last_name_error == true || email_error == true || nic_error == true || dob_error == true || address_error == true || contactno1_error == true || contactno2_error == true) {
              return false;
            }

            $.ajax({
              method: 'POST',
              url: "addemployee",
              data: {
                designation: designation,
                employee_id: employee_id,
                branch_name: branch_name,
                first_name_employee: first_name_employee,
                last_name_employee: last_name_employee,
                gender_employee: gender_employee,
                email_employee: email_employee,
                nic_employee: nic_employee,
                date_of_birth_employee: date_of_birth_employee,
                address_employee: address_employee,
                contact_no1_employee: contact_no1_employee,
                contact_no2_employee: contact_no2_employee,
                status:status,
              },
            }).done(function (result) {

              if (result == "1") {
                $('#employee_form input[type="text"],input[type="email"],input[type="date"]').val('');
                Swal.fire({
                  icon: 'success',
                  title: "Successfully Added",
                  text: 'Employee Added!',
                  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Success',
                  confirmButtonColor: '#0E2C4B',
                  footer: '<a href="#">View Employee</a>'
                });
                employeecount();
                printemployee();
              }
              if (result == "0") {
                Swal.fire({
                  icon: 'error',
                  title: "Cannot be Added",
                  text: 'Check for Primary Values',
                  confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again',
                  confirmButtonColor: '#0E2C4B',
                  // footer: '<a href="#" onclick=">View Employee</a>'
                });
              }

            }).fail(function (a, b, err) {

              alert("Faalil");
              Swal.fire({
                icon: 'error',
                title: "Can't register...",
                text: 'Something went wrong!',
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again!!!',
                confirmButtonColor: '#0E2C4B',
                footer: '<a>Register again</a>'
              });
              console.log(a, b, err);
            });

          });

          load[4] += 1;
        } else {
          $('#adm_add_employees').show();
        }
      });
    });

//Admin_Reports
    $('#admin_reports').click(function () {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#adm_reports";

      if (load[3] == 0) {
        $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Reports/reports.html #report_view_admin', function (responseTxt, statusTxt, xhr) {

          if (statusTxt == "error")
            alert(`Error: ${xhr.status}: ${xhr.statusText}`);
        });
        load[3] += 1;
      } else {
        $('#adm_reports').show();
      }
    });


  });


  function age_validation(DOBValue) {
    let arr_date = DOBValue.split('-');
    const date = new Date();
    let year_age = date.getFullYear() - arr_date[0];

    if (year_age < 20 || year_age > 55) {
      $('#validation_dob').html("**age must be between 20 and 55");
      $('#validation_dob').css("color", "red");
      $("#validation_dob").show();
      return true;
    }
  }


