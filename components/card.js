
var card = function ({number: pokemonNumber, 
                        name: pokemonName,
                       type1: type1,
                       type2: type2 } = species) {

    let secondImage = type2 ? `<img src="images/types/${type2}IC.png" alt="${type2} type">` : ''; 

    return `
        <div class="card">
            <div class="card-header">
                <img src="images/sprites/home_${pokemonNumber}.png" alt="${pokemonName} Image">
            </div>
            <div class="card-body">
                <div class="card-number">#${pokemonNumber}</div>
                <h5 class="card-Name">${pokemonName}</h5>
                <div class="card-type">
                    <img src="images/types/${type1}IC.png" alt="${type1} type">
                    ${secondImage}
                </div>
            </div>
        </div>`;
}