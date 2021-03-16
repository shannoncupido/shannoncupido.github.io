const requestURL ="https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=78dd45fab784bab18dc22ab346c0e943&units=imperial&mode=json";

fetch(requestURL).then(function (response) {
    return response.json();
  }).then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const weatherdata = jsonObject['list'][0]['main']['temp'];
    document.getElementById('currentW').innerHTML=weatherdata;

    const High = jsonObject['list'][0]['main']['temp_max'];
    document.getElementById('High').innerHTML=High;

    const humidity = jsonObject['list'][0]['main']['humidity'];
    document.getElementById('humidity').innerHTML=humidity;

    const WSpeed = jsonObject['list'][0]['wind']['speed'];
    document.getElementById('WSpeed').innerHTML=WSpeed;


    const list = jsonObject['list'];
    for (let i = 1; i < list.length; i++ ) {
      const dt_txt = list[i]["dt_txt"];
      
      if(dt_txt.includes("18:00:00")){
        
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(dt_txt);
        var dayName = days[d.getDay()];

        let temp = jsonObject['list'][i]['main']['temp'];

        let rowOne = document.createElement('th');
        rowOne.textContent = dayName;
        document.getElementById("rowOne").appendChild(rowOne);

        
        let rowTwo = document.createElement('th');

        let weather = jsonObject['list'][i]['weather'][0]['main'];
        let image = document.createElement('img') ;
        if(image && image.style) {
          image.style.height = '70px';
          image.style.width = '70px';}
        image.setAttribute('src',weather +".webp");
        rowTwo.appendChild(image);
        
        
        let p= document.createElement("p");
        p.textContent = temp+" °F";
        rowTwo.appendChild(p);
        document.getElementById("rowTwo").appendChild(rowTwo);
      }
    }
    }
);