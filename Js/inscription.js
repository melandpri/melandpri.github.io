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
    
    if (pass.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        pass.focus(); 
        return false; 
    } 

    if (passe.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        password.focus(); 
        return false; 
    }

    if (passe.value != pass.value)                        
    { 
        alert("Saisissez votre mot de passe ,saisi plus haut!!!"); 
        passe.focus(); 
        return false; 
    } 
     
        
    }
)