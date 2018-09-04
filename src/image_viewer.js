import big from "../assets/big.jpg";
import small from "../assets/small.jpg";
import "../styles/image_viewer.css"; // for anything non js, need to specify extension

const smallImage = document.createElement("img");
smallImage.src = small;

document.body.appendChild(smallImage);

const bigImage = document.createElement("img");
bigImage.src = big;

document.body.appendChild(bigImage);
