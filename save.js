function saveImage() {
  let data = canvas.toDataURL("image/png");
  let download = document.getElementById("save");
  download.setAttribute("href", data);
  document.getElementById("save").download = "mbtest.png";
}
