import Lotto from './Lotto.js';
import Input from './utils/inputOutput/Input.js';
import Output from './utils/inputOutput/Output.js';
import { parsedNumber, validateNumber, isIncludedBonusNumbers, validatedPrice } from './utils/validation/validation.js';
import { changeParseInt, lottoPurchaseCount, randomLottoNumbers, sortLottoNumbers } from './utils/lottoNumber/number.js';
import { calculateProfit, calculateProfitRate, countIncludeNumbers } from './utils/calculate/calculate.js';
import { MESSAGE } from './constants/constants.js';

class StartGame {
  #inputMoney;

  #purchaseAmount;

  #purchasedLottos = [];

  #bonusNumber;

  #winningNumbers;

  #lottoResults = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  constructor() { }

  async runGame() {
    this.#inputMoney = await this.getValidatedPurchaseInput();

    this.#purchaseAmount = lottoPurchaseCount(this.#inputMoney);
    Output.print(`${MESSAGE.BLINK}${this.#purchaseAmount}${MESSAGE.NUMBER_OF_LOTTO}`);

    this.purchaseLottos();

    await this.inputWinningNumbers();
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
      Output.printArray(sortedLottoNumber);
      this.#purchasedLottos.push(sortedLottoNumber);
    }
  }

  async inputWinningNumbers() {
    this.#winningNumbers = await this.getValidatedWinningNumbersInput(MESSAGE.WINNING_NUMBER);

    this.#bonusNumber = await this.getValidatedBonusNumberInput(MESSAGE.BONUS_NUMBER);
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

  async getValidatedBonusNumberInput(message) {
    const inputBonusNumber = await Input.readLineAsync(message);

    try {
      validateNumber(inputBonusNumber);
      const bonusNumber = parsedNumber(inputBonusNumber);
      isIncludedBonusNumbers(this.#winningNumbers, bonusNumber);

      return bonusNumber;
    } catch (error) {
      Output.print(error.message);

      return this.getValidatedBonusNumberInput(message);
    }
  }

  printProfits() {
    this.#lottoResults = countIncludeNumbers(this.#lottoResults, this.#winningNumbers, this.#bonusNumber, this.#purchasedLottos);

  }
}

export default StartGame;
