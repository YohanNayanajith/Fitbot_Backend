function adm_dashboard() {
  let anchor_dashboard = document.getElementById("admin_dashboard");
  let anchor_dashboard_i = document.getElementById("admin_dashboard_i");
  let dashboard_text = document.getElementById("admin_dashboard_text");
  // console.log("mokada meee dashboard");
  anchor_dashboard.style.backgroundColor = "white";
  anchor_dashboard_i.style.color = "black";
  dashboard_text.style.color = "black";
}

// var ctx = document.getElementById("MemberChart");
// // ctx.height=100;

// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// var xValues = ["Phsyical Members", "Virtual Members"];
// var yValues = [55, 49]
// var barColors = [
//   "#b91d47",
//   "#00aba9",
// ];

// new Chart("MemberChart", {
//   type: "doughnut",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "Users"
//     }
//   }
// });