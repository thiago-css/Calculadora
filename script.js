const resultOperand = document.querySelector(".result-operand");
const currentOperand = document.querySelector(".current-operand");

function insert(n) {
  const num = resultOperand.innerHTML;
  resultOperand.innerHTML = num + n;
}

// backspace
document.querySelector(".backspace").addEventListener("click", () => {
  const backspace = resultOperand.innerHTML;
  resultOperand.innerHTML = backspace.substring(0, backspace.length - 1);
});

// clean all
document.querySelector(".clean-all").addEventListener("click", () => {
  currentOperand.innerHTML = "";
  resultOperand.innerHTML = "";
});

// calc
document.querySelector(".equals").addEventListener("click", () => {
  const calc = resultOperand.innerHTML;
  currentOperand.innerHTML = resultOperand.innerHTML;
  resultOperand.innerHTML = eval(calc);
});
