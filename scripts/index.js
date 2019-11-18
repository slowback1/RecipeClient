function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//set footer year to current year
document.getElementById('year').innerHTML = (new Date().getFullYear());

//check if user is logged in
let IsLoggedIn = false;
//TO-DO, implement a real check for valid cookie
if(getCookie("userAuth").length > 32) {
    IsLoggedIn = true;
}


var main = document.getElementById('main');

function changePage(num) {
    main.innerHTML = pages[num];
}


if(IsLoggedIn) {
    document.getElementById('loginBox').innerHTML = "<button class='loginbutton'>Log Out</button>";
} else {
    document.getElementById('loginBox').innerHTML = "<button onClick='changePage(200)' class='loginbutton'>Log In</button>";
    changePage(0);
}