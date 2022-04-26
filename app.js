const tabText = document.querySelector(".tab-content");
const tabOne = document.querySelector(".one");
const tabTwo = document.querySelector(".two");
const tabThree = document.querySelector(".three");

const resOne = document.querySelector("#one");
const resTwo = document.querySelector("#two");
const resThree = document.querySelector("#three");

const details = document.querySelector(".text-tab-bottom");

tabOne.addEventListener("click", handleEvent);

function handleEvent() {
  resOne.style.visibility = "visible";
}

tabTwo.addEventListener("click", handleEvent2);

function handleEvent2() {
  resOne.style.visibility = "hidden";

  resTwo.style.display = "block";
}

tabThree.addEventListener("click", handleEvent3);

function handleEvent3() {
  resOne.style.visibility = "hidden";

  resTwo.style.display = "hidden";

  resThree.style.visibility = "visible";
}

// for (i = 1; i <= id.length; i++) {
//   console.log(i);
// }
// function handleEvent() {
//   alert("hi");
// }
// at the onclick of any id, display the corresponding id answer
