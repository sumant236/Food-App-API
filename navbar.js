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
        <h1 id="data"></h1>
        <div id="content"></div>
    </form>`
}

export default navbar