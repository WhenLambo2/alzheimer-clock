function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "niedziela";
    weekday[1] = "poniedziałek";
    weekday[2] = "wtorek";
    weekday[3] = "środa";
    weekday[4] = "czwartek";
    weekday[5] = "piątek";
    weekday[6] = "sobota";

    var n = weekday[d.getDay()];
    document.getElementById("dotw").innerHTML = n;

    var myDate = new Date();

    if (myDate.getHours() < 6) {
        document.getElementById('pora_dnia').innerHTML = 'nocą';
    }
    else if (myDate.getHours() >= 6 && myDate.getHours() <= 12) {
        document.getElementById('pora_dnia').innerHTML = 'rano';
    }
    else if (myDate.getHours() >= 12 && myDate.getHours() <= 17) {
        document.getElementById('pora_dnia').innerHTML = 'południe';
    }
    else if (myDate.getHours() > 17 && myDate.getHours() <= 24) {
        document.getElementById('pora_dnia').innerHTML = 'wieczorem';
    }

    var months_genitive = ['stycznia', 'lutego', 'marzca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];

    var month = months_genitive[myDate.getMonth()];

    document.getElementById('miesiac').innerHTML = myDate.getDate() + " " + month;

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('czas').innerHTML =
        h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;


}
