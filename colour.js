let colourSwatch = document.querySelectorAll(".swatch");

for (const colour of colourSwatch) {
  colour.addEventListener("click", e => {
    setSwatch(e);
  });
  false;
}

function setColour(colour) {
  ctx.fillStyle = colour;
  ctx.strokeStyle = colour;
  let active = document.getElementsByClassName("active")[0];
  if (active) {
    active.className = "swatch";
  }
}

function setSwatch(e) {
  let swatch = e.target;
  setColour(swatch.style.backgroundColor);
  // console.log("colour");
  swatch.classList.toggle("active");
}
