const prinAmmount = document.querySelector("#pinAmnt");
const persantageInput = document.querySelector("#persantage");
let result = document.querySelector("#res");
const calcee = document.querySelector("#calcee");
let bar = document.querySelector(".bar");
let persVal;
calcee.addEventListener("click", function () {
  let priVal = prinAmmount.value;
  persVal = persantageInput.value;
  let total = (priVal * persVal) / 100;
  result.value = total;
  bar.style.height = `${persVal}%`;
});

// persantageInput.addEventListener("keyup", () => {
//   bar.style.height = `${persantageInput.value}%`;
// });
