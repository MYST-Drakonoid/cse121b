import { mainspace } from "./project.mjs";
import { mainBlock } from "./project2.mjs";


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

mainspace()
sleep(2000).then(() => { mainBlock() });
