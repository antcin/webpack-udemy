import "../styles/image_viewer.css"; // for anything non js, need to specify extension

const image = document.createElement("img");
image.src = "http://lorempixel.com/400/400";

document.body.appendChild(image);
