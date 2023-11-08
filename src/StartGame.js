import Lotto from './Lotto.js';
import Input from './utils/inputOutput/Input.js';
import Output from './utils/inputOutput/Output.js';
import { ensureIsNumberString, ensureBonusNumberIsNotIncluded, validateAndEnsurePrice } from './utils/validation/validation.js';
import { parseStringsToIntegers, lottoPurchaseCount, randomLottoNumbers, sortLottoNumbers } from './utils/lottoNumber/number.js';
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

  #earnedPriceRate;

  constructor() { }

  async runGame() {
    this.#inputMoney = await this.getValidatedPurchaseInput();

    this.#purchaseAmount = lottoPurchaseCount(this.#inputMoney);
    Output.print(`${MESSAGE.BLINK}${this.#purchaseAmount}${MESSAGE.NUMBER_OF_LOTTO}`);

    this.purchaseLottos();

    await this.inputWinningNumbers();

    this.printProfits()
  }

  async getValidatedPurchaseInput() {
    const userInputMoney = await Input.readLineAsync(MESSAGE.PURCHASE);
    try {
      validateAndEnsurePrice(userInputMoney);

      return userInputMoney;
    } catch (error) {
      Output.print(error.message);

      return this.getValidatedPurchaseInput();
    }
  }

  purchaseLottos() {
    for (let count = 0; count < this.#purchaseAmount; count += 1) {
      const randomLottoNumber = randomLottoNumbers();
      const sortedRandomLottoNumber = sortLottoNumbers(randomLottoNumber);
      Output.printArray(sortedRandomLottoNumber);
      this.#purchasedLottos.push(sortedRandomLottoNumber);
    }
  }

  async inputWinningNumbers() {
    this.#winningNumbers = await this.getValidatedWinningNumbersInput(MESSAGE.WINNING_NUMBER);

    this.#bonusNumber = await this.getValidatedBonusNumberInput(MESSAGE.BONUS_NUMBER);
  }

  async getValidatedWinningNumbersInput(textMessage) {
    const inputWinningNumbers = await Input.readLineAsync(textMessage);
    const winningNumbersStringArray = inputWinningNumbers.split(',');
    let winningNumbers;

    try {
      winningNumbers = parseStringsToIntegers(winningNumbersStringArray);
      const validatedWinningLottoNumbers = new Lotto(winningNumbers);

      return validatedWinningLottoNumbers.getLottoNumbers();
    } catch (error) {
      Output.print(error.message);

      return this.getValidatedWinningNumbersInput(textMessage);
    }
  }

  async getValidatedBonusNumberInput(textMessage) {
    const inputBonusNumber = await Input.readLineAsync(textMessage);

    try {
      ensureIsNumberString(inputBonusNumber);
      const bonusNumber = parseInt(inputBonusNumber, 10);
      ensureBonusNumberIsNotIncluded(this.#winningNumbers, bonusNumber);

      return bonusNumber;
    } catch (error) {
      Output.print(error.message);

      return this.getValidatedBonusNumberInput(textMessage);
    }
  }

  printProfits() {
    this.#lottoResults = countIncludeNumbers(this.#lottoResults, this.#winningNumbers, this.#bonusNumber, this.#purchasedLottos);

    const userEarnedPrice = calculateProfit(this.#lottoResults);
    const userStartMoney = this.#purchaseAmount * 1000;

    this.#earnedPriceRate = calculateProfitRate(userStartMoney, userEarnedPrice);

    Output.printWinningResult(this.#lottoResults, this.#earnedPriceRate);
  }
}

export default StartGame;
