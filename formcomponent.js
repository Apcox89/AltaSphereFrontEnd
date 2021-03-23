// + Page that connects climate-form.component and checkout-form.component together to complete the circuit.

 function validateform(cliform) {
   
   var membername = cliform.membername.value;
    if (membername == ""){
        alert ("Enter your first/last name.")
            return false;
    }

    if (membername.length < 5){
        alert ("Enter your name in 'First Last' format please");
        return false;
    }

    digits = "0123456789"
    for (i=0; i<membername.length; i++){
        if (digits.indexOf(membername.charAt(i)) != -1){
            alert("Name cannot contain numbers");
            return false;
        }
    } 

    var useremail = cliform.useremail.value;

        if(useremail == /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cliform.useremail.value))
            {
            return true; 
            } 
        if (useremail != /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cliform.useremail.value))
            {
             alert("You have entered an invalid email address!")
                return false;
            }

    var ddselect = cliform.ddselect.value;
    if (ddselect == "0na")
       {
           alert (" No Subscription Selected ")
            return true;
          
       }
   
    if (ddselect == "1mo")
       {
           alert("1 Month Trial Choice at $9.99");
            return true;
          
       } 
   
    if (ddselect == "3mo")
       {
           alert("3 Month Select Choice at $19.99");
            return true;
           
       }
   
    if (ddselect == "1yr")
       {
         alert(" 1-Year Annual Choice at $59.99");
         return true;
       } 

    //Donate option function validation now
    var donateoption = cliform.donateoption.value;
     
       if (donateoption == "0123456789"){
           alert (" Thanks for donating! ")   
           return true;
       }
 
}