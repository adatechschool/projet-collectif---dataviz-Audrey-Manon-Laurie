
let result = fetch('https://odre.opendatasoft.com/api/records/1.0/search/?dataset=eco2mix-national-tr&q=date_heure%3A%5B2022-11-26T23%3A00%3A00Z+TO+2022-11-28T22%3A59%3A59Z%5D&lang=fr&sort=-date_heure&facet=nature&facet=date_heure') 
                .then(response => response.json())
                .then(data => {
                    let modif = document.getElementById("date1");  
                    modif.innerHTML = data.records[0].fields.taux_co2;
                });