$(document).ready(function(){
    $('#instructors_landing_container').load('http://localhost:8080/group39_fitbot_war_exploded/Physical%20Member/Instructors/Instructors.html #instructors_physical',function(responseTxt, statusTxt, xhr){
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});