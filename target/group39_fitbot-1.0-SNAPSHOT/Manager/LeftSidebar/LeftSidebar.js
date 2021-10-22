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
//     $('#right_side_bar_view').load('http://localhost:8080/group39_fitbot_war_exploded/Manager/RightSidebar/RightSidebar.html #right_side_nav',function(responseTxt, statusTxt, xhr){
//       if(statusTxt == "error")
//         alert("Error: " + xhr.status + ": " + xhr.statusText);
//       });
//   });
//
//
// });

var sideBar_links_variable = "#manager_dashboard_page";

function page_select(sideBar_links_variable){
  if(sideBar_links_variable == "#manager_dashboard_page"){
    $('#manager_dashboard_page').hide();
    clear_dashboard_functions("man_dashboard","man_dashboard_i","manager_dashboard_page_text");
    console.log("dashboard");

  }else if(sideBar_links_variable == "#manager_member_page"){
    $('#manager_member_page').hide();
    clear_dashboard_functions("man_member","man_member_i","manager_member_page_text");

  }else if(sideBar_links_variable == "#manager_inquiry_page"){
    $('#manager_inquiry_page').hide();
    clear_dashboard_functions("man_inquiry","man_inquiry_i","manager_inquiry_page_text");

  }else if(sideBar_links_variable == "#manager_notices_page"){
    $('#manager_notices_page').hide();
    clear_dashboard_functions("man_notice","man_notice_i","manager_notices_page_text");

  }else if(sideBar_links_variable == "#manager_equipment_page"){
    $('#manager_equipment_page').hide();
    clear_dashboard_functions("man_equipment","man_equipment_i","manager_equipment_page_text");

  }else if(sideBar_links_variable == "#manager_maintainer_request_page"){
    $('#manager_maintainer_request_page').hide();
    clear_dashboard_functions("man_request","man_request_i","manager_maintainer_request_page_text");

  }else if(sideBar_links_variable == "#manager_instructor_page"){
    $('#manager_instructor_page').hide();
    clear_dashboard_functions("man_instructor","man_instructor_i","manager_instructor_page_text");
    console.log("payments");

  }else if(sideBar_links_variable == "#manager_report_page"){
    $('#manager_report_page').hide();
    clear_dashboard_functions("man_report","man_report_i","manager_report_page_text");
  }
  // else if(sideBar_links_variable === "#physical_member_branch_messages"){
  //   $('#physical_member_branch_messages').hide();
  // }else if(sideBar_links_variable == "#physical_member_appoinments"){
  //   $('#physical_member_appoinments').hide();
  //   clear_dashboard_functions("phy_mem_appointments","phy_mem_appointments_i","physical_member_appointments_text");
  //   console.log("appointments");

  // }
  else if(sideBar_links_variable == "#physical_member_settings"){
    $('#physical_member_settings').hide();
  }else if(sideBar_links_variable == "#physical_member_conditions"){
    $('#physical_member_conditions').hide();
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
  $('#manager_dashboard_page').load('http://localhost:8080/group39_fitbot_war_exploded/Manager/BRANCH_MANAGER_DASHBOARD/MANAGER_DASHBOARD.html #home_content_dashboard',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});

var load = [0,0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
  //dashboard
  $('#man_dashboard').click(function(){
    if(load[0] == 0){
      load[0] += 1;
      console.log(load);
    }else if(sideBar_links_variable == "#manager_dashboard_page"){
      return;
    }else {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#manager_dashboard_page";
      $('#manager_dashboard_page').show();
    }
  });

// members
$('#man_member').click(function(){
  page_select(sideBar_links_variable);
  sideBar_links_variable = "#manager_member_page";
  
  if(load[1] == 0){
    $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Manager/BRANCH_MANAGER_MEMBER/MANAGER_MEMBER.html #home_manager_member',function(responseTxt, statusTxt, xhr){
    
    if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    load[1] += 1;
  }else{
    $('#manager_member_page').show();
  }
});



//inquiry
$('#man_inquiry').click(function(){
  page_select(sideBar_links_variable);
  sideBar_links_variable = "#manager_inquiry_page";
  
  if(load[2] == 0){
    $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Manager/BRANCH_MANAGER_INQURIES/MANAGER_INQUIRIES.html #manager_inquiry',function(responseTxt, statusTxt, xhr){
    
    if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    load[2] += 1;
  }else{
    $('#manager_inquiry_page').show();
  }
});


//notice
$('#man_notice').click(function(){
  page_select(sideBar_links_variable);
  sideBar_links_variable = "#manager_notices_page";
  
  if(load[3] == 0){
    $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Manager/BRANCH_MANAGER_NOTICES/MANAGER_NOTICES.html #maintainer_notice_home',function(responseTxt, statusTxt, xhr){
    
    if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    load[3] += 1;
  }else{
    $('#manager_notices_page').show();
  }
});




// equipment
$('#man_equipment').click(function(){
  page_select(sideBar_links_variable);
  sideBar_links_variable = "#manager_equipment_page";
  
  if(load[4] == 0){
    $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Manager/BRANCH_MANAGER_EQUIPMENT/MANAGER_EQUIPMENT.html #manager_equipmentlist',function(responseTxt, statusTxt, xhr){
    
    if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);

      $.ajax({
        method:'POST',
        url:"equipment",
        dataType:'json',
      }).done(function(result){
        console.log(result);
        $.map(result,function(x){
          $('#manager_equipment_table').append(

              `<tr class="manager_equipment_row"><td>${x.equipment_id}</td><td>${x.equipment_type}</td><td>${x.last_modified_date}</td><td>${x.next_maintenance_date}</td><td>${x.purchase_date}</td></tr>`
          );
        });

      }).fail(function(a,b,err){
        alert("Error");
        console.log(a,b,err);
      });

    });
    load[4] += 1;
  }else{
    $('#manager_equipment_page').show();
  }
});



//request
$('#man_request').click(function(){
  page_select(sideBar_links_variable);
  sideBar_links_variable = "#manager_maintainer_request_page";
  
  if(load[5] == 0){
    $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Manager/BRANCH_MANAGER_MAINTAINER_REQUEST/MANAGER_MAINTAINER_REQUEST.html #maintainer_request_home',function(responseTxt, statusTxt, xhr){
    
    if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    load[5] += 1;
  }else{
    $('#manager_maintainer_request_page').show();
  }
});


  //instructors
  $('#man_instructor').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#manager_instructor_page";
    
    if(load[6] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Manager/BRANCH_MANAGER_INSTRUCTOR/MANAGER_INSTRUCTOR.html #instructor_manager_home',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[6] += 1;
    }else{
      $('#manager_instructor_page').show();
    }
  });

  //report
  $('#man_report').click(function(){
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#manager_report_page";
    
    if(load[7] == 0){
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Manager/BRANCH_MANAGER_REPORTS/MANAGER_REPORT.html #manager_report',function(responseTxt, statusTxt, xhr){
      if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[7] += 1;
    }else{
      $('#manager_report_page').show();
    }
    //other links
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