alert("Notify call2");
$(document).ready(function(){
    alert("Notify call2");
    $.ajax({
        method:"POST",
        url:"https://sandbox.payhere.lk/merchant/v1/oauth/token",
        // data: payment,
        // dataType:"json",
        Authorization: "Basic NE9WeDNhRzhqV3k0SkFkdVNWWHN4azNENTo0OWFialU0OERuVjQ4V3FxenQ4QnBZNEo5T1hhZjVvc280anVWaUpEVk56VQ==",
        // contentType:"application/json",
        grant_type: "client_credentials",
        success: function (result){
            alert(result);
            console.log(result);
            console.log(result["access_token"]);
            Swal.fire({
                icon: 'success',
                title: 'Paid Successfully',
                // text: 'Physical Member!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#0E2C4B',
            })

        },
        error: function(error){
            alert("Payment unsuccessfully2");
            Swal.fire({
                icon: 'error',
                title: 'Payment Unsuccessfully!',
                text: 'Cannot resolve, System issue!!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
        }
    });
});