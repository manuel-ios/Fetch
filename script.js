let input =  document.querySelector('input')
let button = document.querySelector('button')



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



let div_Reloj = document.createElement('div') 

function reloj(){
    let hrActual =  new Date()
    let hr =  hrActual.getHours()
    let min =  hrActual.getMinutes()
    let seg =  hrActual.getSeconds()
    hr =  hr < 9 ? "0"+ hr: hr
    min = min < 9 ? "0" + min : min 
    seg = seg < 9 ? "0" + seg :  seg 
    let time  =  hr + ":" + min+":"+seg 
    div_Reloj.textContent = time
    document.body.append(div_Reloj)
    console.log(time)   
    setTimeout(function(){
        reloj()
    }, 1000)

}
//funcion reloj

reloj()