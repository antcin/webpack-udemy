import sum from "./sum";
import "./image_viewer"; // as we are not importing any executable code, we can simply import it like this. need to make sure it's imported otherwise it won't end up in webpack bundle

const total = sum(10, 5);
console.log(total);
