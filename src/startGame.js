import Input from './utils/inputOutput/input.js';
import { lottoPurchaseCount, randomLottoNumbers, sortLottoNumbers } from './utils/lottoNumber/number.js';



class StartGame {
  #inputMoney;

  #purchaseAmount;

  #purchasedLottos = [];

  constructor() { }

  async runGame() {
    this.#inputMoney = await this.getValidatedPurchaseInput();

    this.#purchaseAmount = lottoPurchaseCount(this.#inputMoney);

    this.purchaseLottos();
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

  purchaseLottos() {
    for (let count = 0; count < this.#purchaseAmount; count += 1) {
      const randomLottoNumber = randomLottoNumbers();
      const sortedLottoNumber = sortLottoNumbers(randomLottoNumber);

      this.#purchasedLottos.push(sortedLottoNumber);
    }
  }
}

export default StartGame;
