//initialisation de la carte et déclarartion des variables
var mymap = L.map('mapid').setView([43.6043, 1.4437], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid2lsbGVtMTMiLCJhIjoiY2p4ZWRkNHlhMDF1NjNwbWRid3VzcGxheCJ9.1n4-r1zbBJ99NK-77fSR4w', { attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> ', maxZoom:20, id: 'mapbox.streets', accessToken: 'your.mapbox.access.token' }).addTo(mymap);
var statusStation;
var markerPlace;
var description = document.getElementById('descriptionStation');
var formReservation = $('#form');
var reserver = $('#reserver');
var annuler = $('#annuler');
var confirmer = $('#confirmer');
var messageDeConfirmation = $('#conf_Res');
var compteur = $('#compteur');
var minutes;
var secondes;
var val;
var monCanvas = document.getElementById("canvas");
var ctx = document.getElementById("canvas").getContext('2d');
var X;
var Y;
var sign = 0;
var stationInfo = document.getElementsByClassName('champ');
var initInfo;
var Elt0bis;
var Elt1bis;
var Elt2bis;
var Elt3bis;
var Elt4bis;
annuler.hide();
formReservation.hide();



//Récupération des données API JCDecaux
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status == 200) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

//fonction et évènements appelés lorsque la requête réussie
function callback(reponse) { //retour des informations sur les stations depuis l'API Decaux
  var elementStations = JSON.parse(reponse);
  elementStations.forEach(element => {
    var station = new stationElt(element.position.lat, element.position.lng, element.status, element.name, element.address, element.bike_stands, element.available_bikes);
    station.placementStation();

    markerPlace.on("click", function() {
      station.info();

    });
  });
}

//application des éléments récupérés
  document.getElementById("nomStation").innerHTML = localStorage.getItem('nomStation');
  document.getElementById("adresse").innerHTML = localStorage.getItem('adresse');
  document.getElementById("nombreVelo").innerHTML = localStorage.getItem('nombreVelo');
  document.getElementById("nombreDeVeloDisponible").innerHTML = localStorage.getItem('nombreDeVeloDisponible');
  document.getElementById("etatStation").innerHTML = localStorage.getItem('etatStation');

//appel de la requête et de la fonction en cas de succès
ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Toulouse&apiKey=49086474ff992b28fefd646215c3141bee5bb1e3", callback);

//transition description/formulaire
function ouvre_Form(){
  formReservation.fadeIn();
  var canvas = new canvasElt(ctx, monCanvas, "black");
  canvas.initCanvas();
  canvas.initEvent();
  annuler.fadeIn();
}
function ferme_Form(){
  formReservation.fadeOut();
}

//gestionnaire d'évènements formulaire

reserver.on('click', ouvre_Form);
annuler.on('click', ferme_Form);
confirmer.on('click', function() {
  var client = new clientElt($('#nom'), $('#prenom'), $('#ad'), $('#nDVD'));
  client.dataClient();
  formReservation.fadeOut();
  sign = 0;
});
