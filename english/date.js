function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];
    document.getElementById("dotw").innerHTML = n;

var myDate = new Date(); 
  
if ( myDate.getHours() < 6 )  
{ 
    document.getElementById('daytime').innerHTML='Night'; 
} 
else 
if ( myDate.getHours() >= 6 && myDate.getHours() <= 12 ) 
{ 
    document.getElementById('daytime').innerHTML='Morning'; 
} 
else 
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
{ 
    document.getElementById('daytime').innerHTML='Midday'; 
} 
else  
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ 
    document.getElementById('daytime').innerHTML='Evening'; 
} 

var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

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
