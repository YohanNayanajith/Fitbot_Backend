function Workout_plan_dashboard(){
    let anchor_workout = document.getElementById("phy_mem_workout");
    let anchor_workout_i = document.getElementById("phy_mem_workout_i");
    let workout_text = document.getElementById("physical_member_workout_text");
    anchor_workout.style.backgroundColor = "white";
    anchor_workout_i.style.color = "black";
    workout_text.style.color = "black";
}
// alert("workout");

function virtual_workoutplan_open(){
    $('#virtual_workout_packages').show();
}

function close_virtual_workoutplan_Popup(){
    $('#virtual_workout_packages').hide();
}
function physical_workoutplan_open(){
    $('#physical_workout_packages').show();
}
function close_physical_workoutplan_Popup(){
    $('#physical_workout_packages').hide();
}