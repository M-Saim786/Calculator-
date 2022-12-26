var screen = document.getElementById("result");
function showdata(e) {
  // console.log(e.innerText);
  screen.value += e.innerText;
}
// Clear Once Func
var clearOne = document.getElementById("clearOne");
clearOne.addEventListener("click", () => {
  screen.value = screen.value.substring(0, screen.value.length - 1);
});

// Clear All Func
function clearall() {
  screen.value = "";
}

function multiply(e) {
  let mul = e.innerText;
  e.innerText = "*";
}

function result() {
  console.log("click");
  var res = eval(screen.value);
  console.log(res);
  screen.value = res;
}
