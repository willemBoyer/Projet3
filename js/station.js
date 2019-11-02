var sessionStation;
var dataNomStation;
var Elt0;
var Elt1;
var Elt2;
var Elt3;
var Elt4;
//classe POO définissant les stations
class stationElt {
 constructor(latitude, longitude, status, nomStation, adresse, nombreVelo, nombreVeloDisponible) {
    this.positionlat = latitude;
    this.positionlng = longitude;
    this.status = status;
    this.name = nomStation;
    this.address = adresse;
    this.nombreVelo = nombreVelo;
    this.nombreVeloDisponible = nombreVeloDisponible;
  }

//placement des stations sur la map
 placementStation() {
    markerPlace = L.marker([this.positionlat, this.positionlng]).addTo(mymap);
    if (this.status == "OPEN") {
      var status = "Station ouverte";
      statusStation = status;
    }
    else if(this.status == "CLOSE") {
      var status = "Station fermée";
      statusStation = status;
    }
  }

 //remplissage du panneau information station
 info() {
          dataNomStation = "";
          document.getElementById("nomStation").innerHTML = '';
          document.getElementById("adresse").innerHTML = '';
          document.getElementById("nombreVelo").innerHTML = '';
          document.getElementById("nombreDeVeloDisponible").innerHTML = '';
          document.getElementById("etatStation").innerHTML = '';
          var strName = this.name;
          var word = strName.split(" ");
          for (let i = 2; i < word.length; i++) {
            document.getElementById("nomStation").innerHTML += word[i] + " "
            dataNomStation = dataNomStation + " " + word[i];
          }
          document.getElementById("nomStation").innerHTML += '<input id="nS" type="hidden" value="' + dataNomStation + '">'
          document.getElementById("adresse").innerHTML += this.address + '<input id="ad" type="hidden" value="' + this.address + '">';
          document.getElementById("nombreVelo").innerHTML += this.nombreVelo + '<input id="nV" type="hidden" value="' + this.nombreVelo + '">';
          document.getElementById("nombreDeVeloDisponible").innerHTML += this.nombreVeloDisponible + '<input id="nDVD" type="hidden" value="' + this.nombreVeloDisponible + '">';
          document.getElementById("etatStation").innerHTML += statusStation + '<input id="eS" type="hidden" value="' + statusStation + '">';
          Elt0 = localStorage.setItem('nomStation', $('#nS').val());
          Elt1 = localStorage.setItem('adresse', $('#ad').val());
          Elt2 = localStorage.setItem('nombreVelo', $('#nV').val());
          Elt3 = localStorage.setItem('nombreDeVeloDisponible', $('#nDVD').val());
          Elt4 = localStorage.setItem('etatStation', $('#eS').val());
          reserver.fadeIn();
      }
}
