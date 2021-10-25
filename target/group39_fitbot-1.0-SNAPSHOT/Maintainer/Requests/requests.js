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
  // let form_id_m = "1";
  $.ajax({
    method:'POST',
    url:"maintainerWrite",
    dataType: 'json',
    contentType: "application/json",
  }).done(function (result){

    console.log(result);
    // $.map(result,function(details){
      $('#branch_id_inForm').append(
      '<p>'+result.branch_id+'</p>'
          );
      $('#equipment_type_inForm').append(
      '<p>'+result.equipment_type+'</p>'
          );
      $('#problem_dis').append(
      '<p>'+result.description+'</p>'
          );
      $('#req_date').append(
      '<p>'+result.re_date+'</p>'
          );
      $('#req_time').append(
      '<p>'+result.re_time+'</p>'
          );


    alert("Data is loading now");
  }).fail(function (a,b,err) {
    alert("Data loading error  Shalani");
    console.log(a,b,err);

  });

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


  function submitFormMaintainer() {
    $('#form_maintainer_con').submit(function (e) {
      e.preventDefault();
      // let form_id_m = "1";
      let complet_dis = $('#complet_dis').val();
      let complet_img = $('#complet_img').val();
      let comp_date = $('#comp_date').val();
      let comp_time = $('#comp_time').val();


      // alert(comp_date);

      $.ajax({
        method: 'POST',
        url: "maintainerFormSubmit",
        // contentType: 'application/json; charset=utf-8',
        data: {complet_dis: complet_dis, complet_img: complet_img, comp_date: comp_date, comp_time: comp_time},

        success: function (result) {

          // alert("done success");
          if (result.trim() == "1") {
            alert("done success");
            reloadRequestData();
            $('#maintainer_form input[type="text"],input[type="date"]  input[type="time"], textarea').val('');
            $('#maintainer_form').hide();
            Swal.fire({
              icon: 'success',
              title: 'Successfully Submit',
              text: 'Done!',
              confirmButtonText:"Ok",
              confirmButtonColor: '#0E2C4B',
            })

          }
        },
        fail: function (error) {
          alert(error);
        }


      });
    });
  }

// function submitFormMaintainer(){
//   let form_id_m =1;
//   let complet_dis=$('#complet_dis').val();
//   let complet_img=$('#complet_img').val();
//   let comp_date=$('#comp_date').val();
//   let comp_time=$('#comp_time').val();
//
//
//   alert("call submit");
//
//   $.ajax({
//     method:'POST',
//     url:"maintainerFormSubmit",
//     // contentType: 'application/json; charset=utf-8',
//     data: {form_id_m:form_id_m, complet_dis:complet_dis, complet_img:complet_img,comp_date:comp_date,comp_time:comp_time},
//
//     success:function (result){
//
//       alert("done success");
//     },
//     fail:function (error){
//       alert(error);
//     }
//
//
//   });
//
// }