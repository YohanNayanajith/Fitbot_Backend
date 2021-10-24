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


var sideBar_links_variable = "#maintainer_dashboard_implementation";

function page_select(sideBar_links_variable){
  if(sideBar_links_variable == "#maintainer_dashboard_implementation"){
    $('#maintainer_dashboard_implementation').hide();
    clear_dashboard_functions("maintainer_dashboard","maintainer_dashboard_i","maintainer_dashboard_text");
    console.log("dashboard");

    //Maintainer Requests
  }else if(sideBar_links_variable == "#maintain_requests"){
    $('#maintain_requests').hide();
    clear_dashboard_functions("maintainer_requests","maintainer_requests_i","maintainer_requests_text");
    console.log("requests");
  }

  //Equipments
  else if(sideBar_links_variable == "#maintain_equipments"){
    $('#maintain_equipments').hide();
    clear_dashboard_functions("maintainer_equipments","maintainer_equipments_i","maintainer_equipments_text");
    console.log("Equipments");
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

var load = [0,0,0,0,0,0,0,0,0,0,0];


//dashboard
$(document).ready(function(){
  $('#maintainer_dashboard_implementation').load('http://localhost:8080/group39_fitbot_war_exploded/Maintainer/Dashboard/dashboard.html #dashboard_maintainer', function (responseTxt, statusTxt, xhr) {
    load[0] += 1;
    if (statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});


//dashboard
$(document).ready(function (){
  $('#maintainer_dashboard').click(function (){
    if (load[0] == 0) {
      load[0] += 1;
      console.log(load);

    } else if (sideBar_links_variable == "#maintainer_dashboard_implementation") {
      return;
    } else {
      page_select(sideBar_links_variable);
      sideBar_links_variable = "#maintainer_dashboard_implementation";
      $('#maintainer_dashboard_implementation').show();
    }
  });


  // Maintainer Requests
  $('#maintainer_requests').click(function () {
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#maintain_requests";

    if (load[1] == 0) {
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Maintainer/Requests/requests.html #maintain_requests_view', function (responseTxt, statusTxt, xhr) {

        $.ajax({
          method:'POST',
          url:"maintainerRequest",
          dataType: 'json',
          contentType: "application/json",
        }).done(function (result){
          // const data_object = JSON.resp(result);

          // let arr = [0,0,0,0,0];
          // let count_num = 0;
          $.map(result,function (x){
            if(x.ststus == "New"){
              $('#maintain_requ_tab').append(
              '<tr class="request_details_row" id="request_details_row">' +
              '<td>' + x.branch_id + '</td>' +
              '<td>' + x.equipment_type + '</td>' +
              '<td>' + x.re_date + '</td>' +
              '<td>' + x.re_time + '</td>' +
              '<td>' + x.ststus + '</td>' +
              '<td>' + '<div class="button"><input type="button" id="button1" onclick="ChangeStatus()"><input type="button" id="button2"></div>' + '</td>' +
              '<td>' + '<a value="View more" class="viewBtn"  id= "viewBtn" onclick="PopupForm()">View more</a>'+ '</td>' +
              '</tr>'
                  );
              // count_num++;
              // arr.add(x.branch_id);
              // let id = document.getElementById('request_details_row');
              // $('#complet_dis').append("<p>"+x.branch_id+"</p>");

            }else{
              $('#maintain_requ_tab').append(
              '<tr class="request_details_row">' +
              '<td>' + x.branch_id + '</td>' +
              '<td>' + x.equipment_type + '</td>' +
              '<td>' + x.re_date + '</td>' +
              '<td>' + x.re_time + '</td>' +
              '<td>' + x.ststus + '</td>' +
              '<td>' + '<p></p>' + '</td>' +
              '<td>' + '<a value="View more" class="viewBtn"  id= "viewBtn" onclick="PopupForm()">View more</a>'+ '</td>' +
              '</tr>'
                  );

            }

          });
          alert("Data is loading now");
        }).fail(function (a,b,err) {
          alert("Data loading error  Shalani");
          console.log(a,b,err);

        });

        if (statusTxt == "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      });
      load[1] += 1;
    } else {
      $('#maintain_requests').show();
    }
  });


//Maintainer Equipments
  $('#maintainer_equipments').click(function () {
    page_select(sideBar_links_variable);
    sideBar_links_variable = "#maintain_equipments";

    if (load[2] == 0) {
      $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Maintainer/Equipments/equipments.html #equipment_view_maintainer', function (responseTxt, statusTxt, xhr) {

        if (statusTxt == "error") {
          alert("Error: " + xhr.status + ": " + xhr.statusText);
        }
      });
      load[2] += 1;
    } else {
      $('#maintain_equipments').show();
    }

  });

});

// $('#button1').on('click', ()=>{
//
//   ChangeStatus();
//
// })

// function ChangeStatus(){
//   alert("Shalani aaaaaaaaaa");
//
//     // alert("check allll");
//     // let form_id = $('#login_username').val()
//
//     $.ajax({
//       method:'POST',
//       url:"maintainerStatus",
//       // dataType:'json',
//       data: {form_id:1},
//       // data(form_id="form_id");
//
//     }).done(function(result){
//       // const data_object = JSON.parse(data);
//       alert(result);
//       if(result==true){
//
//       }else{
//
//       }
//     }).fail(function(a,b,err){
//       alert("Error");
//       console.log(a,b,err)
//     });
//
//     // $('#phy_mem_diet_plan').click(function(){
//
//     // });
//
// }
//



