const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rect = canvas.getBoundingClientRect();
let radius = 10;
ctx.lineWidth = radius * 2;

let isDrawing = false;
let x = 0;
let y = 0;
let dragging = false;

const putPoint = e => {
  if (dragging) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }
};

const engage = e => {
  dragging = true;
  putPoint(e);
};
const disengage = () => {
  dragging = false;
  ctx.beginPath();
};

canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);
