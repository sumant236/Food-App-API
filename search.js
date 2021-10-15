window.addEventListener('load', ()=>{
    const btn = document.querySelector("i");
    btn.addEventListener('click', searchData)
    latestRecipe();
    recipeOfTheDay();
    // event.preventDefault()
})
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

export {latestRecipe, recipeOfTheDay, showData}