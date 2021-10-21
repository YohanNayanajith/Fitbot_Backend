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


// $(document).ready(function(){
//   $('#click_me').click(function () {
//     $('#right_side_bar_view').load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/RightSidebar/RightSidebar.html #right_side_nav',function(responseTxt, statusTxt, xhr){
//       if(statusTxt == "error")
//         alert("Error: " + xhr.status + ": " + xhr.statusText);
//       });
//   });

  
// });

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

//dashboard
$(document).ready(function(){
  $('#admin_dashboard_implementation').load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Dashboard/dashboard.html #dashboard_admin',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "error")
      alert(`Error: ${xhr.status}: ${xhr.statusText}`);
  });
});

var load = [0,0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
  //dashboard
  $('#admin_dashboard').click(function(){
    if(load[0] == 0){
      load[0] += 1;
      console.log(load);
    }else if(sideBar_links_variable == "#admin_dashboard_implementation"){
      return;
    }else {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#admin_dashboard_implementation";
      $('#admin_dashboard_implementation').show();
    }
  });

  // //payments
  $('#admin_employees').click( function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#adm_employees";
    
    if(load[6] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Employees/employees.html #employeeview_admin',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert(`Error: ${xhr.status}: ${xhr.statusText}`);

      $.ajax({
          method:'POST',
          url:"employee",
          dataType:'json',
          // contentType:"application/json",
        }).done(function(result){
          // const data_object = JSON.parse(result);
          // $.map(result,function(post,i){
          // let total_reps_phy = result.dob;
          // alert(total_reps_phy);

          console.log(result);
          $.map(result,function(x){
            $('#employee_list_table').append(

                `<tr class="employee_info"><td>${x.employee_id}</td><td>${x.firstname+x.lastname}</td><td>${x.branch_name}</td><td>${x.type}</td><td>${x.gender}</td><td>${x.email}</td></tr>`
            );
          });

          // alert(result);
          // alert("Data is comming babe");
        }).fail(function(a,b,err){
          alert("Error");
          console.log(a,b,err);
        });

        $.ajax({
          method:'POST',
          url:"employeecount",
          dataType:'json',
          // contentType:"application/json",
        }).done(function(result){
          // const data_object = JSON.parse(result);
          // $.map(result,function(post,i){
          // let total_reps_phy = result.dob;
          // alert(total_reps_phy);

          console.log(result);
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
      });
      load[6] += 1;
    }else{
      $('#adm_employees').show();
    }
  });

  $('#admin_members').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#adm_members";
    
    if(load[7] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Members/members.html #memberview_admin',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert(`Error: ${xhr.status}: ${xhr.statusText}`);
      });
      load[7] += 1;
    }else{
      $('#adm_members').show();
    }
  });


  $('#admin_branches').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#adm_branches";
    
    if(load[5] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Branches/branches.html #home-content-branch',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert(`Error: ${xhr.status}: ${xhr.statusText}`);
      });
      load[5] += 1;
    }else{
      $('#adm_branches').show();
    }
  });

  
  // $('#admin_add_employees').click(function(){
  //   alert("Sachinka");
  //   // console.log("Faalil");
  //   page_select(sideBar_links_variable);
  //   sideBar_links_variable = "#adm_add_employees";
    
  //   if(load[4] == 0){
  //     $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/AddEmployees/employee_add.html #add_employee_view',function(responseTxt, statusTxt, xhr){
      
  //     if(statusTxt == "error")
  //         alert("Error: " + xhr.status + ": " + xhr.statusText);
  //     });
  //     load[4] += 1;
  //   }else{
  //     $('#adm_add_employees').show();
  //   }
  // });

//   $('#employeeview_admin').on("click", 'admin_add_employees', function() {
//     alert("You have just clicked on ");
// });

$(function () {
  $(document).on("click", '#admin_add_employees', function () {
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#adm_add_employees";

    if(load[4] == 0){
          $("#adm_add_employees").load('http://localhost:8080/group39_fitbot_war_exploded/Admin/AddEmployees/employee_add.html #add_employee_view',function(responseTxt, statusTxt, xhr){
          
          if(statusTxt == "error")
              alert(`Error: ${xhr.status}: ${xhr.statusText}`);
          });

      $(document).on('submit', '#employee_form', function(e) {
        // e.preventDefault();
        // alert("submitted");

        // let designation = (this.designation).val();
        // let employee_id = (this.employee_id).val();
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
      // dataType: "json",
      // contentType:"application/json; charset=utf-8",
    }).done(function (result) {
      alert(result);
      Swal.fire({
        icon: 'error',
        title: "Can't register...",
        text: 'Something went wrong!',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Try Again!',
        confirmButtonColor: '#0E2C4B',
        footer: '<a href="employee">Register again</a>'
      })


    }).fail(function (a, b, err) {

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

          load[4] += 1;
        }else{
          $('#adm_add_employees').show();
         } 
  });
});

  $('#admin_reports').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#adm_reports";
    
    if(load[3] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/Reports/reports.html #report_view_admin',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert(`Error: ${xhr.status}: ${xhr.statusText}`);
      });
      load[3] += 1;
    }else{
      $('#adm_reports').show();
    }
  });

  // //Appointments
  // $('#phy_mem_appointments').click(function(){
  //   page_select(sideBar_links_variable);
  //   sideBar_links_variable = "#physical_member_appoinments";
    
  //   if(load[8] == 0){
  //     $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Appoinments/Appoinments.html #appointments_physical',function(responseTxt, statusTxt, xhr){
  //     if(statusTxt == "error")
  //         alert("Error: " + xhr.status + ": " + xhr.statusText);
  //     });
  //     load[8] += 1;
  //   }else{
  //     $('#physical_member_appoinments').show();
  //   }
  //   //other links
  // });
    
});

//close button - its called in rigtsidebar.html
// function closeNav() {
//   let right_sidebar = document.querySelector(".right_side_nav");
//   console.log("mokada meee");
//   if (right_sidebar.className === "right_side_nav") {
//     right_sidebar.className += "_active";
//     console.log("mokada meee1");
//   } else {
//     right_sidebar.classList.remove = "right_side_nav_active";
//   }
// }