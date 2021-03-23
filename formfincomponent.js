function validateform1(checkout){

    var bname = checkout.billinggame.value;
        alert ("debugging bname is" + bname);

        if (bname == membername){
            alert("Membername is same as billing name");
        }

        var membsel = subscriptionStatus.membershipselection.value;
        alert("You've chosen the " + membsel + "subscription option");

        var payee = billingInfo.paymentchoice.value;
        alert( "You've chosen " + payee + "as your payment choice");

        var total = registerComplete.totalcharge.value;
        alert("Your total payment is: $" + totalcharge);
}

// a) name from previous page unless billing name is different
// b) output function for ddselect choice - - 0na, 1mo, 3mo, 1yr
// +c) donateoption for register to total if selected for the order