var WChill = document.getElementById("WChill");
var current = parseFloat(document.getElementById("current").innerHTML);
var WSpeed = parseFloat(document.getElementById("WSpeed").innerHTML);



if(current<=50 && WSpeed>3){
    var num=35.74+0.6215 * current - 35.75 * WSpeed**0.16+0.4275*current*WSpeed**0.16;

    WChill.innerHTML =num.toFixed(2) + "&deg;F";
}
else{
    WChill.innerHTML="N/A";
}