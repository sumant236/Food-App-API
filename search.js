function navbar() {
    return `<nav id="nav">
        <div>
            <input type="text" placeholder="Search Food"/>
            <i class="fas fa-search" style="font-size: 18px; border: 2px solid #000; padding: 3px; border-radius: 5px;"></i>
        </div>
        <a href="latest.html">Latest Recipes</a>
        <a href="randomRecipe.html">Random Recipe</a>
    </nav>
    <form>
        <h1 style="display: none;" id="search">Searched Food</h1><div id="searchData"></div>
        <h1>Latest Recipe:</h1><div id="latestData"></div>
    </form>`
}
document.body.innerHTML = navbar();
window.addEventListener('load', ()=>{
    latestRecipe();
    recipeOfTheDay();
    // event.preventDefault()
})
const btn = document.querySelector("i");
btn.addEventListener('click', searchData)

function searchData() {
    // event.preventDefault();
    const value = document.querySelector('input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    .then(resolve => resolve.json())
    .then(resolve => {
        const search = document.getElementById('search');
        search.style.display = 'block';
        showData(resolve.meals, 'searchData')})
    .catch(err => alert('Invalid Food Name!!'));
    document.querySelector('input').value = '';
}

function recipeOfTheDay() {
    // event.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(resolve => resolve.json())
    .then(resolve => showData(resolve.meals, 'recipeOfDay'))
    .catch(err => console.log('Error'))
}

function latestRecipe() {
    // event.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(resolve => resolve.json())
    .then(resolve => showData(resolve.meals, 'latestData'))
    .catch(err => console.log('Error!!'))
}

function showData(data, id) {
    const cont = document.getElementById(id)
    cont.textContent = null
    for(let i in data){
        let div = document.createElement('div')
        let mealImage = document.createElement('img');
        mealImage.src = data[i].strMealThumb;
        let h4 = document.createElement('h4')
        h4.textContent = `${data[i].strMeal}`
        div.append(mealImage, h4)
        cont.append(div)
    }
    console.log(data)
}

export {latestRecipe, navbar}