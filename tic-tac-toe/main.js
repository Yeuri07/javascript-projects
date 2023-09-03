import './sass/main.scss'

/* DOM elements */
const boardElemet = document.querySelector('[board]')
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

startGame();

/* EVENT LISTENERS */
cellElement.forEach(element => {

    element.addEventListener('click', handleClick);
    
}) 

/* ----> FUNCTION <---- */

function startGame() {
    startShiftChange();
    setCellHover(shiftChange);
 }
 
function setCellHover(shiftChange){

    shiftChange ?
    boardElemet.classList.replace('circle-play', 'cross-play'):
    boardElemet.classList.replace('cross-play', 'circle-play');

 }

 function startShiftChange(){
   shiftChange ? boardElemet.classList.add('cross-play'):
   boardElemet.classList.add('circle-play');
 }

function handleClick(e) {
    const cell = e.target;

    const currenMark = shiftChange ? cross : circle;

    const cellIsMarked = (cell.classList.contains(cross) ||
    cell.classList.contains(circle));

    if(cellIsMarked) return;

    placeMark(cell,currenMark)

    if (isWin(currenMark)) {
       alert(`WINS: ${currenMark}`)
    }
     else if(isDraw(currenMark)){
        alert(`DRAW`)
    }

 shiftChange = !shiftChange;
 setCellHover(shiftChange)
 }

 function placeMark(cell,markToAdd){
    cell.classList.add(markToAdd)
 }

 // Logic Win
 function isWin(currenMark){
    return win.some(conbination =>{
        return conbination.every(cell =>{
            return cellElement[cell].classList.contains(currenMark);
        })
    })
 }

 // Logic Draw
 function isDraw(){

    return [...cellElement].every(cell =>{
        return cell.classList.contains(cross) ||
        cell.classList.contains(circle);
    })
 }