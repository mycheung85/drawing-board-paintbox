// const saveButton = document.getElementById("save");

// saveButton.addEventListener("click", e => {
//   saveImage(e);
// });

function saveImage(e) {
  console.log(e);
  let data = canvas.toDataURL("image/png");
  //alert("save");
  // console.log(data);

  let image = window.open("about:blank", "image from canvas");
  image.document.write("<img src='" + data + "' alt='from canvas'/>");

  // e.target.href = data;
  // image.open(data);

  //let download = document.getElementById("download");
  // data.replace("image/png", "image/octet-stream");
  // download.setAttribute("href", image);
}
