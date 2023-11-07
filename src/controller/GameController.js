import { MissionUtils } from '@woowacourse/mission-utils';
import UserInputView from '../view/UserInputView.js';

class GameController {
  // eslint-disable-next-line class-methods-use-this
  async startGame() {
    const purchasePrice = await UserInputView.inputPrice();
    MissionUtils.Console.print(purchasePrice);
  }
}

export default GameController;
