import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from '../utils/validation.js';
import UserInputView from '../view/UserInputView.js';

class GameController {
  async startGame() {
    const purchasePrice = Number(await UserInputView.inputPrice());
    try {
      Validator.purchasePrice(purchasePrice);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.startGame();
    }
  }
}

export default GameController;
