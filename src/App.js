import { LOTTO } from './constants/lotto.js';
import paramType from './lib/paramType/src/paramType.js';
import InputReader from './view/InputReader.js';
import PromptPrinter from './view/promptPrinter.js';
import RandomNumberGenerator from './utils/RandomNumberGenerator.js';
import LottoMachine from './domains/LottoMachine.js';
import LottoDrawChecker from './domains/LottoDrawChecker.js';
import LottoReward from './domains/LottoReward.js';
import ValidUserInputs from './validator/ValidUserInputs.js';
import LottoGame from './domains/LottoGame.js';

class App {
  #inputReader;
  #promptPrinter;
  #randomNumberGenerator;
  #validUserInput;

  constructor() {
    this.#inputReader = new InputReader();
    this.#promptPrinter = new PromptPrinter();
    this.#randomNumberGenerator = new RandomNumberGenerator(
      LOTTO.NUMBER_RANGE.MIN,
      LOTTO.NUMBER_RANGE.MAX,
      LOTTO.NUMBER_COUNT,
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
    const lottoMachine = new LottoMachine(
      LOTTO.SELLING_PRICE,
      this.#randomNumberGenerator,
    );
    const lottoGame = new LottoGame(this.#validUserInput, lottoMachine);
    const lottoList = lottoGame.publishLottoList();
    const drawDetails = lottoGame.calculateDrawDetails(lottoList);
    const profitRate = lottoGame.calculateProfitRate(drawDetails);

    this.#processResult({ lottoList, drawDetails, profitRate });
  }

  #processResult(
    { lottoList, profitRate, drawDetails },
    _0 = paramType(lottoList, Array),
    _1 = paramType(drawDetails, Object),
    _2 = paramType(profitRate, 'string'),
  ) {
    this.#promptPrinter.purchaseCount([...lottoList].length);
    this.#promptPrinter.purchaseLottoInfo(lottoList);
    this.#promptPrinter.drawResult(drawDetails);
    this.#promptPrinter.profitRate(profitRate);
  }
}

export default App;
