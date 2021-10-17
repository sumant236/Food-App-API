import navbar from './navbar.js'
document.body.innerHTML = navbar();

latestRecipe();
const btn = document.querySelector("i");
btn.addEventListener('click', searchData)

function searchData() {
    const value = document.querySelector('input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    .then(resolve => resolve.json())
    .then(resolve => {
        showData(resolve.meals, 'Search Data')})
    .catch(err => alert('Invalid Food Name!!'));
    document.querySelector('input').value = '';
}

function recipeOfTheDay() {
    // event.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(resolve => resolve.json())
    .then(resolve => showData(resolve.meals, 'Recipe Of The Day'))
    .catch(err => console.log(err))
}

function latestRecipe() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(resolve => resolve.json())
    .then(resolve => showData(resolve.meals, 'Latest Data'))
    .catch(err => console.log(err))
}

function showData(data, content) {
    const h1 = document.getElementById('data');
    h1.textContent = content;
    const cont = document.getElementById('content')
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