let count = 0;
function payments_pay(){
    // md5sig = strtoupper (md5 ( merchant_id + order_id + payhere_amount + payhere_currency + status_code + strtoupper(md5(payhere_secret)) ) );
    $('#payment_popup_details').show();

    let idNamesMembership = ["expiry_day","items","amount"];
    let dataNames = ["expiry_day","membership_category","renewal"];
    if(count == 0){
        $.ajax({
            method:'POST',
            url:"membership",
            dataType:'json',

        }).done(function(data){
            console.log(data);
            $.each(idNamesMembership,function(index,result_value){
                let name = dataNames[index].toString();
                document.getElementById(result_value).value = data[name];
                // $('#'+result_value).attr("disabled", true);
                $('#'+result_value).css("border", "2px solid grey");
                $('#'+result_value).css("color", "grey");
            });
        }).fail(function(a,b,err){
            alert("Error");
            console.log(a,b,err)
        });
    }

    document.getElementById("currency").value = "LKR";
    // $('#currency').attr("disabled", true);
    $('#currency').css("border", "2px solid grey");
    $('#currency').css("color", "grey");
    count+=1;
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
function email_regex_Validate(emailValue){
    let regexPattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);    // regular expression pattern
    return regexPattern.test(emailValue);
}
function checkDataValidate(form_data,idNamesCustomer,namesOFId){
    let i = 0;
    let count = 1;
    $.each(form_data,function(index,value){
        console.log(form_data);
        if(value.length == ''){
            console.log(index+" : "+value);
            let idValue = idNamesCustomer[i];
            let errorMsg = "**"+namesOFId[i]+" is missing";
            $('#'+idValue).html(errorMsg);
            $('#'+idValue).css("color", "red");
            $('#'+idValue).show();
            i+=1;
            count = 0;
        }
    });
    return count;
}
function hideErrors(){
    $('#payment_error1').hide();
    $('#payment_error2').hide();
    $('#payment_error3').hide();
    $('#payment_error4').hide();
}
$(document).ready(function(){
    hideErrors();
    // $('#payment_detail_container_input_hide').hide();
});

function payment_online(){
    hideErrors();
    $('#payment_detail_container_form').submit(function(e){

        // e.preventDefault();
        let form_data = $("form").serializeArray();
        console.log(form_data);
        let payment = {};
        $.each(form_data, function(i, field){
            payment[field.name] = field.value;
        });

        // let idNamesCustomer = ["first_name","last_name","email","phone"];
        let idNamesCustomer = ["payment_error1","payment_error2","payment_error3","payment_error4"];
        let namesOFId = ["First Name","Last Name","Email","Contact Number"];

        let first_name = $('#first_name').val();
        let last_name = $('#last_name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();

        let returnVal = checkDataValidate(payment,idNamesCustomer,namesOFId);
        if(returnVal == 0){
            e.preventDefault();
            return;
        }

        if(!email_regex_Validate(email)){
            $('#payment_error3').html("**Enter valid email");
            $('#payment_error3').css("color", "red");
            e.preventDefault();
            return;
        }
        if (!(/[a-z]/.test(first_name) || /[A-Z]/.test(first_name))){
            $('#payment_error1').html("**First Name must only contain characters");
            $('#payment_error1').css("color", "red");
            e.preventDefault();
            return;
        }else if(!(/[a-z]/.test(last_name) || /[A-Z]/.test(last_name))){
            $('#payment_error2').html("**Last Name must only contain characters");
            $('#payment_error2').css("color", "red");
            e.preventDefault();
            return;
        }
        let isnum = /^\d+$/.test(phone);
        if(!isnum){
            $('#payment_error4').html("**Contact Number must only contain digit");
            $('#payment_error4').css("color", "red");
            e.preventDefault();
            return;
        }
        hideErrors();

    //     $.ajax({
    //         method:"POST",
    //         url:"https://sandbox.payhere.lk/merchant/v1/payment/capture",
    //         data: payment,
    //         // dataType:"json",
    //         // Authorization: Bearer <NE9WeDNhRzhqV3k0SkFkdVNWWHN4azNENTo0OWFialU0OERuVjQ4V3FxenQ4QnBZNEo5T1hhZjVvc280anVWaUpEVk56VQ==>
    //         contentType:"application/json",
    //         success: function (result){
    //             alert(result);
    //             if(parseInt(result['status_code']) == 2){
    //
    //                 alert(result.merchant_id);
    //                 alert(result.statusCode);
    //                 Swal.fire({
    //                     icon: 'success',
    //                     title: 'Paid Successfully',
    //                     // text: 'Physical Member!',
    //                     confirmButtonText:"Ok",
    //                     confirmButtonColor: '#0E2C4B',
    //                 })
    //             }else {
    //                 alert("Payment unsuccessfully1");
    //                 Swal.fire({
    //                     icon: 'error',
    //                     title: 'Paid Unsuccessfully!',
    //                     text: 'Payment cannot completed!',
    //                     confirmButtonText:"Ok",
    //                     confirmButtonColor: '#932828',
    //                 })
    //             }
    //
    //         },
    //         error: function(error){
    //             alert("Payment unsuccessfully2");
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Payment Unsuccessfully!',
    //                 text: 'Cannot resolve, System issue!!',
    //                 confirmButtonText:"Ok",
    //                 confirmButtonColor: '#932828',
    //             })
    //         }
    //     });
    });
}

function afterOnlinePayment(data){
    $.ajax({
        method:"POST",
        url:"payment",
        data: data,
        // dataType:"json",
        // contentType:"application/json",
        success: function (result){
            if(result.trim() == "1"){
                alert(result);
                Swal.fire({
                    icon: 'success',
                    title: 'Paid Successfully',
                    // text: 'Physical Member!',
                    confirmButtonText:"Ok",
                    confirmButtonColor: '#0E2C4B',
                })
                // setTimeout(function() {
                //     window.location.href = 'http://localhost:8080/group39_fitbot_war_exploded/';
                // }, 2000);

            }else {
                alert(result);
                Swal.fire({
                    icon: 'error',
                    title: 'Paid Unsuccessfully!',
                    text: 'Payment cannot completed!',
                    confirmButtonText:"Ok",
                    confirmButtonColor: '#932828',
                })
            }

        },
        error: function(error){
            alert(error);
            Swal.fire({
                icon: 'error',
                title: 'Payment Unsuccessfully!',
                text: 'Cannot resolve, System issue!!',
                confirmButtonText:"Ok",
                confirmButtonColor: '#932828',
            })
        }
    });
}