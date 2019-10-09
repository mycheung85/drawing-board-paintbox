// let colourSwatch = document.querySelectorAll(".swatch");
let colourPallet = [
  "black",
  "grey",
  "white",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
];

for (const colour of colourPallet) {
  const swatch = document.createElement("div");
  swatch.className = "swatch";
  swatch.style.backgroundColor = colour;
  swatch.addEventListener("click", e => {
    setSwatch(e);
  });
  document.getElementById("paintbox").appendChild(swatch);
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
