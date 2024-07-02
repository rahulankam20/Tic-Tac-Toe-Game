let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let winner = document.querySelector(".winner-msg")
// let hidden = document.querySelector(".hidden");
let msg = document.querySelector(".para");
let count = 0;

let turnO = true; //player X and player O

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO =  true;
    count = 0;
    enableBoxes();
    winner.classList.add("hidden");
}

boxes.forEach((box) => {
   box.addEventListener("click", () => {
    if(turnO){
        box.innerText= "O";
        turnO = false;
        box.style.color = "#8C271E"; 
        //  "#566246";
    } else {
        box.innerText= "X";
        turnO = true;
        box.style.color = "#00004C";
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
        gameDraw();
      }
   })
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    winner.classList.remove("hidden");
    disableBoxes();
  };

const disableBoxes = () => {
    for(let box of boxes) {
        box.disable = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText= "";
    }
}

const showWinner = (winner) => {
    msg.innerText= (`Congratulations!!, Winner is ${winner}`);
    hidden.classList.remove("hidden");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                winner.classList.remove("hidden");
                showWinner(pos1Val);
                return true;    
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);

 