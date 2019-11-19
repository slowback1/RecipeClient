const url = "";
const options = {
    method: "get"
}
let recipies = [];
fetch(url, options) 
    .then(res => res.json()) 
    .then(json => {
        body = json.ResponseBody;
        body.map(item => {
            recipies.push(new Recipie(
                item.RecipieName,
                item.RecipieDescription,
                item.TimesCooked,
                item.RecipieIngredients,
                item.RecipieDirections
            ));
        })
    })
    .catch(error => console.error(error));