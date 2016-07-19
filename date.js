function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Zondag";
    weekday[1] = "Maandag";
    weekday[2] = "Dinsdag";
    weekday[3] = "Woensdag";
    weekday[4] = "Donderdag";
    weekday[5] = "Vrijdag";
    weekday[6] = "Zaterdag";

    var n = weekday[d.getDay()];
    document.getElementById("dotw").innerHTML = n;

var myDate = new Date(); 
  
if ( myDate.getHours() < 6 )  
{ 
    document.getElementById('deeldag').innerHTML='Nacht'; 
} 
else 
if ( myDate.getHours() >= 6 && myDate.getHours() <= 12 ) 
{ 
    document.getElementById('deeldag').innerHTML='Ochtend'; 
} 
else 
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
{ 
    document.getElementById('deeldag').innerHTML='Middag'; 
} 
else  
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ 
    document.getElementById('deeldag').innerHTML='Avond'; 
} 

var months = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];

var month = months[myDate.getMonth()];

	document.getElementById('maand').innerHTML= myDate.getDate() + " " + month; 

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
