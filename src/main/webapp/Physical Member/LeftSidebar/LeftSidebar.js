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
  let social_media = document.querySelector(".social_media_icons_side_bar");
  let social_media_active = document.querySelector(".social_media_icons_side_bar_active");
  let width_social_media = document.querySelector(".social_media_icons_width_menu");
  let width_social_media_active = document.querySelector(".social_media_icons_width_menu_active");
  if (sidebar.classList.contains("open")) {
    social_media_active.classList.replace("social_media_icons_side_bar_active","social_media_icons_side_bar");
    width_social_media_active.classList.replace("social_media_icons_width_menu_active","social_media_icons_width_menu");
  } else {
    social_media.className += "_active";
    width_social_media.classList.replace("social_media_icons_width_menu", "social_media_icons_width_menu_active");
    
  }
}

var right_load = 0;

$(document).ready(function(){
  $('#click_me').click(function () {
    if(right_load == 0) {
      $('#right_side_bar_view').load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/RightSidebar/RightSidebar.html #right_side_nav', function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });

    }else {
      right_load++;
    }
  });
});

var sideBar_links_variable = "#dashboard_implementation";

function page_select(sideBar_links_variable){
  if(sideBar_links_variable == "#dashboard_implementation"){
    $('#dashboard_implementation').hide();
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

  }else if(sideBar_links_variable == "#physical_member_settings" || sideBar_links_variable == "top_bar_settings_icon_white"){
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
  // console.log("dashboard link closed");
  // payments_physical.className += "_active";
  full_background_ID.style.backgroundColor = "#0E2C4B";
  dashboard_icon_ID.style.color = "white";
  dashboard_text_ID.style.color = "white";
}

//dashboard
$(document).ready(function(){
  $('#dashboard_implementation').load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Dashboard/Dashboard.html #dashboard_middle',function(responseTxt, statusTxt, xhr){
  if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
  load[0] += 1;
});

var load = [0,0,0,0,0,0,0,0,0,0,0,0];

$(document).ready(function(){
  //dashboard
  $('#phy_mem_dashboard').click(function(){
    if(load[0] == 0){
      load[0] += 1;
      // console.log(load);
    }else if(sideBar_links_variable == "#dashboard_implementation"){
      return;
    }else {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#dashboard_implementation";
      $('#dashboard_implementation').show();
    }
  });

  //Profile
  $('#phy_mem_profile').click(function(){
    if(load[1] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_profile";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Profile/Profile.html #profile_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }
      getRegisterDetails();

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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Instructors/Instructors.html #instructors_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }
        instructorGetData();
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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Messages/Messages.html #messages_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }
      // $('#messages_physical_container_right').hide();
        $('#messages_physical_container_right_header').hide();
        $('#messages_of_physical_member').hide();
        $('#messages_physical_container_right_typing_area').hide();
      selectMemberMessages();
      searchInstructors();

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

      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Workout_Plans/Workout_Plan.html #workout_plan_physical',function(responseTxt, statusTxt, xhr){
        if(statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
        // alert(responseTxt);
        // alert(statusTxt);
        // alert(xhr.workout_id);

        $.ajax({
          method:'POST',
          url:"workout",
          dataType:'json',
          // contentType:"application/json",
        }).done(function(result){
          // const data_object = JSON.parse(result);
          // $.map(result,function(post,i){
          let total_reps_phy = result.total_reps;
          // alert(total_reps_phy);

          // console.log(result);
          $.map(result,function(x){
            $('#workout_container_table').append(

                '<tr class="payment_history_container_row">'+
                  '<td>'+x.exercise+'</td>'+
                  '<td>'+x.workout_type+'</td>'+
                  '<td>'+x.total_reps+'</td>'+
                  '<td>'+x.duration+'</td>'+
                  '<td>'+'<input type="checkbox">'+'</td>'+
                '</tr>'
            );
          });

          // alert(result);
        }).fail(function(a,b,err){
          alert("Error");
          console.log(a,b,err);
        });
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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Diet_Plans/Diet_Plans.html #Diet_Plans_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }

      });
      load[5] += 1;
      $('#after_the_table').show();
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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Payments/Payments.html #payments_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error"){
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }
        displayPaymentsData();
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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Reports/Reports.html #reports_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }

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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/BranchMessages/BranchMessages.html #branch_messages_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }

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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Appoinments/Appoinments.html #appointments_physical',function(responseTxt, statusTxt, xhr){
      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }

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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Settings/Settings.html #settings_physical',function(responseTxt, statusTxt, xhr){

      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }

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

  //top bar settings
  $('#top_bar_settings_icon_white').click(function(){
    if(load[10] == 0){
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#physical_member_settings";
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Settings/Settings.html #settings_physical',function(responseTxt, statusTxt, xhr){

        if(statusTxt == "error") {
          alert("Error: " + xhr.status + ": " + xhr.statusText);
        }

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
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Conditions/Conditions.html #conditions_physical',function(responseTxt, statusTxt, xhr){
      
      if(statusTxt == "error") {
        alert("Error: " + xhr.status + ": " + xhr.statusText);
      }

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
// http://localhost:8080/group39_fitbot_war_exploded/physicalMember#

var user_name;

$(document).ready(function(){

  $.ajax({
    method:"POST",
    url:"memberDetails",
    dataType:"json",
    // contentType:"application/json",
    success: function (result){
      $('#dashboard_header_member').append(
          '<h1>'+'Hello '+result.first_name+'!!!'+'</h1>'
      );
      console.log(result);
    },
    error: function(error){
      console.log(error+"edit profile");
    }
  });

  $.ajax({
    method:'POST',
    url:"membership",
    dataType:'json',

  }).done(function(data){
    // const data_object = JSON.parse(data);
    // alert(data);
    $('#dashboard_mambership_first_text').append(
        '<span class="dashboard_mambership_second_text"><b>'+data.membership_category+'</b></span>'
    );

    $('#dashboard_mambership_first_text1').append(
        '<span class="dashboard_mambership_second_text"><b>'+data.membership_fee+'</b></span>'
    );
    let date = data.expiry_day;
    let currectdate = date["year"]+"-"+date["month"]+"-"+date["day"];

    $('#dashboard_mambership_first_text2').append(
        '<span class="dashboard_mambership_second_text"><b>'+currectdate+'</b></span>'
    );

    $('#money').append(
        '<span><b>'+'Rs. '+data.renewal+'</b></span>'
    );
    // alert(data);
  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err)
  });

});

// logout
function log_out_function(){
  $.ajax({
    method:"POST",
    url:"logout",
    data:"",
    success: function(result){
      if(result == "1"){

        Swal.fire({
          title: 'Do you want to log out?',
          // text: "Registration is not completed,You won't be able to revert this!",
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

        // setTimeout(function() {
        //   Swal.fire({
        //     icon: 'success',
        //     title: 'Successfully Logout',
        //     // text: 'Password is successfully updated!',
        //     confirmButtonText:"Ok",
        //     confirmButtonColor: '#0E2C4B',
        //   })
        // }, 2000);
        // console.log("logout is correct");
        // window.location.href = "http://localhost:8080/group39_fitbot_war_exploded";
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

//notifications

$(document).ready(function(){
  $('#notification_messages_big_div').hide();
  $('#new_btn_notify').hide();
  $('#top_bar_notification_white_icon').click(function(){
    $('#notification_messages_big_div').toggle();

    $('#new_btn_notify').hide();
    $('#notification_messages_box_i').click(function(){
      $('#new_btn_notify').toggle();
    });
  });
});

function getRegisterDetails(){
  $.ajax({
    method:"POST",
    url:"memberDetails",
    dataType:"json",
    // contentType:"application/json",
    success: function (result){
      // alert(result);
      const date = new Date();
      let year_age = date.getFullYear() - result.date_of_birth['year'];
      $('#profile_physical_container_member').append(
          '<span>'+result.first_name+" "+result.last_name+'</span><br>'
      );
      $('#profile_physical_container_member').append(
          '<span>'+'Age - '+year_age+'</span><br>'
      );
      $('#profile_physical_container_member').append(
          '<span>'+'Height - '+result.height+' Kg'+'</span><br>'
      );
      $('#profile_physical_container_member').append(
          '<span>'+'Weight - '+result.weight+' cm'+'</span><br>'
      );

      console.log(result);
    },
    error: function(error){
      console.log(error+"edit profile");
    }
  });
}

//instructors

function instructorGetData(){
  $.ajax({
    method:'POST',
    url:"physicalInstructor",
    dataType:'json',
    // contentType:"application/json",
  }).done(function(result){
    console.log(result);
    // alert("This is physical instructor");
    $.map(result,function(x){

      $('#instructors_physical_container_first').append(
          '<div class="instructors_physical_container_detail" id="instructors_physical_container_detail_1">'+
          '<img src='+'"'+ x["profile_image_url"]+'"'+'alt="instructor image">'+

          '<div class="instructors_physical_container_detail_con" id="instructors_physical_container_detail_con">'+
          '<h1>'+ x["first_name"]+' '+x["last_name"] +'</h1>'+
          '<div class="instructors_physical_container_detail_line">'+'</div>'+
          '<p class="instructors_physical_container_detail_title">'+x["main_skill"]+'</p>'+
          '</div>'+

          '<div class="instructors_physical_container_detail_icon">'+
          '<a href="#"><i class="bx bxl-facebook-circle bx-tada"></i></a>'+
          '<a href="#"><i class="bx bxl-instagram-alt bx-tada"></i></a>'+
          '<a href="#"><i class="bx bxl-youtube bx-tada"></i></a>'+
          '</div>'+
          '<div class="instructors_physical_container_detail_eye_icon">'+
          '<a onClick="open_instructor_details()">'+'<i class="bx bx-show bx-tada">'+'</i>'+'</a>'+
          '</div>'+
          '</div>'
      );
    });

    // alert(result);
  }).fail(function(a,b,err){
    alert("Physical Instructor Error");
    console.log(a,b,err);
  });
}

//messages
function selectMemberMessages(){
  $.ajax({
    method:"POST",
    url:"memberDetails",
    dataType:"json",
    // contentType:"application/json",
    success: function (result){
      // alert(result);
      $('#messages_physical_container_left_fullname').append(
          '<h1>'+result["first_name"]+' '+result["last_name"]+'</h1>'
      );
      console.log(result);
    },
    error: function(error){
      console.log(error+"edit profile");
    }
  });
}
function searchInstructors(){
    // $('#messages_physical_container_right').hide();

    $.ajax({
        method:'POST',
        url:"physicalInstructor",
        dataType:'json',
        // contentType:"application/json",
    }).done(function(result){
        console.log(result);
        // alert("This is physical instructor");
        $.map(result,function(x){
          let instructor_id = x["instructor_id"];
          console.log(instructor_id);
          let str_ins_id = instructor_id.slice(4).toString();
          let number = parseInt(str_ins_id);
          console.log(number);
          console.log(str_ins_id);

            $('#messages_physical_container_left').append(
                '<div class="messages_physical_container_left_my_chats" onClick="selected_instructor_physical('+number+')">'+
                '<div class="messages_physical_container_left_my_chats_image">'+
                '<img src='+'"'+ x["profile_image_url"]+'"'+' alt="instructor image">'+
                '</div>'+
                '<div>'+
                '<div class="instructor_search_data_physical">'+ x["first_name"]+' '+x["last_name"] +'</div>'+
                '<div>'+'dumy messages ...'+'</div>'+
                '</div>'+
                '<div>'+
                '<div>13:15</div>'+
                '</div>'+
                '</div>'
            );
        });

        // alert(result);
    }).fail(function(a,b,err){
        alert("Physical Instructor Error");
        console.log(a,b,err);
    });
}

//payments
function displayPaymentsData(){
  $.ajax({
    method:'POST',
    url:"membership",
    dataType:'json',

  }).done(function(data){
    // const data_object = JSON.parse(data);
    // alert(data);
    let date = data.expiry_day;
    let currectdate = date["year"]+"-"+date["month"]+"-"+date["day"];
    $('#payment_text').append(
        '<span class="total_payble">Total Payble</span><br>'+
      '<span class="payble_balance">'+'Rs. '+data.renewal+'</span><br>'+
      '<span class="payble_date">Pay before '+ currectdate+'</span>'
    );
    if(parseInt(data.renewal) == 0){
      $('#payhere-payment').unbind("click");
      $('#payhere-payment').unbind("mouseenter mouseleave");
      // $('#payhere-payment').attr("disabled", true);
      // $('#payhere-payment').prop("disabled", true);
      // $('#payhere-payment').css("background-color", "2px solid grey");
      $('#payhere-payment').css("background-color", "grey");
    }
  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err)
  });

  $.ajax({
    method:'POST',
    url:"paymentDetails",
    dataType:'json',
    // contentType:"application/json",
  }).done(function(result){
    console.log(result);
    let paymentId = 0;
    // let currectdate = x["year"]+"-"+date["month"]+"-"+date["day"];
    // let new_expire_date_1 = "";
    $.map(result,function(x){

      $('#payment_history_container_table').append(
          '<tr class="payment_history_container_row">'+
            '<td>'+x.previous_expire_date["year"]+"-"+x.previous_expire_date["month"]+"-"+x.previous_expire_date["day"]+'</td>'+
            '<td>'+x.currency+'</td>'+
            '<td>'+x.payment_method+'</td>'+
            '<td>'+x.payment_amount+'</td>'+
            '<td><a href="#" class="view_bill_button" onClick="pay_bill_view()">VIEW BILL</a></td>'+
          '</tr>'
      );

      if(paymentId < x.payment_id){
        paymentId = x.payment_id;
      }

    });
    $.map(result,function(x){
      if(paymentId == x.payment_id){
          $('#payment_date_details').append(
              '<span class="previous_payment_date">Next Payment Date</span><br>'+
              '<span class="previous_payment_date_format">'+x.new_expire_date["year"]+"-"+x.new_expire_date["month"]+"-"+x.new_expire_date["day"]+'</span><br>'+
              '<span class="previous_payment_date_details">Last payment '+ x.previous_expire_date["year"]+"-"+x.previous_expire_date["month"]+"-"+x.previous_expire_date["day"]+'</span>'
          );
      }
    });
  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });

}