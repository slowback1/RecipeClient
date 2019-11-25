let recipies = [];
function fetchData() {
    const url = Config.baseURL + "/recipies/permenant/get";
    const options = {
        method: "get"
    }
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
            });   
        })
        .catch(error => console.error(error));
}
fetchData();