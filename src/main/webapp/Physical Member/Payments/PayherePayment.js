function payments_pay(){
    // md5sig = strtoupper (md5 ( merchant_id + order_id + payhere_amount + payhere_currency + status_code + strtoupper(md5(payhere_secret)) ) );
    $('#payment_popup_details').toggle();
}