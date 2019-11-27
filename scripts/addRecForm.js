function handleSubmit(e) {
    e.preventDefault();
    let ingHtml = document.getElementById('ingredientListAdd').children;
    let ingArr = [];
    for(let i = 1; i < ingHtml.length; i++) {
        ingArr.push(ingHtml[i]);
    }
    let dirHtml = document.getElementById('directionListAdd').children;
    let dirArr = [];
    for(let j = 1; j < dirHtml.length; j++) {
        dirArr.push(dirHtml[j]);
    }
    let ingredients = parseIngredients(ingArr);
    let directions = parseDirections(dirArr);
    let name = document.getElementById('rname').value;
    let rdesc = document.getElementById('rdesc').value;
    let rtime = document.getElementById('rtime').value;
    let querystring = `{"RecipieName": "${name}", "RecipieDescription": "${rdesc}", "TimesCooked": ${rtime}, "RecipieIngredients": "${ingredients}", "RecipieDirections": "${directions}"}`;
    let u = Config.baseURL + `/recipies/temporary/set?i=` + querystring;
    let o = {
        method: "POST"
    }
    return fetch(u, o)
        .then(res => res.json())
        .then(json => {
            if(json.responseID === 200) {
                changePage(300);
            }
            changePage(300);
            addRecipieModal();
        })
        .catch(error => console.error(error));
}
function parseIngredients(ingArr) {
    let res = ``;
    ingArr.map((ingElem) => {
        let ingName = ingElem.children[0].value;
        let ingCount = ingElem.children[1].value;
        if(ingName !== "" && ingCount !== "-1") {
            res = res + `${ingName} ${ingCount},`;
        }
    });
    return res.substr(0);

}
function parseDirections(dirArr) {
    let res = ``;
    dirArr.map((dirElem) => {
        let direction = dirElem.children[0].value;
        let isStar = false;
        if(typeof dirElem.children[3] !== 'undefined') {
            isStar = dirElem.children[3].checked;
        }
        if(direction !== "") {
            if(isStar) {
                res = res + ` !star;`;
            } 
            res = res + `${direction} !stop;`;
        }
    });
    return res;
}
function addRecipieModal() {
    document.getElementById('modalAnchor').innerHTML = pages[302];
    setTimeout(() => {removeModal()}, 5000);
}
function removeModal() {
    document.getElementById('modalAnchor').innerHTML = "";
}



function addForm(type) {
    let target;
    if(type === 0) {
        target = "ingredientListAdd";
        document.getElementById(target).innerHTML = document.getElementById(target).innerHTML + pages[401];
    } else if(type === 1) {
        target = "directionListAdd";
        document.getElementById(target).innerHTML = document.getElementById(target).innerHTML + pages[402];
    } else {
        return false;
    }
}
function delForm(e) {
    e.preventDefault;
    let target;
    if(e.target.parentNode.parentNode.id === "ingredientListAdd" || e.target.parentNode.parentNode.id === "directionListAdd") {
        target = e.target.parentNode;
    } else {
        target = e.target.parentNode.parentNode;
    }
    target.outerHTML = "";
    return false;
}