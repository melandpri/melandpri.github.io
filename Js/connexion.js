const btnConnexion = document.getElementById("connexion");

btnConnexion.addEventListener(
    'click',
    function () {


        let mail = document.forms["RegForm"]["mail"];    
        let password = document.forms["RegForm"]["pass"];
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
    if (pass.length < 8)                        
        { 
            alert(" votre mot de passe est faible "); 
            pass.focus(); 
            return false; 
        }


    }
)