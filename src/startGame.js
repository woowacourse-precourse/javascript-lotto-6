import Input from './utils/inputOutput/input.js';
import { lottoPurchaseCount } from './utils/lottoNumber/number.js';


class StartGame {
  #inputMoney;

  #purchaseAmount;

  constructor() { }

  async runGame() {
    this.#inputMoney = await this.getValidatedPurchaseInput();

    this.#purchaseAmount = lottoPurchaseCount(this.#inputMoney);
  }

  async getValidatedPurchaseInput() {
    const userInputMoney = await Input.readLineAsync(MESSAGE.PURCHASE);
    try {
      validatedPrice(userInputMoney);

      return userInputMoney;
    } catch (error) {
      Output.print(error.message);

      return this.getValidatedPurchaseInput();
    }
  }
}

export default StartGame;
