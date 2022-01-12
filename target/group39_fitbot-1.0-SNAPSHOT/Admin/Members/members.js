function adm_members() {
  let anchor_members = document.getElementById("admin_members");
  let anchor_members_i = document.getElementById("admin_members_i");
  let anchor_members_text = document.getElementById("admin_members_text");
  // console.log("mokada meee dashboard");
  anchor_members.style.backgroundColor = "white";
  anchor_members_i.style.color = "black";
  anchor_members_text.style.color = "black";
}

function banning(){
  $("#banning_reason").show();
}

//Popup of eachmemberview
function memberview_popup(memberid){
  alert(memberid);
  $.ajax({
    method:'POST',
    url:"adminmember",
    dataType:'json',
    // data : {
    //   type: "All"
    // },
    // contentType:"application/json",
  }).done(function(result){
    $('#member_title_values').html('');
    $('#member_name_head').html('');
    $('#ban_button').html('');
    $.map(result,function(x){
      if(x.member_id==memberid) {
        $('#member_name_head').append(
            `<h1>${x.first_name + ' ' + x.last_name}</h1>`
        );
        $('#member_title_values').append(
            `<ul><li>${x.first_name + ' ' + x.last_name}</li><li>${x.gender}</li><li>${x.contact_no}</li><li>${x.email}</li><li>${x.branch_name}</li><li>${x.type}</li><li>${x.membership}</li><li>${x.due_date["day"] + '/'+x.due_date["month"] + '/'+x.due_date["year"]}</li></ul>`
        );
        $('#ban_button').append(
            ` <input type="button" class =" banned_button" value="Ban" onclick="banning()">`
        );
      }
    });

  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });


  $('#member_view').show();
}

//Clsoing of Employeevie
function close_memberview_Popup() {
  $('#member_view').hide();
}

//Function to print the memberstable
function printmember(){
  $.ajax({
    method:'POST',
    url:"adminmember",
    dataType:'json',
    // data: {
    //   type: "All"
    // },
    // contentType:"application/json",
  }).done(function(result){
    $('#member_list_table_body').html('');
    // document.getElementById("title_employees").innerHTML = "ALL Employees";
    console.log(result);
    $.map(result,function(x){
        $('#member_list_table_body').append(
            `<tr class="member_info"><td>${x.member_id}</td><td>${x.first_name + ' ' + x.last_name}</td><td>${x.type}</td><td>${x.branch_name}</td><td>${x.membership}</td><td>${x.due_date["day"] + '/'+x.due_date["month"] + '/'+x.due_date["year"]}</td><td><a onclick="memberview_popup('${x.member_id}')"><i class='bx bxs-show bx-tada bx-flip-horizontal view_popup' ></i></a>&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>`
        );

    });
    searchmember();

  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });

}

function searchmember(){
  $('#search_member').keyup(function(){
    // alert("yohan2");
    let value = $(this).val().toLowerCase();
    $('.member_info').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
}
