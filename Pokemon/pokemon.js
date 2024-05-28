let buttonKanto = document.getElementById("kanto")
let buttonJohto = document.getElementById("johto")
let buttonHoenn = document.getElementById("hoenn")
let buttonSinnoh = document.getElementById("sinnoh")
let buttonUnova = document.getElementById("unova")
let buttonKalos = document.getElementById("kalos")
let buttonAlola = document.getElementById("alola")
let buttonGalar = document.getElementById("galar")
let buttonPaldea = document.getElementById("paldea")
let buttonAllRegion = document.getElementById("random")

function kantoId() { 
        let kantoId = Math.ceil(Math.random()*151)
return kantoId}
function johtoId() {
        let johtoId = Math.ceil(Math.random()*(251 - 152) + 152)
return johtoId}
function hoennId(){
        let hoennId = Math.ceil(Math.random()*(386 - 252) + 252)
return hoennId}
function sinnohId(){
    let sinnohId = Math.ceil(Math.random()*(493 - 387) + 387)
return sinnohId}
function unovaId(){
    let unovaId = Math.ceil(Math.random()*(649 - 388) + 388)
return unovaId}
function kalosId(){
    let kalosId = Math.ceil(Math.random()*(721 - 650) + 650)
return kalosId}
function alolaId(){
    let alolaId = Math.ceil(Math.random()*(809 - 722) + 722)
return alolaId}
function galarId(){
    let galarId = Math.ceil(Math.random()*(905 - 810) + 810)
return galarId}
function paldeaId(){
    let paldeaId = Math.ceil(Math.random()*(1025 - 906) + 906)
return paldeaId}
function randomId(){
    let randomId = Math.ceil(Math.random()*1025)
return randomId}

function kanto() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + kantoId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function johto() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + johtoId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function hoenn() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + hoennId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function sinnoh() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + sinnohId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function unova() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + unovaId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function kalos() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + kalosId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function alola() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + alolaId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function galar() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + galarId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function paldea() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + paldeaId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}
function allRegions() {
    fetch ('https://pokeapi.co/api/v2/pokemon/' + randomId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
}

buttonKanto.addEventListener("click", kanto)
buttonJohto.addEventListener("click", johto)
buttonHoenn.addEventListener("click", hoenn)
buttonSinnoh.addEventListener("click", sinnoh)
buttonUnova.addEventListener("click", unova)
buttonKalos.addEventListener("click", kalos)
buttonAlola.addEventListener("click", alola)
buttonGalar.addEventListener("click", galar)
buttonPaldea.addEventListener("click", paldea)
buttonAllRegion.addEventListener("click", allRegions)
/*
fetch ('https://pokeapi.co/api/v2/pokemon/' + hoennId())
    .then(response => response.text())
    .then(pokemonJSON => {
        const pokemon = JSON.parse(pokemonJSON)

        renderImage(pokemon.sprites.front_default)
        
        console.log(pokemon)
    })
*/    

function renderImage(url) {
    const img = document.createElement("img")
    img.src = url
    
    document.body.append(img)
}