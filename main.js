const button = document.getElementById("btn");
button.addEventListener('click', setBackgroundColor);

window.onload = setBackgroundColor;

function getColor() {
  return "#" + Math.random().toString(16).slice(2, 8);
}

function setBackgroundColor() {
  const bgColor = getColor();
  const hex = document.getElementById("hexCode");
  document.body.style.background = bgColor;
  hex.innerHTML = bgColor;
}