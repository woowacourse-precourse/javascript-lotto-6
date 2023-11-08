import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/validation.js';
import UserInputView from '../view/UserInputView.js';
import { MESSAGE, OPTIONS } from '../constants/Constants.js';

class GameController {
  #purchasePrice;

  #tickectsCount;

  async startGame() {
    const inputPurchasePrice = Number(await UserInputView.inputPrice());
    try {
      Validator.purchasePrice(inputPurchasePrice);
      this.#purchasePrice = inputPurchasePrice;
      this.#tickectsCount = inputPurchasePrice / OPTIONS.priceUnit;
      MissionUtils.Console.print(
        `${this.#tickectsCount}${MESSAGE.purchaseAmount}`,
      );
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.startGame();
    }
  }
}

export default GameController;
