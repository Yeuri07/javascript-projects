const nameSim = document.querySelector('.name');
const picture = document.querySelector('[picture]');
const reloadButton = document.querySelector('.refresh');

const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

function iniciarDatosApi(){

fetch(URL)
.then((res) => res.json())
.then((result) =>{

    nameSim.innerText = result[0].character;
    picture.setAttribute('src', result[0].image)
   
})
.catch(console.error);


}


//Iniciando Api

window.addEventListener('load',iniciarDatosApi);

reloadButton.addEventListener('click',iniciarDatosApi);