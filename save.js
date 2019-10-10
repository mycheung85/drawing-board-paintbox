const saveButton = document.getElementById("save");

saveButton.addEventListener("click", e => {
  saveImage(e);
});

function saveImage(e) {
  const href = canvas.toDataURL("image/png");
  const windowtab = window.open();
  windowtab.document.write("<img src='" + href + "' alt='from canvas'/>");
}
