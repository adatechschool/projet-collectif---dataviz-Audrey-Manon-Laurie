
let result = fetch('https://api.electricitymap.org/v3/zones', {
    headers: {
        'X-BLOBR-KEY' : 'D0PFZaub66YSj8ogUJTlZRpg1hqXXYlT'
    }
})
    .then(response => response.json())
    .then(data => {
        let poland = data.PL;
        let modif = document.getElementById("date1");
            modif.innerHTML = poland
        /*let date = data.records[0].fields.date_heure;
        let co2 =  data.records[0].fields.taux_co2;
        let nucleaire = data.records[0].fields.nucleaire;
        let gaz = data.records[0].fields.gaz;
        let modif = document.getElementById("date1");
                    modif.innerHTML = date + " " + "<br>" + co2 + " " + "<br>" + nucleaire + " " + "<br>" + gaz;*/
    });