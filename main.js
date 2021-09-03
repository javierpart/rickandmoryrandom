
const tittle = document.querySelector("h1");
const img = document.querySelector("#img-api");
const status1 = document.getElementById("status");
const species = document.getElementById("species");
const gender = document.getElementById("gender");
const btn = document.querySelector("button");
const API = "https://rickandmortyapi.com/api/character/";
const info = {};





btn.addEventListener("click", (e)=> {
    e.preventDefault();

    fetch(API)
    .then((response) => {
        let data = response.json();
        return data;
    })
    .then(data =>{
       const a = data.info.count;
       const url = `${API}${parseInt(Math.random()*a)}`;
       fetch(url)
       .then((response) =>{
           let data = response.json();
           return data;
       })
       .then( data =>{
           info.status = data.status;
           info.species = data.species;
           info.gender = data.gender;
           info.img = data.image;
           info.name = data.name;

       })
       .then( () => displayCharacter());
    })
    
})

function displayCharacter(){
    status1.innerHTML = `<b>Status:</b> ${info.status}`;
    species.innerHTML = `<b>Specie:</b> ${info.species}`;
    gender.innerHTML = `<b>Gender:</b> ${info.gender}`;
    tittle.innerText = info.name;
    img.setAttribute("src", info.img);
}