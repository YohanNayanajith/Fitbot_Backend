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


$(document).ready(function(){
  $('#click_me').click(function () {
    $('#right_side_bar_view').load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/RightSidebar/RightSidebar.html #right_side_nav',function(responseTxt, statusTxt, xhr){
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
  });

  
});

var sideBar_links_variable = "#ins_dashboard_implementation";

function page_select(sideBar_links_variable){
  if(sideBar_links_variable == "#ins_dashboard_implementation"){
    $('#ins_dashboard_implementation').hide();
    clear_dashboard_functions("ins_dashboard","ins_dashboard_i","Instructor_dashboard_text");
    console.log("dashboard");

  }else if(sideBar_links_variable == "#Instructor_profile_page"){
    $('#Instructor_profile_page').hide();
    clear_dashboard_functions("ins_profile","ins_profile_i","Instructor_profile_text");

  }else if(sideBar_links_variable == "#Instructor_student_page"){
    $('#Instructor_student_page').hide();
    clear_dashboard_functions("ins_student","ins_student_i","Instructor_mystudents_text");

  }else if(sideBar_links_variable == "#Instructor_chat_page"){
    $('#Instructor_chat_page').hide();
    clear_dashboard_functions("ins_chat","ins_chat_i","Instructor_chat_text");

  }else if(sideBar_links_variable == "#Instructor_appoinment_page"){
    $('#Instructor_appoinment_page').hide();
    clear_dashboard_functions("ins_appoinment","ins_appoinment_i","Instructor_appoinments_text");

  }else if(sideBar_links_variable == "#Instructor_workout_page"){
    $('#Instructor_workout_page').hide();
    clear_dashboard_functions("ins_workout","ins_workout_i","Instructor_workoutplan_text");

  }else if(sideBar_links_variable == "#Instructor_diet_page"){
    $('#Instructor_diet_page').hide();
    clear_dashboard_functions("ins_diet","ins_diet_i","Instructor_dietplan_text");
    // console.log("payments");

  }else if(sideBar_links_variable == "#Instructor_report_page"){
    $('#Instructor_report_page').hide();
    clear_dashboard_functions("ins_report","ins_report_i","Instructor_report_text");
  }
  // else if(sideBar_links_variable === "#physical_member_branch_messages"){
  //   $('#physical_member_branch_messages').hide();
  // }else if(sideBar_links_variable == "#physical_member_appoinments"){
  //   $('#physical_member_appoinments').hide();
  //   clear_dashboard_functions("phy_mem_appointments","phy_mem_appointments_i","physical_member_appointments_text");
  //   console.log("appointments");

  // }else if(sideBar_links_variable == "#physical_member_settings"){
  //   $('#physical_member_settings').hide();
  // }else if(sideBar_links_variable == "#physical_member_conditions"){
  //   $('#physical_member_conditions').hide();
  // }
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
  $('#ins_dashboard_implementation').load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/INSTRUCTOR_DASHBOARD/instructor_dashboard.html #home_dashboard',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});


var load = [0,0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
  //dashboard
  $('#ins_dashboard').click(function(){
    if(load[0] == 0){
      load[0] += 1;
      console.log(load);
    }else if(sideBar_links_variable == "#ins_dashboard_implementation"){
      return;
    }else {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#ins_dashboard_implementation";
      $('#ins_dashboard_implementation').show();
    }
  });


  //profile
  $('#ins_profile').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#Instructor_profile_page";
    
    if(load[1] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/INSTRUCTOR_PROFILE/ins.html #home_content_profile',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[1] += 1;
    }else{
      $('#Instructor_profile_page').show();
    }
  });


//student
  $('#ins_student').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#Instructor_student_page";
    
    if(load[2] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/INSTRUCTOR_MY_STUDENT/ins_MYSTUDENT.html #home_section_instructor_students',function(responseTxt, statusTxt, xhr){
        console.log("sachinkaaaaaaaaaaaa");
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[2] += 1;
    }else{
      $('#Instructor_student_page').show();
    }
  });


  //chat
  $('#ins_chat').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#Instructor_chat_page";
    
    if(load[3] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/INSTRUCTOR_CHAT/instructor_chat.html #chat_home',function(responseTxt, statusTxt, xhr){
        console.log("sachinkaaaaaaaaaaaa");
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[3] += 1;
    }else{
      $('#Instructor_chat_page').show();
    }
  });


 
  //appoinments
  $('#ins_appoinment').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#Instructor_appoinment_page";
    
    if(load[4] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/INSTRUCTOR_MY_APPOINMENTS/ins_MYAPPOINMENTS.html #home_content_appoinment',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[4] += 1;
    }else{
      $('#Instructor_appoinment_page').show();
    }
  });


// workout
 $('#ins_workout').click(function(){
  page_select(sideBar_links_variable);
  sideBar_links_variable = "#Instructor_workout_page";
  
  if(load[5] == 0){
    $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/INSTRUCTOR_WORKOUT_PLAN/instructor_workout_plan.html #home_content_workout_sachi',function(responseTxt, statusTxt, xhr){
    
    if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    load[5] += 1;
  }else{
    $('#Instructor_workout_page').show();
  }
});

// diet
$('#ins_diet').click(function(){
  page_select(sideBar_links_variable);
  sideBar_links_variable = "#Instructor_diet_page";
  
  if(load[6] == 0){
    $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/INSTRUCTOR_DIET_PLAN/instructor_diet_plan.html #home_content_diet_sachi',function(responseTxt, statusTxt, xhr){
    
    if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    load[6] += 1;
  }else{
    $('#Instructor_diet_page').show();
  }
});



 // reports
  $('#ins_report').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#Instructor_report_page";
    
    if(load[7] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Instructor/INSTRUCTOR_REPORT/instructor_report.html #report_home',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[7] += 1;
    }else{
      $('#Instructor_report_page').show();
    }
  });

  //Appointments
  // $('#phy_mem_appointments').click(function(){
  //   page_select(sideBar_links_variable);
  //   sideBar_links_variable = "#physical_member_appoinments";
    
  //   if(load[8] == 0){
  //     $(sideBar_links_variable).load('http://127.0.0.1:5500/Instructor/Appoinments/Appoinments.html #appointments_physical',function(responseTxt, statusTxt, xhr){
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
function closeNav() {
  let right_sidebar = document.querySelector(".right_side_nav");
  console.log("mokada meee");
  if (right_sidebar.className === "right_side_nav") {
    right_sidebar.className += "_active";
    console.log("mokada meee1");
  } else {
    right_sidebar.classList.remove = "right_side_nav_active";
  }
}