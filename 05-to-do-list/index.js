const inputText = document.querySelector('[input-text]');
const listAdd =  document.querySelector('[list-add]');


function addTask() {
    if(inputText.value === ''){

        alert("You must write something!");
    }else{

        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        listAdd.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputText.value = '';
    saveDate();
}

listAdd.addEventListener('click',(e)=>{
   
   
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDate();
    }

});

function saveDate(){
    localStorage.setItem("data", listAdd.innerHTML);
}
function showTask(){
    listAdd.innerHTML = localStorage.getItem("data");
}
showTask();
