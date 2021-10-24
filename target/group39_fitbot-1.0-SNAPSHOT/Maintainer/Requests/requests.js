function maintain_requests() {
  let anchor_requests = document.getElementById("maintainer_requests");
  let anchor_requests_i = document.getElementById("maintainer_requests_i");
  let anchor_requests_text = document.getElementById("maintainer_requests_text");
  // console.log("mokada meee requests");
  anchor_requests.style.backgroundColor = "white";
  anchor_requests_i.style.color = "black";
  anchor_requests_text.style.color = "black";
}



// --------------------popup page view---------------------------
function PopupForm(){
  console.log("call popup");
  $('#maintainer_form').show();



}
function close_form_Popup(){
  $('#maintainer_form').hide();
}

function ChangeStatus(){
  console.log("call change status");
  let form_id_my = 1;

}
//
// $("#form_maintainer_con").submit(function (e){
//   alert("call submit");
//   e.preventDefault();
//
// });

function submitFormMaintainer(){
  let form_id_m =1;
  let complet_dis=$('#complet_dis').val();
  let complet_img=$('#complet_img').val();
  let comp_date=$('#comp_date').val();
  let comp_time=$('#comp_time').val();
  console.log("call sumbit faaaaaaaa");
  console.log(complet_dis);
  console.log(comp_date);
  console.log(comp_time);


  alert("call submit");

  $.ajax({
    method:'POST',
    url:"maintainerFormSubmit",
    // contentType: 'application/json; charset=utf-8',
    data: {form_id_m:form_id_m, complet_dis:complet_dis, complet_img:complet_img,comp_date:comp_date,comp_time:comp_time},

    success:function (result){

      alert("done success");
    },
    fail:function (error){
      alert(error);
    }


  });

}