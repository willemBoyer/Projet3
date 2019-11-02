//classe POO définissant le clients
class clientElt {
  constructor(nom, prenom, adresse, nombreVeloDisponible)
    {
      this.nom = nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.nombreVeloDisponible = nombreVeloDisponible;
    }

    //récupère les infos et initialise la phrase de confirmation ainsi que le minuteur + options validation
    dataClient(){
      sessionStorage.setItem('adresse', this.adresse.val());
      localStorage.setItem('nom', this.nom.val());
      localStorage.setItem('prenom', this.prenom.val());
      if (this.nom.val() == '' || this.prenom.val() == '' || sign == 0) {
        alert("Veuillez renseigner les champs manquants");
      }
      else if (this.nombreVeloDisponible.val() == 0) {
        alert("Cette station n'a plus de vélo disponible");
      }
      else {
        var veloRestant = this.nombreVeloDisponible.val();
        veloRestant = veloRestant - 1;
        console.log(veloRestant);
        document.getElementById("nombreDeVeloDisponible").innerHTML = veloRestant;
        messageDeConfirmation.html('Un vélo a bien était réservé à : ' + sessionStorage.getItem('adresse') +' pour ' + localStorage.getItem('nom') + ' ' + localStorage.getItem('prenom') +'.');
        minutes = 20;
        secondes = 0;
         val = clearInterval(val);
         val = setInterval(function(){
          if(minutes == 0 && secondes == 0){
            localStorage.removeItem('adresse');
            localStorage.removeItem('nom');
            localStorage.removeItem('prenom');
            messageDeConfirmation.html('');
            val = clearInterval(val);
            compteur.fadeOut();
          }
          switch(secondes){
            case 9:
            compteur.html('Temps restant : ' + minutes + ' : 09' );
            break;
            case 8:
            compteur.html('Temps restant : ' + minutes + ' : 08' );
            break;
            case 7:
            compteur.html('Temps restant : ' + minutes + ' : 07' );
            break;
            case 6:
            compteur.html('Temps restant : ' + minutes + ' : 06' );
            break;
            case 5:
            compteur.html('Temps restant : ' + minutes + ' : 05' );
            break;
            case 4:
            compteur.html('Temps restant : ' + minutes + ' : 04' );
            break;
            case 3:
            compteur.html('Temps restant : ' + minutes + ' : 03' );
            break;
            case 2:
            compteur.html('Temps restant : ' + minutes + ' : 02' );
            break;
            case 1:
            compteur.html('Temps restant : ' + minutes + ' : 01' );
            break;
            case 0:
            compteur.html('Temps restant : ' + minutes + ' : 00' );
            break;
            default:
            compteur.html('Temps restant : ' + minutes + ' : ' + secondes );
            break;
          }

          if(secondes == 0){
            minutes--;
            secondes = 59
          }
          secondes--;

      }, 1000);

    }
  }
}
