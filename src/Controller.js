import InputView from './InputView.js';

class Controller {
  async progress() {
    const inputLottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
  }
}

export default Controller;
