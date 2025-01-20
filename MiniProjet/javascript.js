function verifEmail(){
    adresse = document.form1.adresse.value;
    taille = document.form1.adresse.value.length;

    validelog = false;
    validedom = false;
    valideext = false;

    arob = adresse.lastIndexOf("0");
    login = adresse.substring(0,arob);
    pointFinal = adresse.lastIndexOf(".");
    extension = adresse.substring(pointFinal,taille);

    domaine = adresse.substring(arob+1,pointfinal);

    if(login.length > 2 ){
        validelog = true;

    }
    else{
        validelog = false;
    }
    if( domaine.length > 1 ){
        validedom = true;
    }
    else{
        validedom = false;
    }
    if( extension.length == 2 || extension.length == 3){
        valideext = true;
    }
    else{
        valideext = false;
    }
    if ( validelog == true && validedom == true && valideext ==true){
        alert('ok,l\'adresse e-mail saisie est valide.')
        return true;
    }
    else{
        alert('ceci n\'est pas une adresse e-mail valide.');
        return false;
    }}
    
   



    function validation(){
        if(document.form1.nom.value == ""){
          alert('entrez votre nom,svp!');
          return false;
        }
        if(document.form1.prenom.value == ""){
          alert('entrez votre prénom,svp!');
          return false;
        }
        if( document.form1.adresse.value == "")
        {
          alert('entrez votre adresse email,svp!')
          return false;
        }
        return true;
         }
          
              function verifPassword(){
    passe1 = document.form1.motDePasse1.value;
     passe2 = document.form1.motDePasse2.value;
      if( passe1 !=  passe2){
          alert('les deux mots de passe sont different');
          return false;
      
     
          }
          else{
              alert('les mots de passe sont Valide');
              return true;
          }}
         
         
      
        