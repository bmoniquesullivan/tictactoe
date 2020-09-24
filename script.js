var turn = document.getElementById("turn");
var boxes = document.querySelectorAll("#main div");
var Xor0 = 0;

function winnerBoxes(winner1, winner2, winner3) {
  winner1.classList.add("win");
  winner2.classList.add("win");
  winner3.classList.add("win");
  turn.innerHTML = "Player " + winner1.innerHTML + " Won!!! Congratulations";
  turn.style.fontSize = "35px";
}

function getWinner() {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");
  var box5 = document.getElementById("box5");
  var box6 = document.getElementById("box6");
  var box7 = document.getElementById("box7");
  var box8 = document.getElementById("box8");
  var box9 = document.getElementById("box9");

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  )
    winnerBoxes(box1, box2, box3);

  if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  )
    winnerBoxes(box4, box5, box6);

  if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  )
    winnerBoxes(box7, box8, box9);

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  )
    winnerBoxes(box1, box4, box7);

  if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  )
    winnerBoxes(box2, box5, box8);

  if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  )
    winnerBoxes(box3, box6, box9);

  if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  )
    winnerBoxes(box3, box5, box7);

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  )
    winnerBoxes(box1, box5, box9);
}

for (var i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function () {
    if (this.innerHTML !== "X" && this.innerHTML !== "0") {
      if (Xor0 % 2 === 0) {
        console.log(Xor0);
        this.innerHTML = "X";
        turn.innerHTML = "0 plays now";
        getWinner();
        Xor0 += 1;
      } else {
        console.log(Xor0);
        this.innerHTML = "0";
        turn.innerHTML = "X plays now";
        getWinner();
        Xor0 += 1;
      }
    }
  };
}

function playAgain() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("win");
    boxes[i].innerHTML = "";
    turn.innerHTML = "Play";
    turn.style.fontSize = "25px";
  }
}
