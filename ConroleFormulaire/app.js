//On recupere chaque id de l'input  déclaré dans le formulaire dans une variable histoire de pouvoir appliquer les differentes sortes d'animation possibles les

const form = document.querySelector("#form");
const username = document.querySelector('#username');
const mail = document.querySelector('#mail');
const Mdp = document.querySelector('#mdp');
const mdpconf = document.querySelector('#mdpconf');

// Les evenements

form.addEventListener('submit', e => {
  e.preventDefault();
  form_verify();


})




//les fonctions 

function form_verify() {
  //Obtenir toutes las valeurs des inputs
  const userVal = username.value.trim();
  const mailVal = mail.value.trim();
  const mdpVal = Mdp.value.trim();
  const mdpconfVal = mdpconf.value.trim();

  // verification username
  if (userVal === "") {
    let ErrorUser = "Le nom d'utilisateur ne peut pas etre vide.";
    setError(username, ErrorUser);
  } else if (!userVal.match(/^[a-zA-Z]/)) {
    let ErrorUser = "Le nom doit commmencer par une lettre";
    setError(username, ErrorUser);
  } else if (userVal.length < 5) {
    let ErrorUser = "Le nom doit comporter au moins 5 caracteres";
    setError(username, ErrorUser);
  } else {
    setSuccess(username);
  }

  // verification email 

  if (mailVal === "") {
    let message = "Email ne peut pas être vide";
    setError(mail, message);
  } else if (!email_verify(mailVal)) {
    let message = "Email non valide";
    setError(mail, message);
  } else {
    setSuccess(mail);
  }

   // password verify
   if (mdpVal === "") {
    let message = "mot de passe  ne peut pas être vide";
    setError(Mdp, message);
  } else if (/[1-9]/.test(mdpVal) && /[a-z]/.test(mdpVal) && /[A-Z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal) && mdpVal.length >= 8) {
    setSuccess(Mdp);
  } else if (/[A-Z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal) && mdpVal.length >= 8 &&  /[1-9]/.test(mdpVal) ) {
    let message = "Absence de caractere miniscule";
    setError(Mdp, message);
  } else  if (/[a-z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal) && mdpVal.length >= 8 &&  /[1-9]/.test(mdpVal)) {
    let message = "Absence de caractere majuscule";
    setError(Mdp, message);
  } else if (/[a-z]/.test(mdpVal) && /[A-Z]/.test(mdpVal) && mdpVal.length >= 8 &&  /[1-9]/.test(mdpVal)) {
    let message = "Absence de caractere special comme $@/!%*#&";
    setError(Mdp, message);
  } else if (/[a-z]/.test(mdpVal) && /[A-Z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal) &&  /[1-9]/.test(mdpVal) ) {
    let message = "Taille de caractere inferieur à 8 .Merci d\'augmenter";
    setError(Mdp, message);
  }else if (/[a-z]/.test(mdpVal) && /[A-Z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal) && mdpVal.length >= 8  ) {
    let message = "Absence de chiffre";
    setError(Mdp, message);
  } else if (/[$@/!%*#&]/.test(mdpVal) && mdpVal.length >= 8 && /[1-9]/.test(mdpVal)) {
    let message = "Manque de minuscule et majuscule";
    setError(Mdp, message);
  } else  if (/[A-Z]/.test(mdpVal) && mdpVal.length >= 8 && /[1-9]/.test(mdpVal)) {
    let message = "Manque de minuscule et special caractere";
    setError(Mdp, message);
  } else  if (/[A-Z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal) && /[1-9]/.test(mdpVal)) {
    let message = "Manque de minuscule et taille inférieur à 8 ";
    setError(Mdp, message);
  } else  if (/[A-Z]/.test(mdpVal) && mdpVal.length >= 8 && /[$@/!%*#&]/.test(mdpVal)) {
    let message = "Manque de minuscule et un chiffre ";
    setError(Mdp, message);
  }else  if (/[a-z]/.test(mdpVal) && mdpVal.length >= 8 && /[1-9]/.test(mdpVal)) {
    let message = "Manque de majuscule et special caractere ";
    setError(Mdp, message);
  }else  if (/[a-z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal) && /[1-9]/.test(mdpVal)) {
    let message = "Manque de majuscule et taille caractere inférieur à 8  ";
    setError(Mdp, message);
  }else  if (/[a-z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal) && mdpVal.length >= 8) {
    let message = "Manque de majuscule et un chiffre  ";
    setError(Mdp, message);
  }else  if (/[a-z]/.test(mdpVal) && /[A-Z]/.test(mdpVal) && /[1-9]/.test(mdpVal)) {
    let message = "Manque de special caractere et taille caractere inférieur à 8  ";
    setError(Mdp, message);
  }else  if (/[a-z]/.test(mdpVal) && /[A-Z]/.test(mdpVal) && mdpVal.length >= 8) {
    let message = "Manque de special caractere  et un chiffre  ";
    setError(Mdp, message);
  }else  if (/[a-z]/.test(mdpVal) && /[A-Z]/.test(mdpVal) && /[$@/!%*#&]/.test(mdpVal)) {
    let message = "Manque de chiffre  et taille de caracteres inférieur à 8 ";
    setError(Mdp, message);
  }else  if (/[$@/!%*#&]/.test(mdpVal)) {
    let message = "Manque de minuscule,majuscule ,chiffre et  taille inférieur à 8 ";
    setError(Mdp, message);
  }else  if (/[A-Z]/.test(mdpVal)) {
    let message = "Manque de minuscule,special caractere ,chiffre et taille inférieur à 8 ";
    setError(Mdp, message);
  }else  if (/[a-z]/.test(mdpVal)) {
    let message = "Manque de majuscule,special caractere ,chiffre et taille inférieur à 8";
    setError(Mdp, message);
  }else  if (/[1-9]/.test(mdpVal)) {
    let message = "Manque de majuscule,special caractere ,minuscule et taille inférieur à 8";
    setError(Mdp, message);
  }


     // pwd confirm
     if (mdpconfVal ==="") {
      let message ="Le passeword confirm ne peut pas être vide";
      setError(mdpconf,message)
  }else if( mdpVal !== mdpconfVal){
      let message ="Les mot de passes ne correspondent pas";
      setError(mdpconf,message)
  }else{
      setSuccess(mdpconf)
  }
}

function setError(elem, Message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector("small");

  //Ajout du message d'erreur 
  small.innerHTML = Message;

  //Ajout de la class ErrorUser

  formControl.className = "form-control error";
}

function setSuccess(branche) {
  const formControl = branche.parentElement;

  //Ajout de la class Success

  formControl.className = "form-control success";

}

function email_verify(email) {
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}

function password_verify(passeword) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(passeword);
}