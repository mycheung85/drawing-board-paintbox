let minRad = 0;
let maxRad = 100;
let defaultRad = 10;
let interval = 5;
let randval = document.getElementById("randval");
let decSpan = document.getElementById("decrad");
let incRad = document.getElementById("incrad");

decSpan.addEventListener("click", () => {
  console.log("hello");
});

const setRadius = newRadius => {
  // console.log("this is the function" + newRadius);
  if (newRadius < minRad) {
    newRadius = minRad;
  } else if (newRadius > maxRad) {
    newRadius = maxRad;
  }
  radius = newRadius;
  ctx.lineWidth = radius * 2;
  randval.innerHTML = radius;
};

// variables for the setRadius

decSpan.addEventListener("click", () => {
  //console.log("dec");
  setRadius(radius - interval);
});

incRad.addEventListener("click", () => {
  //console.log(radius + interval);
  setRadius(radius + interval);
});

setRadius(10);
