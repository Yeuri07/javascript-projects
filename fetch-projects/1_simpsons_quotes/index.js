const nameSim = document.querySelector('.name');
const picture = document.querySelector('[picture]');
const reloadButton = document.querySelector('.refresh');
const quotes_simpson = document.querySelector('[quotes]')

const URL_API = 'https://thesimpsonsquoteapi.glitch.me/quotes';

function iniciarDatosApi(){

fetch(URL_API)
.then((res) => res.json())
.then((result) =>{

    nameSim.innerText = result[0].character;
    picture.setAttribute('src', result[0].image);
    quotes_simpson.innerText = result[0].quote;
   
})
.catch(console.error);


}


//Iniciando Api

window.addEventListener('load',iniciarDatosApi);

reloadButton.addEventListener('click',iniciarDatosApi);