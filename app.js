const btn = document.querySelector(".increment");
const btnn = document.querySelector(".reset");
const dec = document.querySelector(".dec");
const se = document.querySelector(".state");
let number = 0;

function stateee() {
  if (number == 0) {
    se.style.backgroundColor = "green";
  }

  else if (number > 0) {
    se.style.backgroundColor = "red";
  }
  else {
    se.style.backgroundColor = "purple";
  }

}

btn.addEventListener("click", () => {
  number++;
  console.log(`Number :${number}`);
  stateee();

})


btnn.addEventListener("click", () => {
  number = 0;
  console.log(`The Number  ${number}`);
  stateee();
})

dec.addEventListener("click", () => {
  number--;
  console.log(`The Number  ${number}`)
  stateee();


})

