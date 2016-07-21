function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sonntag";
    weekday[1] = "Montag";
    weekday[2] = "Dienstag";
    weekday[3] = "Mittwoch";
    weekday[4] = "Donnerstag";
    weekday[5] = "Freitag";
    weekday[6] = "Samstag";

    var n = weekday[d.getDay()];
    document.getElementById("dotw").innerHTML = n;

var myDate = new Date(); 
  
if ( myDate.getHours() < 6 )  
{ 
    document.getElementById('tageszeit').innerHTML='Nacht'; 
} 
else 
if ( myDate.getHours() >= 6 && myDate.getHours() <= 12 ) 
{ 
    document.getElementById('tageszeit').innerHTML='Morgen'; 
} 
else 
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
{ 
    document.getElementById('tageszeit').innerHTML='Mittag'; 
} 
else  
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ 
    document.getElementById('tageszeit').innerHTML='Abend'; 
} 

var months = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];

var month = months[myDate.getMonth()];

	document.getElementById('monat').innerHTML= myDate.getDate() + " " + month; 

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;


}
