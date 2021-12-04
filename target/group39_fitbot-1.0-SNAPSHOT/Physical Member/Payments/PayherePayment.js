let count = 0;
var paymentId = 0;
function countPaymentId(){
    $.ajax({
        method:'POST',
        url:"physicalPaymentCount",
        // dataType:'json',
    }).done(function(data){
        console.log(data);
        let result = parseInt(data)+1;
        let resultStr = "Payment"+result;
        paymentId = result;

        document.getElementById("order_id").value = resultStr;
        // $('#'+result_value).attr("disabled", true);
        $('#order_id').css("border", "2px solid grey");
        $('#order_id').css("color", "grey");
    }).fail(function(a,b,err){
        alert("Error");
        console.log(a,b,err)
    });
}

function payments_pay(){
    // md5sig = strtoupper (md5 ( merchant_id + order_id + payhere_amount + payhere_currency + status_code + strtoupper(md5(payhere_secret)) ) );
    $('#payment_popup_details').show();

    //payment ID calculation
    countPaymentId();

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
                if(name == dataNames[0]){
                    let nameObject = {};
                    nameObject = data[name];
                    let nameStr = nameObject["year"]+"-"+nameObject["month"]+"-"+nameObject["day"];
                    document.getElementById(result_value).value = nameStr;
                    $('#'+result_value).css("border", "2px solid grey");
                    $('#'+result_value).css("color", "grey");
                }else{
                    document.getElementById(result_value).value = data[name];
                    // $('#'+result_value).attr("disabled", true);
                    $('#'+result_value).css("border", "2px solid grey");
                    $('#'+result_value).css("color", "grey");
                }
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
        // console.log(form_data);
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
        payment["payment_id"] = paymentId.toString();
        console.log(payment);
        console.log(payment["merchant_id"]);
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

        //after get the payhere response then its check,
        // if(paymentStatus == 2){}

        //now suppose its get the every payment is done
        // alert();
        e.preventDefault();
        afterOnlinePayment(payment);

    });
}
// const date = new Date();
// let fullDate = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
// console.log(fullDate);
function afterOnlinePayment(data){
    const date = new Date();
    let fullDate = date.getFullYear()+"-"+(date.getMonth() + 1).toString().padStart(2, "0")+"-"+date.getDate().toString().padStart(2, "0");
    data["current_date"] = fullDate;
    // console.log(data);
    let new_expire_date1 = parseInt(date.getFullYear())+1;
    let new_expire_date = new_expire_date1 + "-" +(date.getMonth() + 1).toString().padStart(2, "0")+"-"+date.getDate().toString().padStart(2, "0");
    data["new_expire_date"] = new_expire_date;

    console.log(data);
    let payment_id = paymentId;
    let payment_date = data.current_date;
    // let payment_method = data.
    let previous_expire_date = data.expiry_day;
    let currency = data.currency;
    let payment_amount = data.amount;
    // let authorization_token
    // let payment_status
    let cus_first_name = data.first_name;
    let cus_last_name = data.last_name;
    let cus_address = data.address;
    let cus_city = data.city;
    // let new_expire_date = new_expire_date2;

    $.ajax({
        method:"POST",
        url:"payment",
        data: {payment_id:payment_id, payment_date:payment_date, previous_expire_date:previous_expire_date, currency:currency, payment_amount:payment_amount, cus_first_name:cus_first_name, cus_last_name:cus_last_name, cus_address:cus_address, cus_city:cus_city, new_expire_date:new_expire_date},
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

            }else if(result.trim() == "0"){
                Swal.fire({
                    icon: 'error',
                    title: 'Paid Unsuccessfully!',
                    text: 'Payment cannot completed!',
                    confirmButtonText:"Ok",
                    confirmButtonColor: '#932828',
                })
            }else {
                // alert(result);
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
            console.log(error);
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