const radioDiv = document.querySelector(".radio-buttons");
const radioDivLeft = document.querySelector(".radio-buttons-left");

const colors = ["black", "green", "red", "blue"];
let radioRight = "";
let radioLeft = "";
colors.forEach((color, index) => {
  radioRight += `<input type="radio" id='${
    color + index
  }' name='right-color' value='${color}' style='background-color: ${color}'>
    <label for='${color}'>${color}</label>`;
  radioLeft += `<input type="radio" id='${
    color + index
  }left' name='left-color' value='${color}' style='background-color: ${color}'>
        <label for='${color}'>${color}</label>`;
});
radioDiv.innerHTML = radioRight;
radioDivLeft.innerHTML = radioLeft;

const rightSubmit = document.querySelector(".right-submit");
const leftAdd = document.querySelector(".left-add");
rightSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let rightRectArr = [];
  let rightTitle = document.querySelector(".right-title").value;
  let rightSubtitle = document.querySelector(".right-subtitle").value;
  let rightRadio = document.querySelector(
    'input[name="right-color"]:checked'
  ).value;
  rightRectArr = rectArr.filter((ele) => {
    return (
      ele.color == rightRadio ||
      ele.title == rightTitle ||
      ele.subtitle == rightSubtitle
    );
  });
  console.log(rightRectArr);
  setRectDiv(rightRectArr, "right");
  document.querySelector(".right-title").value = "";
  document.querySelector(".right-subtitle").value = "";
  document.querySelector('input[name="right-color"]:checked').checked = false;
});

let rectArr = [];
leftAdd.addEventListener("click", (e) => {
  e.preventDefault();
  let leftTitle = document.querySelector(".left-title").value;
  let leftSubtitle = document.querySelector(".left-subtitle").value;
  let leftRadio = document.querySelector(
    'input[name="left-color"]:checked'
  ).value;
  rectArr.push({ title: leftTitle, subtitle: leftSubtitle, color: leftRadio });
  document.querySelector(".left-subtitle").value = "";
  document.querySelector(".left-title").value = "";
  document.querySelector('input[name="left-color"]:checked').checked = false;
  setRectDiv(rectArr, "left");
});

function setRectDiv(Arr, side) {
  const leftRectDiv = document.querySelector(".left-rect");
  const rightRectDiv = document.querySelector(".right-rect");
  let rect = "";

  Arr.forEach((ele, index) => {
    rect += `<div class='rect' style="background-color: ${ele.color}">${ele.title}</div>`;
  });
  if (side == "left") leftRectDiv.innerHTML = rect;
  else rightRectDiv.innerHTML = rect;
}
