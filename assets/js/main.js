console.log('Teste bem sucedido!');
const pokemonList = document.querySelector('#pokemonOl');
const loadMoreButton = document.querySelector('#loadMoreButton');
const limit = 20;
let offset = 0;


// function convertPokemonTypesToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// function convertPokemonToHtml(pokemon){
//     return `<li class="pokemon ${pokemon.type}">
//                 <span class="number">#${pokemon.number}</span>
//                 <span class="name">${pokemon.name}</span>

//                 <div class="detail">
//                     <ol class="types">
//                         ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                     </ol>

//                    <img src="${pokemon.photo}" alt="${pokemon.name}"> 
//                 </div>                
//             </li>`
// }



function loadPokemonItems (offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) =>
        `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                   <img src="${pokemon.photo}" alt="${pokemon.name}"> 
                </div>                
            </li>`).join('')
    pokemonList.innerHTML += newHtml
})
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
})

// pokeApi.getPokemons().then((pokemons) => {
//     for(let i = 0; i < pokemons.length; i++){
//         const pokemon = pokemons[i];
//         pokemonList.innerHTML += convertPokemonToHtml(pokemon);
//     }
// })
