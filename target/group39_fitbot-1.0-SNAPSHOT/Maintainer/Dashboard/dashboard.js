function maintain_dashboard() {
    let anchor_dashboard = document.getElementById("maintainer_dashboard");
    let anchor_dashboard_i = document.getElementById("maintainer_dashboard_i");
    let anchor_dashboard_text = document.getElementById("maintainer_dashboard_text");
    console.log("mokada meee dashboard");
    anchor_dashboard.style.backgroundColor = "white";
    anchor_dashboard_i.style.color = "black";
    anchor_dashboard_text.style.color = "black";
  }

$(document).ready(function (){
    $('#button1').click(function (){
        // let form_id = $('#login_username').val()
        $.ajax({
            method:'POST',
            url:"maintainerStatus",
            dataType:'json',
            // data(form_id="form_id");

        }).done(function(result){
            // const data_object = JSON.parse(data);
            alert(result);
            if(result==true){

            }else{

            }
        }).fail(function(a,b,err){
            alert("Error");
            console.log(a,b,err)
        });

        // $('#phy_mem_diet_plan').click(function(){

        // });
    });



    $('.viewBtn').click(function (){

    });






});