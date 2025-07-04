const btns = document.querySelectorAll(".btn");
const reset = document.querySelector(".reset");
const h2 = document.getElementById("winText");
const win = document.getElementById("win");

let currentPlayer = "X";
let winner = "";

let winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function checkWinner() {
  for (let pattern of winningCombinations) {
    const box1 = btns[pattern[0]].innerText;
    const box2 = btns[pattern[1]].innerText;
    const box3 = btns[pattern[2]].innerText;

    if (box1 !== "" && box1 === box2 && box2 === box3) {
      h2.style.display = "block";
      win.innerText = box1;

      btns.forEach((btn) => (btn.disabled = true));
    }
  }
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    if (btn.textContent === "") btn.textContent = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWinner();
  });
});

reset.addEventListener("click", () => location.reload());
console.log('hello');


