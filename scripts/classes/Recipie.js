
class Recipie {
    
    name = "";
    description = "";
    times = -1;
    ingredients = "";
    directions = "";
    constructor(name, description, times, ingredients, directions) {
        this.name = name;
        this.description = description;
        this.times = times;
        this.ingredients = ingredients;
        this.directions = directions;
    }
    checkIfValid() {
        if(this.name === "" || this.description === "" || this.times === -1 || this.ingredients === "" || this.directions === "") {
            return false;
        } else {
            return true;
        }
    }
    ProcessIngredients(ing) {
        let resArr = [];
        let ingsArr = ing.split(",");
        ingsArr.map(a => {
            let ingArr = a.split(' ');
            if(ingArr.length > 2) {
                ingArr.shift();
            }
            for(var i = 0; i > ingArr[1].length; i++) {
                char = ingArr[1].charAt(i);
                if(char == char.toUpperCase()) {
                    ingArr[1] = ingArr[1].substr(0,i) + " " + char.toLowerCase() + ingArr[1].substr(i);
                }
            }
            resArr.push(ingArr);
        });
        return resArr;
    }
    ProcessDirections(dir) {
        let resArr = [];
        let dirArr = dir.split("&stop;");
        dirArr.map(d => {
            let firstchar = d.trim().substring(0,1); 
            resArr.push(firstchar + d.trim().substr(1) + ".");
        });
        return resArr;
    }
    build(type, index) {
        let response = ``;
        if(type === 0) {
            response = response + `<div class="recBox" onClick='getDetailedRecipie(${index})'><h4>${this.name} <i class="far fa-clock"></i>${this.times} Minutes</h4><p>${this.description}</p></div>`;
            return response;
        }
        response = `<div class="recBox"'><h4>${this.name} <i class="far fa-clock"></i>${this.times} Minutes</h4><p class='recdesc'>${this.description}</p>`
        let ingredients = this.ProcessIngredients(this.ingredients);
        let directions = this.ProcessDirections(this.directions);
        let resIng = `<div class='ingredients'>`;
        ingredients.map(ing => {
            let r = `<div class='ingredient'><div class='ing${ing[0]}'></div><p>${ing[1]}</p></div>`;
            resIng = resIng + r;
        });
        resIng = resIng + `</div>`;
        let resDir = `<ul class="directions">`
        directions.map(dir => {
            let r = `<li class='dir `;
            let d;
            if(dir.startsWith('&star;')) {
                d = dir.substr(7);
                r = r + `subDir'>`;
            } else {
                d = dir;
                r = r + `'>`
            }
            d = d.charAt(0).toUpperCase() + d.substr(1);
            r = r + `${d}</li>`;
            resDir = resDir + r;
        });
        resDir = resDir + `</ul>`;
        response = response + resIng + resDir + `</div>`;
        return response;
    }
}