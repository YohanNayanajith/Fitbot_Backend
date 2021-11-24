function physical_member_messages(){
    let message_physical = document.getElementById("phy_mem_messages");
    let message_physical_i = document.getElementById("phy_mem_messages_i");
    let message_physical_text = document.getElementById("physical_member_messages_text");
    message_physical.style.backgroundColor = "white";
    message_physical_i.style.color = "black";
    message_physical_text.style.color = "black";
}

function searchInstructor(){
    var arr = ["yohan","Nayanajith","Sachinka","Faalil"];
    $("#messages_physical_container_left_search_text_input").on("keyup", function() {
        // var value = $(this).val().toLowerCase();
        // $("#myTable tr").filter(function() {
        //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        // });

        //https://www.w3schools.com/jquery/jquery_filters.asp
    });
}

