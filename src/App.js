import InputReader from './view/InputReader.js';
import PromptPrinter from './view/promptPrinter.js';
import {
  ValidateWinningNumbersUserInput,
  ValidatePurchasePriceUserInput,
  ValidateBonusNumberUserInput,
} from './utils/ValidateUserInput.js';
import LottoMachine from './domains/LottoMachine.js';
import { LOTTO } from './constants/lotto.js';
import RandomNumberGenerator from './utils/RandomNumberGenerator.js';
import paramType from './lib/paramType/src/paramType.js';

class App {
  #inputReader;
  #promptPrinter;
  #randomNumberGenerator;
  #lottoMachine;

  constructor() {
    this.#inputReader = new InputReader();
    this.#promptPrinter = new PromptPrinter();
    this.#randomNumberGenerator = new RandomNumberGenerator(
      LOTTO.NUMBER_RANGE.MIN,
      LOTTO.NUMBER_RANGE.MAX,
      LOTTO.NUMBER_COUNT,
    );
    this.#lottoMachine = new LottoMachine(
      LOTTO.SELLING_PRICE,
      this.#randomNumberGenerator,
    );
  }

  async play() {
    const purchasePrice = await this.requestPurchasePrice();
    const winningNumbers = await this.requestWinningNumbers();
    const bonusNumber = await this.requestBonusNumber(winningNumbers);

    this.setting(purchasePrice, winningNumbers, bonusNumber);
  }

  async requestPurchasePrice() {
    try {
      const purchasePrice = await this.#inputReader.purchasePrice();
      new ValidatePurchasePriceUserInput(purchasePrice);

      return purchasePrice;
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.requestPurchasePrice();
    }
  }

  async requestWinningNumbers() {
    try {
      const winningNumbers = await this.#inputReader.winningNumbers();
      new ValidateWinningNumbersUserInput(winningNumbers);

      return winningNumbers;
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.requestWinningNumbers();
    }
  }

  async requestBonusNumber(winningNumbers) {
    try {
      const bonusNumber = await this.#inputReader.bonusNumber();
      new ValidateBonusNumberUserInput(bonusNumber, winningNumbers);

      return bonusNumber;
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.requestBonusNumber(winningNumbers);
    }
  }

  setting(
    purchasePrice,
    winningNumbers,
    bonusNumber,
    _0 = paramType(purchasePrice, 'string'),
    _1 = paramType(winningNumbers, 'string'),
    _2 = paramType(bonusNumber, 'string'),
  ) {
    const lottoInstances = this.#lottoMachine.purchase(Number(purchasePrice));
    const lottoList = [...lottoInstances].map((lotto) => lotto.getNumbers());
    this.#promptPrinter.purchaseCount([...lottoInstances].length);
    this.#promptPrinter.purchaseLottoInfo(lottoList);
  }
}

export default App;
