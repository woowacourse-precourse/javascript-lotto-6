import { printMessage } from "./PrintMessages.js";
import { PURCHASE_AMOUNT_INPUT_REQUEST } from "./constants.js";

class App {
  async play() {
    printMessage(PURCHASE_AMOUNT_INPUT_REQUEST);
  }
}

const app = new App();
await app.play();

export default App;
