const NotLoggedInHtml = `
<div class="hero">
    <div class="ctaBox">
        <h1>Andrew's Recipe Book</h1>
        <h3>A growing collection of food instructions!</h3>
        <div class='ctaButtons'>
            <button class="ctaPrimary" onClick="changePage(300)">Go to Recipies</button>
            <button class="ctaSecondary" onClick="changePage(400)">Suggest a New Recipie</button>
            
</div></div></div>`;
const aboutPageHtml = `
<div class="about">
    <h2>About This Website</h2>
    <p>This is Andrew Wobeck’s personal (growing!)  recipe book.  Since he is an avid “eyeballer,” all recipes on this website use more “general” measurements, such as “a little,” or, “a tiny amount.”  Always open to suggestions, there is also a way to suggest a new recipe for Andrew to try cooking in the future, and if he likes it, to add to the recipe book.  Due to the exact nature of baking, there will be no baking recipes on this website.</p>
    <p>In technical terms, this website is split into separate front-end and back-end sections.  The front-end is a single-page-application (SPA) written in pure HTML, CSS (with the help of some SASS preprocessing), and JavaScript, no frameworks involved!  The back-end is a simple ASP.NET API written in C#, while the data is being stored in a MicroSoft Azure SQL database.    </p>
    <p>[Please note that most of the content written on the website was written while sleep-deprived and without the use of a spell-checker, so please do your best to ignore any spelling mistakes until I correct them]</p>
</div>`;
const LoginPageHtml = `
<div class="loginPage">
    <form onSubmit="">
        <label for="username">Username:<input type="text" name="username" placeholder="username" /></label>
        <label for="password">Password:<input type="password" name="password" placeholder="password" /></label>
        <input type="submit" name="login" value="Log in" />
    </form>
    <p class="loginPageLink" onClick="changePage(201)">Not a Registered User?</p>
</div>`
const RegisterPageHtml = `
<div class="about">
    <h2>How To Register:</h2>
    <p>That's simple: you don't!  The only user account is Andrew Wobeck's, and it will stay that way for the forseeable future.  You are free to continue as a gust using the button below, however.</p>
    <button class="secondaryBtn" onClick="changePage(300)">Continue as a Guest</button>
</div>`
const RecipiePageHtml = `<div id="recipiePage"></div>`;
const DetailedRecipieHtml = `<div id='recipieDetails'></div>`;
const AddRecHtml = `        
<div class="addRecipie">
    <h2>Suggest a New Recipie</h2>
    <form id="addRecForm">
        <label for="name">Recipie Name: <input type="text" id="rname" placeholder="Recipie Name" required /></label>
        <label for="description">Recipie Description: <input type="text" id="rdesc" placeholder="Recipie Description" required /></label>
        <label for="time">Approximate Cooking Time (in minutes): <input type="number" id="rtime" placeholder="0" required/></label>
        <div id="ingredientListAdd">
            <label for="ingredient">Ingredients:</label>
            <div>
                <input type="text" class="rIng" placeholder="ingredient" required />
                <select class="rIngAmt" required>
                    <option value="-1">Select Amount:</option>
                    <option value="0">A tiny amount(ex: most seasoning)</option>
                    <option value="1">A small amount</option>
                    <option value="2">A medium amount</option>
                    <option value="3">A large amount</option>
                </select>
                <button class="addBtn" onclick="addForm(0)"><i class="fas fa-plus"></i></button>
            </div>
        </div>
        <div id="directionListAdd">
            <label for="direction">Recipie Directions:</label>
            <div>
                <textarea type="text" class="rIng" placeholder="direction" required ></textarea>
                <button class="addBtn" onclick="addForm(1)"><i class="fas fa-plus"></i></button>
            </div>
        </div>
        <input type="submit" value="Suggest Recipie">
    </form>
</div>`;
const addIngPartial = `
<div>
    <input type="text" class="rIng" placeholder="ingredient">
    <select class="rIngAmt">
        <option value="-1">Select Amount:</option>
        <option value="0">A tiny amount(ex: most seasoning)</option>
        <option value="1">A small amount</option>
        <option value="2">A medium amount</option>
        <option value="3">A large amount</option>
    </select>
    <div class='btns'>
    <button class="addBtn" onclick="addForm(0)"><i class="fas fa-plus"></i></button>
    <button class="rmBtn" onClick="return delForm(event)"><i class="fas fa-times"></i></button>
    </div>
</div>
`;
const addDirPartial = `
<div>
    <textarea type="text" class="rDir" placeholder="direction" ></textarea>
    <div class='btns'>
        <button class="addBtn" onclick="addForm(1)"><i class="fas fa-plus"></i></button>
        <button class="rmBtn" onClick="return delForm(event)"><i class="fas fa-times"></i></button>
        <input type="checkbox" value="isStar" /><p>Indent this direction</p>
    </div>
</div>
`;
const aRecModal = `
    <div class="modal">
        <p>Recipie Suggestion has been added.</p>
    </div>
`;
const mobNavModal = `
    <div class="mobModal">
        <p  onClick="toggleMobileModal(); changePage(0)">Home</p>
        <p  onClick="toggleMobileModal(); changePage(100)">About This</p>
        <p  onClick="toggleMobileModal(); changePage(300)">View Recipies</p>
        <p  onClick="toggleMobileModal(); changePage(400)">Suggest Recipie</p>
    </div>
`
const pages = {
    0: NotLoggedInHtml,
    1: mobNavModal,
    100: aboutPageHtml,
    200: LoginPageHtml,
    201: RegisterPageHtml,
    300: RecipiePageHtml,
    301: DetailedRecipieHtml,
    302: aRecModal,
    400: AddRecHtml,
    401: addIngPartial,
    402: addDirPartial
}