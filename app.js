const pokedex = document.getElementById('pokedex');
console.log(pokedex);

const fetchPokemon = async() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
    const pokemon = data.results.map((result, index) => 
    ({
        name: result.name,
        apiURL: result.url,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index +1 }.png`,
        
    }));
    displayPokemon(pokemon);
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon.map((pokeman) => `
    <li class="card" onclick="selectPokemon(${pokemon.id})">
        <img class="card-image" src="${pokeman.image}" />
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
    </li>
    `).join('');
    pokedex.innerHTML = pokemonHTMLString;
};

const selectPokemon = async(id) => {

}


fetchPokemon();


/* old code 
const promises = [];
    for(let i = 1; i <= 150; i++ ){
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res)=> res.json()));
}

    Promise.all(promises).then((results) => {
        const pokemon = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types.map(( type )=> type.type.name).join(', ')
        }));
        displayPokemon(pokemon);
    });
*/