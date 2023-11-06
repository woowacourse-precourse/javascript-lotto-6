import purchaseAmountSave from "./utils/purchaseAmountSave.js";
import purchaseAmountSentence from "./utils/purchaseAmountSentence.js";

class App {
  async play() {
    purchaseAmountSentence();
    purchaseAmountSave();
  }
}

export default App;
