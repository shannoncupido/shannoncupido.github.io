const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL).then(function (response) {
    return response.json();
  }).then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
  
        let card = document.createElement('section');
        let h4 = document.createElement('h4');
    
        h4.textContent = towns[i].name;

        var townsThatIWant = ["Preston", "Soda Springs","Fish Haven"];

        var n = townsThatIWant.includes(towns[i].name);

        if (n) {
    
  

            let photo = document.createElement('img');
            photo.setAttribute('src', towns[i].photo);
            
            photo.className = "town_picture";
            photo.id = "townNumber" + i;

            card.appendChild(photo);
            card.appendChild(h4);
            card.appendChild(document.createElement('br'));

            let yearFounded = document.createElement('p');
            yearFounded.textContent = "Year Founded: "+towns[i].yearFounded;
            card.appendChild(yearFounded);
            card.appendChild(document.createElement('br'));

            let currentPopulation = document.createElement('p');
            currentPopulation.textContent = "Polpulation: "+towns[i].currentPopulation;
            card.appendChild(currentPopulation);
            card.appendChild(document.createElement('br'));

            let averageRainfall = document.createElement('p');
            averageRainfall.textContent = "Annual Rain Fall: "+towns[i].averageRainfall;
            card.appendChild(averageRainfall);

            document.querySelector('div.cards').appendChild(card);
        }
    }
});



