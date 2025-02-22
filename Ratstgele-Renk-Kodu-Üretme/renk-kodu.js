const btn = document.querySelector("#btn");
const codecolor = document.querySelector("#color-code");
const btndelete = document.querySelector("#btn-delete");

btn.addEventListener("click", randomtextcolor);
btndelete.addEventListener("click", deleterandomcolor);

function randomtextcolor() {
  const colortext = Math.floor(Math.random() * 16777215 + 1);
  const hexcolor = colortext.toString(16);
  const hexcolorcode = "#" + hexcolor;
  codecolor.textContent = `${hexcolorcode}`;
}

function deleterandomcolor() {
  codecolor.textContent = "";
}
