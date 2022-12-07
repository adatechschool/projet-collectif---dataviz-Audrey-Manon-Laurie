 // Date
function setDate () { 
  let now = new Date()
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let dateString = now.toLocaleDateString("fr-FR",options);
  document.getElementById("date").innerHTML = dateString;
}

setDate();

// Navigation bar //



// Evenement click //

    
/*function divClick(event){
    var textSecondary = document.getElementsByClassName('text-secondary')
    for (var i = 0; i < textSecondary.length; i++) {
        event.target.style.color="#f00";
}
   
}
    var elements = document.getElementsByClassName("text-primary");
    for (var i = 0; i < elements.length; i++) {
        document.addEventListener("click", divClick)
}*/

let centreVille = document.getElementById("centreVille");
let breilBarberie = document.getElementById("breilBarberie");
let zola = document.getElementById("zola");
let nantesNord = document.getElementById("nantesNord");
let bellevue = document.getElementById("bellevue");
let ile = document.getElementById("ile");
let hautsPaves = document.getElementById("hautsPaves");
let malakoff = document.getElementById("malakoff");

let sonde1 = document.getElementById("sonde1");
let sonde2 = document.getElementById("sonde2");
let sonde3 = document.getElementById("sonde3");
let sonde4 = document.getElementById("sonde4");
let sonde5 = document.getElementById("sonde5");
let sonde6 = document.getElementById("sonde6");
let sonde7 = document.getElementById("sonde7");
let sonde8 = document.getElementById("sonde8");

// code pas de nous !

centreVille.addEventListener("click", () => {
  resultat(sonde1, "Nantes_01", "centreVille");  
  });

breilBarberie.addEventListener("click", () => {
  resultat(sonde2,"Nantes_33","breilBarberie");
  });

zola.addEventListener("click", () => {
  resultat(sonde3,"Nantes_34","zola");
  });

nantesNord.addEventListener("click", () => {
  resultat(sonde4,"Nantes_29","nantesNord");
  });

bellevue.addEventListener("click", () => {
  resultat(sonde5,"Nantes_21","bellevue");
  });

ile.addEventListener("click", () => {
  resultat(sonde6,"Nantes_03","ile");  
  });

hautsPaves.addEventListener("click", () => {
  resultat(sonde7,"Nantes_27","hautsPaves");
  });

malakoff.addEventListener("click", () => {
  resultat(sonde8,"Nantes_26","malakoff");
  });

// Récupération des données.
let url = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_capteurs-ondes-electomagnetiques-nantes-metropole&q=&rows=69&sort=extractjson_date&facet=name&facet=address'
let result;
function appelAPI() {
  fetch(url)
    .then(response => response.json())
    .then(data => { 
      console.log(data.records) 
      result = data.records;   
    });
}
// on appelle qu'une seule fois l'api, et les records sont stockés dans un tableau
appelAPI();


function resultat(nomSonde, nomCapteur, quartier) {
  // ajout du code pour afficher/cacher le texte selon la sonde choisie 
  if(getComputedStyle(nomSonde).opacity === 0){
    nomSonde.style.opacity = 1;
  } else {
    nomSonde.style.opacity = 0;
  }
  // on va chercher dans le tableau le resultat qui correspond au capteur choisi
  result.forEach((record) => {
    if(nomCapteur === record.fields.name){
      console.log(record.fields.address)
      let address = record.fields.address;
      let latestValue =  record.fields.latest_value;
      document.getElementById(quartier).innerHTML = address + " <br>" + latestValue + " V/m";
    }  
  })  
}

/*function array(){
  let latestValue =  record.fields.latest_value;
  let addition = latestValue;

  addition.split(" ");
  let value = parsint(addition[0]);
  console.log(value);
  return value;
}

let latestValue = array()


// /Barème changement couleurs 
//var colorThreshold = 0,
    spanText = document.querySelector('.text-secondary');

function changeColor(val) {
    var color = "green";

    if (val >= 1 && val <= 1,50) {
        color = "green";
    }
    if (val >= 1,50 && val <= 2,50){
        color = 'yellow';
    }
    if (val > 2,50 && val <= 3){
        color = 'orange';
    }
     else if (val > 3) {
        color = "red";
    }

    spanText.style.color = color;
}

console.log(changeColor(latestValue)); */

/*
centreVille.addEventListener("click", () => {
    if(getComputedStyle(sonde1).opacity == 0){
      sonde1.style.opacity = 1;
    } else {
      sonde1.style.opacity = 0;
    }
  })
  
  breilBarberie.addEventListener("click", () => {
    if(getComputedStyle(sonde2).opacity == 0){
      sonde2.style.opacity = 1;
    } else {
      sonde2.style.opacity = 0;
    }
  })

  zola.addEventListener("click", () => {
    if(getComputedStyle(sonde3).opacity == 0){
      sonde3.style.opacity = 1;
    } else {
      sonde3.style.opacity = 0;
    }
  })

  nantesNord.addEventListener("click", () => {
    if(getComputedStyle(sonde4).opacity == 0){
      sonde4.style.opacity = 1;
    } else {
      sonde4.style.opacity = 0;
    }
  })

  bellevue.addEventListener("click", () => {
    if(getComputedStyle(sonde5).opacity == 0){
      sonde5.style.opacity = 1;
    } else {
      sonde5.style.opacity = 0;
    }
  })

  ile.addEventListener("click", () => {
    if(getComputedStyle(sonde6).opacity == 0){
      sonde6.style.opacity = 1;
    } else {
      sonde6.style.opacity = 0;
    }
  })

  hautsPaves.addEventListener("click", () => {
    if(getComputedStyle(sonde7).opacity == 0){
      sonde7.style.opacity = 1;
    } else {
      sonde7.style.opacity = 0;
    }
  })

  malakoff.addEventListener("click", () => {
    if(getComputedStyle(sonde8).opacity == 0){
      sonde8.style.opacity = 1;
    } else {
      sonde8.style.opacity = 0;
    }
  })

// Récupération des données.
/*let url = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_capteurs-ondes-electomagnetiques-nantes-metropole&q=&rows=69&sort=extractjson_date&facet=name&facet=address'

let nationsUnis = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[7].fields.address;
        let latestValue =  data.records[7].fields.latest_value;
        let modif = document.getElementById("nationsUnis");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
    });

let babonneau = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[1].fields.address;
        let latestValue =  data.records[1].fields.latest_value;
        let modif = document.getElementById("babonneau");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let flandin = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[4].fields.address;
        let latestValue =  data.records[4].fields.latest_value;
        let modif = document.getElementById("flandin");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let guistHau = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[5].fields.address;
        let latestValue =  data.records[5].fields.latest_value;
        let modif = document.getElementById("guistHau");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let breil = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[6].fields.address;
        let latestValue =  data.records[6].fields.latest_value;
        let modif = document.getElementById("breil");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let boccage = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[8].fields.address;
        let latestValue =  data.records[8].fields.latest_value;
        let modif = document.getElementById("boccage");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let castellano = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[9].fields.address;
        let latestValue =  data.records[9].fields.latest_value;
        let modif = document.getElementById("castellano");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let buisson = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[10].fields.address;
        let latestValue =  data.records[10].fields.latest_value;
        let modif = document.getElementById("buisson");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let chaillou = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[12].fields.address;
        let latestValue =  data.records[12].fields.latest_value;
        let modif = document.getElementById("chaillou");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let madrid = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[14].fields.address;
        let latestValue =  data.records[14].fields.latest_value;
        let modif = document.getElementById("madrid");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let roch = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[16].fields.address;
        let latestValue =  data.records[16].fields.latest_value;
        let modif = document.getElementById("roch");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let sarrazin = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[17].fields.address;
        let latestValue =  data.records[17].fields.latest_value;
        let modif = document.getElementById("sarrazin");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let jaures = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[20].fields.address;
        let latestValue =  data.records[20].fields.latest_value;
        let modif = document.getElementById("jaures");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let duc = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[21].fields.address;
        let latestValue =  data.records[21].fields.latest_value;
        let modif = document.getElementById("duc");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let bellamy = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[22].fields.address;
        let latestValue =  data.records[22].fields.latest_value;
        let modif = document.getElementById("bellamy");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let bisson = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[23].fields.address;
        let latestValue =  data.records[23].fields.latest_value;
        let modif = document.getElementById("bisson");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let meignen = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[25].fields.address;
        let latestValue =  data.records[25].fields.latest_value;
        let modif = document.getElementById("meignen");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let loquidy = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[26].fields.address;
        let latestValue =  data.records[26].fields.latest_value;
        let modif = document.getElementById("loquidy");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let sully = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[28].fields.address;
        let latestValue =  data.records[28].fields.latest_value;
        let modif = document.getElementById("sully");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let garennes = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[29].fields.address;
        let latestValue =  data.records[29].fields.latest_value;
        let modif = document.getElementById("garennes");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let liberte = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[35].fields.address;
        let latestValue =  data.records[35].fields.latest_value;
        let modif = document.getElementById("liberte");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let buerne = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[40].fields.address;
        let latestValue =  data.records[40].fields.latest_value;
        let modif = document.getElementById("buerne");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let brossard = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[43].fields.address;
        let latestValue =  data.records[43].fields.latest_value;
        let modif = document.getElementById("brossard");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});

let auvigne = fetch(url)
    .then(response => response.json())
    .then(data => {   
        let address = data.records[44].fields.address;
        let latestValue =  data.records[44].fields.latest_value;
        let modif = document.getElementById("auvigne");
            modif.innerHTML = address + " <br>" + latestValue + " V/m";
});
*/