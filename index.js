var buttons = document.getElementsByTagName("h1");
var disp = document.getElementById("display");
// console.log(buttons);
// implementing keys functionality
document.getElementById("(").addEventListener("click", () => {
  disp.value += "(";
});
document.getElementById(")").addEventListener("click", () => {
  disp.value += ")";
});
document.getElementById("/").addEventListener("click", () => {
  disp.value += "/";
});
document.getElementById("1").addEventListener("click", () => {
  disp.value += "1";
});
document.getElementById("2").addEventListener("click", () => {
  disp.value += "2";
});
document.getElementById("3").addEventListener("click", () => {
  disp.value += "3";
});
document.getElementById("+").addEventListener("click", () => {
  disp.value += "+";
});
document.getElementById("4").addEventListener("click", () => {
  disp.value += "4";
});
document.getElementById("5").addEventListener("click", () => {
  disp.value += "5";
});
document.getElementById("6").addEventListener("click", () => {
  disp.value += "6";
});
document.getElementById("-").addEventListener("click", () => {
  disp.value += "-";
});
document.getElementById("7").addEventListener("click", () => {
  disp.value += "7";
});
document.getElementById("8").addEventListener("click", () => {
  disp.value += "8";
});
document.getElementById("9").addEventListener("click", () => {
  disp.value += "9";
});
document.getElementById("*").addEventListener("click", () => {
  disp.value += "*";
});
document.getElementById("0").addEventListener("click", () => {
  disp.value += "0";
});
document.getElementById(".").addEventListener("click", () => {
  disp.value += ".";
});
document.getElementById("A").addEventListener("click", () => {
  disp.value = "";
});
document.getElementById("C").addEventListener("click", () => {
  var len = disp.value.length;
  console.log(len);
  var tmp2 = disp.value.slice(0, len - 1);
  disp.value = tmp2;
});
// used eval() to evaluate the result
document.getElementById("=").addEventListener("click", () => {
  disp.value = eval(disp.value);
});
