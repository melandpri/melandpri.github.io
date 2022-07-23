const btnInscription = document.getElementById("inscription");

btnInscription.addEventListener(
    'click',
    function () {


        let surname = document.forms["RegForm"]["prenom"]; 
        let name = document.forms["RegForm"]["nom"];    
        let mail = document.forms["RegForm"]["mail"];    
        let password = document.forms["RegForm"]["pass"];  
        let confpass = document.forms["RegForm"]["passe"];  

    if (surname.value == "")                                  
    { 
        alert("Mettez votre prénom"); 
        surname.focus();
        return false; 
    }  
    if (name.value == "")                                  
    { 
        alert("Mettez votre nom"); 
        name.focus();
        return false; 
    }  
    if (mail.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        mail.focus(); 
        return false; 
    }    
    if (mail.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        mail.focus(); 
        return false; 
    }    
    if (mail.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        mail.focus(); 
        return false; 
    } 
    
    if (password.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        password.focus(); 
        return false; 
    } 
    if (password.value.length < 8) {
        document.getElementById('error').innerHTML = "votre mot de passe est inférieur a 8";
        password.focus();
        return false;
        
    }

    if (confpass.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        password.focus(); 
        return false; 
    }

    if (confpass.value != password.value)                        
    { 
        alert("Saisissez votre mot de passe ,saisi plus haut!!!"); 
        confpass.focus(); 
        return false; 
    } 
     
        
    }
)