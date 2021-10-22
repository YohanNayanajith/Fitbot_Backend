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