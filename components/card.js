
var card = function ({number, name, type1, type2 }) {

    let secondImage = type2 ? `<img src="images/types/${type2}IC.png" alt="${type2} type">` : ''; 

    return `
        <div class="card">
            <div class="card-header">
                <img src="images/sprites/home_${number}.png" alt="${name} Image">
            </div>
            <div class="card-body">
                <div class="card-number">#${number}</div>
                <h5 class="card-Name">${name}</h5>
                <div class="card-type">
                    <img src="images/types/${type1}IC.png" alt="${type1} type">
                    ${secondImage}
                </div>
            </div>
        </div>`;
}