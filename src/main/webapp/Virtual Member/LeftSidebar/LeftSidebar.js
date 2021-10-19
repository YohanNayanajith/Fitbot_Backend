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
    $('#right_side_bar_view').load('http://localhost:8080/group39_fitbot_war_exploded/RightSidebar/RightSidebar.html #right_side_nav',function(responseTxt, statusTxt, xhr){
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
  });

  
});

var sideBar_links_variable = "#dashboard_virtual";

function page_select(sideBar_links_variable){
  if(sideBar_links_variable == "#dashboard_virtual"){
    $('#dashboard_virtual').hide();
    clear_dashboard_functions("phy_mem_dashboard","phy_mem_dashboard_i","physical_member_dashboard_text");
    console.log("dashboard");

  }else if(sideBar_links_variable == "#physical_member_profile"){
    $('#physical_member_profile').hide();
    clear_dashboard_functions("phy_mem_profile","phy_mem_profile_i","physical_member_profile_text");

  }else if(sideBar_links_variable == "#physical_member_instructors"){
    $('#physical_member_instructors').hide();
    clear_dashboard_functions("phy_mem_instructors","phy_mem_instructors_i","physical_member_instructors_text");

  }else if(sideBar_links_variable == "#physical_member_messages"){
    $('#physical_member_messages').hide();
    clear_dashboard_functions("phy_mem_messages","phy_mem_messages_i","physical_member_messages_text");

  }else if(sideBar_links_variable == "#physical_member_workout_plans"){
    $('#physical_member_workout_plans').hide();
    clear_dashboard_functions("phy_mem_workout","phy_mem_workout_i","physical_member_workout_text");

  }else if(sideBar_links_variable == "#physical_member_diet_plans"){
    $('#physical_member_diet_plans').hide();
    clear_dashboard_functions("phy_mem_diet_plan","phy_mem_diet_plan_i","physical_member_diet_plan_text");

  }else if(sideBar_links_variable == "#physical_member_payments"){
    $('#physical_member_payments').hide();
    clear_dashboard_functions("phy_mem_payments","phy_mem_payment_i","physical_member_payment_text");
    console.log("payments");

  }else if(sideBar_links_variable == "#physical_member_reports"){
    $('#physical_member_reports').hide();
    clear_dashboard_functions("phy_mem_reports","phy_mem_reports_i","physical_member_reports_text");

  }else if(sideBar_links_variable === "#physical_member_branch_messages"){
    $('#physical_member_branch_messages').hide();
    clear_dashboard_functions("phy_mem_branch_messages","phy_mem_branch_messages_i","physical_member_branch_messages_text");

  }else if(sideBar_links_variable == "#physical_member_appoinments"){
    $('#physical_member_appoinments').hide();
    clear_dashboard_functions("phy_mem_appointments","phy_mem_appointments_i","physical_member_appointments_text");
    console.log("appointments");

  }else if(sideBar_links_variable == "#physical_member_settings"){
    $('#physical_member_settings').hide();
    clear_dashboard_functions("phy_mem_settings","phy_mem_settings_i","physical_member_settings_text");

  }else if(sideBar_links_variable == "#physical_member_conditions"){
    $('#physical_member_conditions').hide();
    clear_dashboard_functions("phy_mem_conditions","phy_mem_conditions_i","physical_member_conditions_text");

  }
}
function dashboard_right_sidebar_colors(full_background,dashboard_icon,dashboard_text){
  let full_background_ID = document.getElementById(full_background);
  let dashboard_icon_ID = document.getElementById(dashboard_icon);
  let dashboard_text_ID = document.getElementById(dashboard_text);
  console.log("dashboard link closed");
  // payments_physical.className += "_active";
  full_background_ID.style.backgroundColor = "white";
  dashboard_icon_ID.style.color = "#0E2C4B";
  dashboard_text_ID.style.color = "#0E2C4B";
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
var load = [0,0,0,0,0,0,0,0,0,0,0,0];

//dashboard
$(document).ready(function(){
  $("#dashboard_virtual").load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Dashboard/Dashboard.html #dashboard_middle',function(responseTxt, statusTxt, xhr){
    load[0] += 1;
    if(statusTxt == "error")
      alert("Error: shalani" + xhr.status + ": " + xhr.statusText);
  });
});

$(document).ready(function(){
  //dashboard
  $('#phy_mem_dashboard').click(function(){
    if(load[0] == 0){
      load[0] += 1;
      console.log(load);
    }else if(sideBar_links_variable == "#dashboard_virtual"){
      return;
    }else {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#dashboard_virtual";
      $('#dashboard_virtual').show();
    }
  });

  //Profile
  $('#phy_mem_profile').click(function(){
    if(load[1] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_profile";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Profile/Profile.html #profile_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[1] += 1;
    }else if(sideBar_links_variable == "#physical_member_profile"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_profile";
      $('#physical_member_profile').show();
    }
  });

  //Instructors
  $('#phy_mem_instructors').click(function(){
    if(load[2] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_instructors";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Instructors/Instructors.html #instructors_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[2] += 1;
    }else if(sideBar_links_variable == "#physical_member_instructors"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_instructors";
      $('#physical_member_instructors').show();
    }
  });

  //Messages
  $('#phy_mem_messages').click(function(){
    if(load[3] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_messages";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Messages/Messages.html #messages_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[3] += 1;
    }else if(sideBar_links_variable == "#physical_member_messages"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_messages";
      $('#physical_member_messages').show();
    }
  });

  // Workout Plans
  $('#phy_mem_workout').click(function(){
    if(load[4] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_workout_plans";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/WorkoutPlans/Workout_Plan.html #workout_plan_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[4] += 1;
    }else if(sideBar_links_variable == "#physical_member_workout_plans"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_workout_plans";
      $('#physical_member_workout_plans').show();
    }
  });

  //Diet Plans
  $('#phy_mem_diet_plan').click(function(){
    if(load[5] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_diet_plans";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/DietPlans/Diet_Plans.html #Diet_Plans_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[5] += 1;
    }else if(sideBar_links_variable == "#physical_member_diet_plans"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_diet_plans";
      $('#physical_member_diet_plans').show();
    }
  });

  //payments
  $('#phy_mem_payments').click(function(){
    if(load[6] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_payments";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Payments/Payments.html #payments_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[6] += 1;
    }else if(sideBar_links_variable == "#physical_member_payments"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_payments";
      $('#physical_member_payments').show();
    }
  });

  //Reports
  $('#phy_mem_reports').click(function(){
    if(load[7] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_reports";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Reports/Reports.html #reports_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[7] += 1;
    }else if(sideBar_links_variable == "#physical_member_reports"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_reports";
      $('#physical_member_reports').show();
    }
  });

  //Branch Messages
  $('#phy_mem_branch_messages').click(function(){
    if(load[8] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_branch_messages";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Messages/Messages.html #messages_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[8] += 1;
    }else if(sideBar_links_variable == "#physical_member_branch_messages"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_branch_messages";
      $('#physical_member_branch_messages').show();
    }
  });

  //Appointments
  $('#phy_mem_appointments').click(function(){
    if(load[9] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_appoinments";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Appoinments/Appoinments.html #appointments_physical',function(responseTxt, statusTxt, xhr){
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[9] += 1;
    }else if(sideBar_links_variable == "#physical_member_appoinments"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_appoinments";
      $('#physical_member_appoinments').show();
    }
  });

  //settings
  $('#phy_mem_settings').click(function(){
    if(load[10] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_settings";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Settings/Settings.html #settings_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[10] += 1;
    }else if(sideBar_links_variable == "#physical_member_settings"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_settings";
      $('#physical_member_settings').show();
    }
  });

  //conditions
  $('#phy_mem_conditions').click(function(){
    if(load[11] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_conditions";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Virtual%20Member/Conditions/Conditions.html #conditions_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[11] += 1;
    }else if(sideBar_links_variable == "#physical_member_conditions"){
      return;
    }else{
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_conditions";
      $('#physical_member_conditions').show();
    }
  });
    
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