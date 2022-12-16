const displayRes = document.querySelector(".display-result");
const displayOp = document.querySelector(".display-operations");

function insert(num) {
  const number = displayRes.innerHTML;
  displayRes.innerHTML = number + num;
}

function backspace() {
  const backspace = displayRes.innerHTML;
  displayRes.innerHTML = backspace.substring(0, backspace.length - 1);
}

function clean() {
  displayOp.innerHTML = "";
  displayRes.innerHTML = "";
}

function calc() {
  const calc = displayRes.innerHTML;
  displayOp.innerHTML = displayRes.innerHTML;
  displayRes.innerHTML = eval(calc);
}
