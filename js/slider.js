/* slider */

var slider = ["image/img1.jpg","image/img2.jpg","image/img3.jpg","image/img4.jpg"];
$("#imgslider");
var i = 0;
var i2 = 0;
var monImage = $("#imgslider");
var maDescription = document.getElementById("descriptionSlider");
var suivant = $("#rightarrow");
var precedent = $("#leftarrow");

//transitions slider

//partie image
function imageSuivante()
{
  i++;
  if (i < 4){
    monImage.attr('src',slider[i]);
  }

  else if (i == 4){
    i=0;
    monImage.attr('src',slider[i]);
  }
}

function imagePrecedente()
{
  i--;
  if (i <= -1){
    i=3;
    monImage.attr('src',slider[i]);
  }
  else {
    monImage.attr('src',slider[i]);
  }
}


//partie description

function descriptionPrecedente(){
  i2--;
  if (i2 == -1)
  {
    i2 = 3;
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Prêt à pédaler !</span><br>Il ne vous reste plus qu'à récupérer votre vélo</p>";
  }
  else if (i2 == 0)
  {
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Bienvenue sur le site Velocity</span><br>le site de location de velo pour citoyen malin</p>";
  }

  else if (i2 == 1){
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Recherchez un vélo</span><br>Sélectionnez un vélo libre dans l'emplacement de votre choix</p>";
  }

  else if (i2 == 2) {
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Réservez votre vélo</span><br>Remplissez le formulaire afin d'activer la réservation</p>";
  }

  else if (i2 == 3) {
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Prêt à pédaler !</span><br>Il ne vous reste plus qu'à récupérer votre vélo</p>";
  }
}

function descriptionSuivante(){
  i2++;
  if (i2 == 1){
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Recherchez un vélo</span><br>Sélectionnez un vélo libre dans l'emplacement de votre choix</p>";
  }

  else if (i2 == 2) {
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Réservez votre vélo</span><br>Remplissez le formulaire afin d'activer la réservation</p>";
  }

  else if (i2 == 3) {
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Prêt à pédaler !</span><br>Il ne vous reste plus qu'à récupérer votre vélo</p>";
  }

  else if (i2 == 4)
  {
    i2 = 0;
    maDescription.innerHTML = "";
    maDescription.innerHTML = "<p><span>Bienvenue sur le site Velocity</span><br>le site de location de velo pour citoyen malin</p>";
  }
}

function stopDiapo () {
  autoImage = clearInterval(autoImage);
  autoDescription = clearInterval(autoDescription);
}

function RestartDiapo () {
  autoImage = setInterval(imageSuivante, 5000);
  autoDescription = setInterval(descriptionSuivante, 5000);
}
//getionnaire d'evenements non automatisé

//fonction utilisation du clavier
window.addEventListener("keydown", function (touche) {
  if(touche.keyCode === 37){
     descriptionSuivante();
     imageSuivante();
 }
 else if(touche.keyCode === 39){
     imagePrecedente();
     descriptionPrecedente();
 }
});
suivant.on('click',descriptionSuivante);
precedent.on('click',descriptionPrecedente);
suivant.on('click',imageSuivante);
precedent.on('click',imagePrecedente);

//gestionnaire d'événements automatisé

var autoImage = setInterval(imageSuivante, 5000);
var autoDescription = setInterval(descriptionSuivante, 5000);

//interruption de l'évenement

monImage.on("mousedown",stopDiapo);
monImage.on("mouseup",RestartDiapo);
