function chart() {

  var xValues = ["Physical Members", "Virtual Members"];
  var yValues = [55, 49];
  var barColors = [
    "#b91d47",
    "#00aba9"
  ];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Members"
      }
    }
  });
}



function adm_dashboard() {
  let anchor_dashboard = document.getElementById("admin_dashboard");
  let anchor_dashboard_i = document.getElementById("admin_dashboard_i");
  let dashboard_text = document.getElementById("admin_dashboard_text");
  // console.log("mokada meee dashboard");
  anchor_dashboard.style.backgroundColor = "white";
  anchor_dashboard_i.style.color = "black";
  dashboard_text.style.color = "black";
}

function employeecount_dashboard(){
  $.ajax({
    method:'POST',
    url:"employeecount",
    dataType:'json',
    // contentType:"application/json",
  }).done(function(result){
    $('#instructorcount_dashboard').html('');
    $('#maintainercount_dashboard').html('');
    $('#branchmanagercount_dashboard').html('');
    console.log(result);
    $.map(result,function(y){
      $('#instructorcount_dashboard').append(

          `<p>${y.instructor_count}</p>`
      );
      $('#maintainercount_dashboard').append(

          `<p>${y.maintainer_count}</p>`
      );
      $('#branchmanagercount_dashboard').append(

          `<p>${y.branch_manager_count}</p>`
      );
    });

    // alert(result);
    // alert("Data is comming babe");
  }).fail(function(a,b,err){
    alert("Error");
    console.log(a,b,err);
  });
}