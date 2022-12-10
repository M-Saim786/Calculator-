// sir ka code
/* var inp = document.getElementById("text")
function showdata(e){
    console.log(e.innerText)
    inp.value += e.innerText


}

function getrest(){
    var res = eval(inp.value)
    inp.value=res
}

function clr(){
    inp.value=""
}

function bksp(){
    inp.value= inp.value.substring(0,inp.value.length-1)
}

function sqrt(){
    inp.value= Math.sqrt(inp.value)
}

function sqr(){
    inp.value =inp.value*inp.value
}
*/

var screen = document.getElementById("result");
function showdata(e) {
  console.log(e.innerText);
  screen.value += e.innerText;
}
function clearall() {
  screen.value = "";
}

function clear() {
  console.log("click");
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
