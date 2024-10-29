let buttons = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset-btn");
let message = document.getElementById("msg");
let newGame = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let main = document.querySelector(".hide1");


let turn0 = true; //Player X & Player 0
let count = 0;

let winArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let disableBtn = () => {
    for (let button of buttons) {
        button.disabled = true;
    }
}

let enableBtn = () => {
    for (let button of buttons) {
        button.innerText = "";
        button.disabled = false;
    }
}

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn0) {
            btn.innerText = "0";
            btn.style.color = "red";
            turn0 = false;
        } else {
            btn.innerText = "X";
            btn.style.color = "green";
            turn0 = true;
        }
        btn.disabled = true;
        let isWinner = checkWinner();
        count++;

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
})

let gameDraw = () => {
    message.innerText = "Game was a Draw.";
    msgContainer.classList.remove("hide");
    disableBtn();
}

let showWinner = (winner) => {
    message.innerText = `Congratulation, Player${winner} is winner.`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

let checkWinner = () => {
    for (let array of winArrays) {
        let arr1 = buttons[array[0]].innerText;
        let arr2 = buttons[array[1]].innerText;
        let arr3 = buttons[array[2]].innerText;

        if (arr1 !== "" && arr2 !== "" & arr3 !== "") {
            if (arr1 === arr2 & arr2 === arr3) {
                showWinner(arr1);
            }
        }
    }
}

let resetGame = () => {
    turn0 = true;
    count = 0;
    msgContainer.classList.add("hide");
    enableBtn();
}


resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);