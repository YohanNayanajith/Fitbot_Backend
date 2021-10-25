$(document).ready(function(){
    // alert('I am ready');
    $('#landing_navBar').load('http://localhost:8080/group39_fitbot_war_exploded/Landing/Navbar/NavBar.html #navbar_landingPage', function(responseTxt, statusTxt, xhr){
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });

    $('#landing_footer').load('http://localhost:8080/group39_fitbot_war_exploded/Landing/Footer/footer.html #footer', function(responseTxt, statusTxt, xhr){
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});