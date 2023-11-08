import { LOTTO } from './constants/lotto.js';
import paramType from './lib/paramType/src/paramType.js';
import InputReader from './view/InputReader.js';
import PromptPrinter from './view/promptPrinter.js';
import RandomNumberGenerator from './utils/RandomNumberGenerator.js';
import LottoMachine from './domains/LottoMachine.js';
import LottoDrawChecker from './domains/LottoDrawChecker.js';
import LottoReward from './domains/LottoReward.js';
import ValidUserInputs from './validator/ValidUserInputs.js';

class App {
  #inputReader;
  #promptPrinter;
  #randomNumberGenerator;
  #lottoMachine;
  #validUserInput;

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
    this.#validUserInput = new ValidUserInputs();
  }

  async play() {
    await this.#requestPurchasePrice();
    await this.#requestWinningNumbers();
    await this.#requestBonusNumber();

    this.#excuteProcess();
  }

  async #requestPurchasePrice() {
    try {
      const userInput = await this.#inputReader.purchasePrice();
      this.#validUserInput.addPurchasePrice(userInput);
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.#requestPurchasePrice();
    }
  }

  async #requestWinningNumbers() {
    try {
      const userInput = await this.#inputReader.winningNumbers();
      this.#validUserInput.addWinningNumbers(userInput);
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.#requestWinningNumbers();
    }
  }

  async #requestBonusNumber(winningNumbers) {
    try {
      const userInput = await this.#inputReader.bonusNumber();
      this.#validUserInput.addBonusNumber(userInput);
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.#requestBonusNumber(winningNumbers);
    }
  }

  #excuteProcess() {
    const lottoList = this.#lottoMachine
      .purchase(this.#validUserInput.purchasePrice)
      .map((lotto) => lotto.getNumbers());
    const lottoDrawChecker = new LottoDrawChecker(
      this.#validUserInput.winningNumbers,
      this.#validUserInput.bonusNumber,
    );
    const drawResult = lottoDrawChecker.getDrawResult(lottoList);
    const reward = new LottoReward(
      drawResult,
      this.#validUserInput.purchasePrice,
    );
    const profitRate = reward.calculrateProfitRate();

    this.#processResult({ lottoList, drawResult, profitRate });
  }

  #processResult(
    { lottoList, profitRate, drawResult },
    _0 = paramType(lottoList, Array),
    _1 = paramType(drawResult, Object),
    _2 = paramType(profitRate, 'string'),
  ) {
    this.#promptPrinter.purchaseCount([...lottoList].length);
    this.#promptPrinter.purchaseLottoInfo(lottoList);
    this.#promptPrinter.drawResult(drawResult);
    this.#promptPrinter.profitRate(profitRate);
  }
}

export default App;
