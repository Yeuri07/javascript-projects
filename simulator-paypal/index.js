const procesando = document.querySelector('.button');
const elemento = document.querySelector('.form');
const elementoPago = document.querySelector('.contacto');
const main = document.querySelector('.main');
const pagoFinalv = document.querySelector('.pago__final');
let array = [];


procesando.addEventListener('click', ()=>{
    const name = document.querySelector('.name');
    procesando.innerHTML = 'Processing...';
    procesando.classList.add('send-enviar');
    const inputText = document.querySelector('.input__text');
    var valor = inputText.value;
    array.push(valor);

    setTimeout(function() {
       elemento.parentNode.removeChild(elemento);
       elementoPago.style.display = "flex";
       name.innerHTML = valor;
   
    }, 2000);
});

const pagoFinal = document.querySelector('.button-footer');

pagoFinal.addEventListener('click', ()=>{
    const inputCast =document.querySelector('.input__cast');
       const cast = inputCast.value;
       array.push(cast);

       let userFinal = document.querySelector('.user-final');
    elementoPago.parentNode.removeChild(elementoPago);
    const p = document.createElement('P');
    p.classList.add('text-sends')
    p.innerText = 'Send playment...';
   
    main.appendChild(p);

    setTimeout(function() {
    p.parentNode.removeChild(p)
    pagoFinalv.style.display = "flex";
    userFinal.innerText += "You've sent "+array[1]+" USD " + "to "+array[0];
    }, 2000);

    


});
const gohome = document.querySelector('.gohome');


gohome.addEventListener('click' ,()=>{
  location.reload();
})

const inputCast = document.querySelector('.input__cast'); 

inputCast.addEventListener("input", function () {


    if (inputCast.value.trim() === "") {
    
        pagoFinal.disabled = true;
      } else {
      
        pagoFinal.disabled = false;
      }
 
});



const inputText = document.querySelector('.input__text');

inputText.addEventListener("input", function () {
    if (inputText.value.trim() === "") {
  
        procesando.disabled = true;
      } else {
      
        procesando.disabled = false;
      }
 
});

