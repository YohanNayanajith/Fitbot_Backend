$(document).ready(function() {
    $('#virtual_experience_text').hide();
    $('#physical_experience_text').hide();

    $('#physical_experience').hover(function(){
        $('#physical_experience_text').show();
        $('#physical_experience_image').css("opacity", "0.4");
    }, function(){
        $('#physical_experience_image').css("opacity", "1");
        $('#physical_experience_text').hide();
    });

    $('#virtual_experience').hover(function(){
        $('#virtual_experience_text').show();
        $('#virtual_experience_image').css("opacity", "0.4");
    }, function(){
        $('#virtual_experience_image').css("opacity", "1");
        $('#virtual_experience_text').hide();
    });
});