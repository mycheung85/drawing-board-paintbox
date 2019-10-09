function pickColour() {
  let swatches = document.querySelectorAll("swatch");
}

document.addEventListener("click", e => {
  // console.log(e.target);
  if (e.target.matches("swatch")) {
    // swatches.classList.remove("active");
    // e.target.classList.toggle("active", true);
    console.log("hi");
  }
  false;
});

// console.log(inner.length);

// function setColour(colour) {
//   ctx.fillStyle = colour;
//   ctx.strokeStyle = colour;
// }

// function setSwatch(e) {
//   let target = e.target;
//   target.classList.toggle("active", true);
//   setColour(target.style.backgroundColor);
//   // swatches.removeAtribute.classList("active");
// }
