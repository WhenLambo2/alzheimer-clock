function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunnuntai";
    weekday[1] = "Maanantai";
    weekday[2] = "Tiistai";
    weekday[3] = "Keskiviiko";
    weekday[4] = "Torstai";
    weekday[5] = "Perjantai";
    weekday[6] = "Lauantai";

    var n = weekday[d.getDay()];
    document.getElementById("dotw").innerHTML = n;

var myDate = new Date(); 
  
if ( myDate.getHours() < 6 )  
{ 
    document.getElementById('daytime').innerHTML='Yö'; 
} 
else 
if ( myDate.getHours() >= 6 && myDate.getHours() <= 12 ) 
{ 
    document.getElementById('daytime').innerHTML='Aamu'; 
} 
else 
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
{ 
    document.getElementById('daytime').innerHTML='Päivä'; 
} 
else  
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ 
    document.getElementById('daytime').innerHTML='Ilta'; 
} 

var months = ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu','Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'];

var month = months[myDate.getMonth()];

	document.getElementById('month').innerHTML= myDate.getDate() + " " + month; 

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
