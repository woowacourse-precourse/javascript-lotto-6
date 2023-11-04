import { MESSAGE } from '../constants/messages.js';
import convertType from '../utils/convertType.js';

class LottoGameController {
  constructor({ randomNumberGeneration, inputView, outputView }) {
    this.inputView = inputView;
    this.outputView = outputView;
    this.randomNumberGeneration = randomNumberGeneration;
  }

  async start() {
    await this.getPurchaseAmount();
  }

  async getPurchaseAmount() {
    const money = convertType(
      await this.inputView.getUserInputAsync(MESSAGE.INPUT),
    );
  }
}

export default LottoGameController;
