let input =  document.querySelector('input')
let button = document.querySelector('button')

input.addEventListener('mouseenter',()=>{
    

})

button.addEventListener('click',(e)=>{
   e.preventDefault()
   Pokemon(input.value)
})


function Pokemon(namePokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}/`)
    .then(res => res.json())
    .then(data => crearPokemon(data))
    .catch(err => err.e)
}

function crearPokemon(pokemon){
    let img =  document.createElement('img')
    img.src =  pokemon.sprites.back_default
    let text =  document.createElement('h2')
    text.textContent =  pokemon.name 
    let div  =  document.createElement('div')
    div.appendChild(img)
    div.appendChild(text)
    document.body.append(div)
    console.log(pokemon)
}
