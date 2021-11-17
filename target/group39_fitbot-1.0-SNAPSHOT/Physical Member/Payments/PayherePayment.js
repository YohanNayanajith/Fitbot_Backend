function payments_pay(){
    // md5sig = strtoupper (md5 ( merchant_id + order_id + payhere_amount + payhere_currency + status_code + strtoupper(md5(payhere_secret)) ) );
    $('#payment_popup_details').show();
    // $('#physical_member_payments').css('overflow-x','hidden');
}
function pay_bill_view(){
    $('#after_payment_popup_details').show();
}

function close_payment_details(){
    $('#payment_popup_details').hide();
}
function close_after_payment_details(){
    $('#after_payment_popup_details').hide();
}

//payment from payhere
function payment_cash(){
    //cash payment function
    //send a request to branch manager
}
// function payment_online(){
//     $('#payment_detail_container_form').submit(function(e){
//         alert("form submit");
//         e.preventDefault();
//
//         // md5sig = strtoupper (md5 ( merchant_id + order_id + payhere_amount + payhere_currency + status_code + strtoupper(md5(payhere_secret)) ) )
//         let form_data = $("form").serializeArray();
//         console.log(form_data);
//
//         let data = {};
//         let result_data = {};
//         $.each(form_data, function(i, field){
//             // $("#results").append(field.name + ":" + field.value + " ");
//             data[field.name] = field.value;
//         });
//         console.log("Data"+data);
//
//         $.ajax({
//             method:"POST",
//             url:"https://sandbox.payhere.lk/pay/checkout",
//             data: data,
//             // dataType:"json",
//             // contentType:"application/json",
//             success: function (result){
//                 if(result.status_code == "2"){
//                     alert(result);
//                     alert(result.merchant_id);
//                     alert(result.statusCode);
//                     Swal.fire({
//                         icon: 'success',
//                         title: 'Paid Successfully',
//                         // text: 'Physical Member!',
//                         confirmButtonText:"Ok",
//                         confirmButtonColor: '#0E2C4B',
//                     })
//                     // setTimeout(function() {
//                     //     window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/';
//                     // }, 2000);
//
//                 }else {
//                     alert(result);
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Paid Unsuccessfully!',
//                         text: 'Payment cannot completed!',
//                         confirmButtonText:"Ok",
//                         confirmButtonColor: '#932828',
//                     })
//                 }
//
//             },
//             error: function(error){
//                 alert(error);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Payment Unsuccessfully!',
//                     text: 'Cannot resolve, System issue!!',
//                     confirmButtonText:"Ok",
//                     confirmButtonColor: '#932828',
//                 })
//             }
//         });
//
//         $.ajax({
//             method:"POST",
//             url:"payment",
//             data: data,
//             // dataType:"json",
//             // contentType:"application/json",
//             success: function (result){
//                 if(result.trim() == "1"){
//                     alert(result);
//                     Swal.fire({
//                         icon: 'success',
//                         title: 'Paid Successfully',
//                         // text: 'Physical Member!',
//                         confirmButtonText:"Ok",
//                         confirmButtonColor: '#0E2C4B',
//                     })
//                     // setTimeout(function() {
//                     //     window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/';
//                     // }, 2000);
//
//                 }else {
//                     alert(result);
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Paid Unsuccessfully!',
//                         text: 'Payment cannot completed!',
//                         confirmButtonText:"Ok",
//                         confirmButtonColor: '#932828',
//                     })
//                 }
//
//             },
//             error: function(error){
//                 alert(error);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Payment Unsuccessfully!',
//                     text: 'Cannot resolve, System issue!!',
//                     confirmButtonText:"Ok",
//                     confirmButtonColor: '#932828',
//                 })
//             }
//         });
//
//     });
// }