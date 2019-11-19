
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
function loadRecipies(recarr) {
    let reshtml = `<h2>All Recipies</h2>`;
    recarr.map((rec, ind) => {
        if(rec.checkIfValid()) {
            reshtml = reshtml + rec.build(0, ind);
    }
    });
    document.getElementById('recipiePage').innerHTML = reshtml;
}
function getDetailedRecipie(ind) {
    changePage(301);
    let rec = recipies[ind];
    document.getElementById('recipieDetails').innerHTML = rec.build(1);
}
function changePage(num) {
    var main = document.getElementById('main');
    main.innerHTML = pages[num];
    switch(num) {
        case 0:
            switchActiveTab('home');
            break;
        case 100: 
            switchActiveTab('about');
            break;
        case 200:
            switchActiveTab('loginBox');
            break;
        case 300:
            loadRecipies(recipies);
            switchActiveTab("recipies");
            break;
        default:
            break;
    }
}
function switchActiveTab(tabname) {
    let selected = document.getElementsByClassName('selected');
    selected[0].classList.remove('selected');
    document.getElementById(tabname).classList.add('selected');
}
//set footer year to current year
document.getElementById('year').innerHTML = (new Date().getFullYear());

//check if user is logged in
let IsLoggedIn = false;
//TO-DO, implement a real check for valid cookie
if(getCookie("userAuth").length > 32) {
    IsLoggedIn = true;
}

if(IsLoggedIn) {
    document.getElementById('loginBox').innerHTML = "<button class='loginbutton'>Log Out</button>";
} else {
    document.getElementById('loginBox').innerHTML = "<button onClick='changePage(200)' class='loginbutton'>Log In</button>";
    changePage(0);
}