import InputManager from './UI/InputManager.js';

class App {
  async play() {
    const inputManger = new InputManager();
    const purchaseAmountInput = await inputManger.enterPurchaseAmount();
  }
}

export default App;
