import './sass/main.scss'

/* DOM elements */
const cellElement = document.querySelectorAll('.cell');

/* GLOBALS */
let shiftChange = true;
const cross = 'cross';
const circle = 'circle';
const win = [
    
    [0,1,2],
    [3,4,5],  // Horizontal Win!!
    [6,7,8],

    [0,3,6],
    [1,4,7], // Vertical Win!!
    [2,5,8],

    [2,4,6], // Diagonal Win!!
    [0,4,8]
]

/* EVENT LISTENERS */
cellElement.forEach(element => {

    element.addEventListener('click', handleClick);
    
}) 

function handleClick(e) {
    const cell = e.target;

    const currenMark = shiftChange ? cross : circle;

    const cellIsMarked = (cell.classList.contains(cross) ||
    cell.classList.contains(circle));

    if(cellIsMarked) return;

    placeMark(cell,currenMark)

   checkWin(currenMark);

 shiftChange = !shiftChange;

 }


 function placeMark(cell,markToAdd){
    cell.classList.add(markToAdd)
 }

 // Logic Win

 function checkWin(currenMark){
    return win.some(conbination =>{
        return conbination.every(cell =>{
            return cellElement[cell].classList.contains(currenMark);
        })
    })
 }

