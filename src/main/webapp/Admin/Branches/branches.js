function adm_branches() {
  let anchor_branches = document.getElementById("admin_branches");
  let anchor_branches_i = document.getElementById("admin_branches_i");
  let branches_text = document.getElementById("admin_branches_text");
  // console.log("mokada meee branches");
  anchor_branches.style.backgroundColor = "white";
  anchor_branches_i.style.color = "black";
  branches_text.style.color = "black";
}

function add_new_branch(){
  $('#adm_branches').hide();
  sideBar_links_variable = "#adm_branch_add";

  if(load[10] == 0){
    $(sideBar_links_variable).load('http://localhost:8080/group39_fitbot_war_exploded/Admin/AddBranch/branch_add.html #branch_add',function(responseTxt, statusTxt, xhr){

      if(statusTxt == "error")
        alert(`Error: ${xhr.status}: ${xhr.statusText}`);
    });
    load[10] += 1;
  }else{
    $('#adm_branch_add').show();
  }
}