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


//logout_function
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

var sideBar_links_variable = "#owner_dashboard_implementation";

function page_select(sideBar_links_variable){
  if(sideBar_links_variable == "#owner_dashboard_implementation"){
    $('#owner_dashboard_implementation').hide();
    clear_dashboard_functions("owner_dashboard","owner_dashboard_i","owner_dashboard_text");
    console.log("dashboard");

    //Employees
  }else if(sideBar_links_variable == "#own_employees"){
    $('#own_employees').hide();
    clear_dashboard_functions("owner_employees","owner_employees_i","owner_employees_text");
    console.log("employees");
  }

  else if(sideBar_links_variable == "#own_add_employees"){
    $('#own_add_employees').hide();
    clear_dashboard_functions("owner_employees","owner_employees_i","owner_employees_text");
    console.log("employees");
  }

  //Members
  else if(sideBar_links_variable == "#own_members"){
    $('#own_members').hide();
    clear_dashboard_functions("owner_members","owner_members_i","owner_members_text");
    console.log("members");
  }

  //Branches
  else if(sideBar_links_variable == "#own_branches"){
    $('#own_branches').hide();
    clear_dashboard_functions("owner_branches","owner_branches_i","owner_branches_text");
    console.log("branches");
  }

  //Reports
  else if(sideBar_links_variable == "#own_reports"){
    $('#own_reports').hide();
    clear_dashboard_functions("owner_reports","owner_reports_i","owner_reports_text");
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
  $('#owner_dashboard_implementation').load('http://localhost:8080/group39_fitbot_war_exploded/Owner/Dashboard/dashboard.html #dashboard_owner',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});

var load = [0,0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
  //dashboard
  $('#owner_dashboard').click(function(){
    if(load[0] == 0){
      load[0] += 1;
      console.log(load);
    }else if(sideBar_links_variable == "#owner_dashboard_implementation"){
      return;
    }else {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#owner_dashboard_implementation";
      $('#owner_dashboard_implementation').show();
    }
  });

  // //payments
  $('#owner_employees').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#own_employees";
    
    if(load[6] == 0){
      $(sideBar_links_variable).load('http://127.0.0.1:5500/Owner/Employees/employees.html #employeeview_owner',function(responseTxt, statusTxt, xhr){
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[6] += 1;
    }else{
      $('#own_employees').show();
    }
  });

  $('#owner_members').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#own_members";
    
    if(load[7] == 0){
      $(sideBar_links_variable).load('http://127.0.0.1:5500/Owner/Members/members.html #memberview_owner',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[7] += 1;
    }else{
      $('#own_members').show();
    }
  });


  $('#owner_branches').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#own_branches";
    
    if(load[5] == 0){
      $(sideBar_links_variable).load('http://127.0.0.1:5500/Owner/Branches/branches.html #home-content-branch',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[5] += 1;
    }else{
      $('#own_branches').show();
    }
  });

  
  // $('#owner_add_employees').click(function(){
  //   alert("Sachinka");
  //   // console.log("Faalil");
  //   page_select(sideBar_links_variable);
  //   sideBar_links_variable = "#own_add_employees";
    
  //   if(load[4] == 0){
  //     $(sideBar_links_variable).load('http://127.0.0.1:5500/owner/AddEmployees/employee_add.html #add_employee_view',function(responseTxt, statusTxt, xhr){
      
  //     if(statusTxt == "error")
  //         alert("Error: " + xhr.status + ": " + xhr.statusText);
  //     });
  //     load[4] += 1;
  //   }else{
  //     $('#own_add_employees').show();
  //   }
  // });

//   $('#employeeview_owner').on("click", 'owner_add_employees', function() {
//     alert("You have just clicked on ");
// });

$(function () {
  $(document).on("click", '#owner_add_employees', function () {
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#own_add_employees";

    if(load[4] == 0){
          $("#own_add_employees").load('http://127.0.0.1:5500/Owner/AddEmployees/employee_add.html #add_employee_view',function(responseTxt, statusTxt, xhr){
          
          if(statusTxt == "error")
              alert("Error: " + xhr.status + ": " + xhr.statusText);
          });
          load[4] += 1;
        }else{
          $('#own_add_employees').show();
         } 
  });
});

  $('#owner_reports').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#own_reports";
    
    if(load[3] == 0){
      $(sideBar_links_variable).load('http://127.0.0.1:5500/Owner/Reports/reports.html #report_view_owner',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[3] += 1;
    }else{
      $('#own_reports').show();
    }
  });

  // //Appointments
  // $('#phy_mem_appointments').click(function(){
  //   page_select(sideBar_links_variable);
  //   sideBar_links_variable = "#physical_member_appoinments";
    
  //   if(load[8] == 0){
  //     $(sideBar_links_variable).load('http://127.0.0.1:5500/Physical%20Member/Appoinments/Appoinments.html #appointments_physical',function(responseTxt, statusTxt, xhr){
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