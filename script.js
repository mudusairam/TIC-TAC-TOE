let values = Array.from(document.getElementsByClassName("box"));
let flag = 1;
function isFull(values) {
    let x=0;
    for(let j=0;j<values.length;j++){
        if(values[j].innerHTML==="")   
            x++;
    }
    if(x==0)    return true;
    return false;
}
for (let i = 0; i < values.length; i++) {
    values[i].addEventListener('click', function () {
        if (isFull(values) || checkWin("X") || checkWin("O")) {
            return;
          }
        if (flag === 1 && values[i].innerHTML !== "O") {
            values[i].innerHTML = "X";
            flag = 0;
        } else if (flag === 0 && values[i].innerHTML !== "X") {
            values[i].innerHTML = "O";
            flag = 1;
        }
        if (checkWin("X")) {
            setTimeout(()=>alert("Player X wins!"),100);
        } else if (checkWin("O")) {
            setTimeout(()=>alert("Player O wins!"),100);
        } else if (isFull(values)) {
            setTimeout(()=>alert("It's a draw!"),100);
        }
    });
}
function checkWin(player) {
    const winningPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];
    for (let i=0;i<winningPatterns.length;i++) {
        const [a, b, c] = winningPatterns[i];
        if (values[a].innerHTML === player && values[b].innerHTML === player && values[c].innerHTML === player) {
            return true; 
        }
    }
    return false; 
}
const reset=function(){
    {
        for(let i=0;i<values.length;i++)
            values[i].innerHTML = "";
        flag=1;
    }}
let resetBtn=document.getElementById('reset')
resetBtn.addEventListener('click',reset)
