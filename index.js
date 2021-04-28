var init = () => {
    
    // accumulates all of our cards
    var cardCollection = '';
    // gets the our #container element from the dom
    var cardContainer = document.querySelector('#container');
    // loop through our dataset, use to build cards
    for (let i = 0; i < pokemonList.length; i++) {
        // add string template to whatever already exists
        cardCollection += card(pokemonList[i]);
    }
    // set the card collection string as a list of
    // child nodes within the container element.
    cardContainer.innerHTML = cardCollection;
}

// call our initializer
init();

