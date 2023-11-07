import Input from './utils/inputOutput/input.js';
import { changeParseInt, lottoPurchaseCount, randomLottoNumbers, sortLottoNumbers } from './utils/lottoNumber/number.js';



class StartGame {
  #inputMoney;

  #purchaseAmount;

  #purchasedLottos = [];

  #winningNumbers;

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
  async inputWinningNumbers() {
    this.#winningNumbers = await this.getValidatedWinningNumbersInput(MESSAGE.WINNING_NUMBER);
  }

  async getValidatedWinningNumbersInput(message) {
    const inputWinningNumbers = await Input.readLineAsync(message);
    const winningNumbersStringArray = inputWinningNumbers.replace('[', '').replace(']', '').split(',');
    const winningNumbers = changeParseInt(winningNumbersStringArray);

    try {
      const validatedWinningLottoNumbers = new Lotto(winningNumbers);

      return validatedWinningLottoNumbers.getLottoNumbers();
    } catch (error) {
      Output.print(error.message);

      return this.getValidatedWinningNumbersInput(message);
    }
  }
}

export default StartGame;
