function validate(){

    validate_blank();
    


   if(validate_blank()){
    return true;
   }
    else{
    alert("Error. Form must be filled completely.")
    return false;
    }


    }

    
    function validate_blank(){
        var name = document.getElementById("txt_name").value;
        var email = document.getElementById("txt_email").value;
        var phone = document.getElementById("txt_phone").value;
        var message = document.getElementById("txt_message").value;

        if(name.trim().length!=0 && email.trim().length!=0 && phone.trim().length!=0 && message.trim().length!=0){
            return true;
        }
        else{
            return false;
        }
       
}