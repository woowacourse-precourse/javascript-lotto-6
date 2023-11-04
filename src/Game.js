import { validateNumberType, validateUnit } from './utils/validate.js';
import getUserInput from './utils/getUserInput.js';
import { INPUT_MESSAGE } from './constants/messages.js';

class Game {
  async start() {
    const purchaseAmount = await this.getPurchaseAmount();
    this.validate(purchaseAmount);
    this.purchaseLotto(Number(purchaseAmount));
  }

  validate(amount) {
    validateNumberType(amount);
    validateUnit(amount);
  }

  async getPurchaseAmount() {
    const purchaseAmount = await getUserInput(INPUT_MESSAGE.purchaseAmount);
    return purchaseAmount;
  }

  purchaseLotto(amount) {}
}

export default Game;
