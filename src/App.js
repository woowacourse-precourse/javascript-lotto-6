import { LOTTO } from './constants/lotto.js';
import paramType from './lib/paramType/src/paramType.js';
import InputReader from './view/InputReader.js';
import PromptPrinter from './view/promptPrinter.js';
import RandomNumberGenerator from './utils/RandomNumberGenerator.js';
import LottoMachine from './domains/LottoMachine.js';
import ValidUserInputs from './validator/ValidUserInputs.js';
import LottoGame from './domains/LottoGame.js';

class App {
  #inputReader;
  #promptPrinter;
  #randomNumberGenerator;
  #validUserInput;
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
    this.#validUserInput = new ValidUserInputs();
  }

  async play() {
    await this.#requestPurchasePrice();
    this.#prepareLottoList();
    await this.#requestWinningNumbers();
    await this.#requestBonusNumber();

    this.#calcualteLottoDrawResult();
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

  async #requestBonusNumber() {
    try {
      const userInput = await this.#inputReader.bonusNumber();
      this.#validUserInput.addBonusNumber(userInput);
    } catch (error) {
      this.#promptPrinter.userInputErrorMessage(error);
      return await this.#requestBonusNumber();
    }
  }

  #prepareLottoList() {
    const purchasePrice = this.#validUserInput.purchasePrice;
    const unverifiedLottoList = this.#lottoMachine.purchase(purchasePrice);

    this.#validUserInput.addLottoList(unverifiedLottoList);
    this.#announcePurchaseLottoList(this.#validUserInput.lottoList);
  }

  #calcualteLottoDrawResult() {
    const lottoGame = new LottoGame(this.#validUserInput);
    const drawDetails = lottoGame.calculateDrawDetails();
    const profitRate = lottoGame.calculateProfitRate(drawDetails);

    this.#announceLottoDrawResult(drawDetails, profitRate);
  }

  #announcePurchaseLottoList(lottoList, _ = paramType(lottoList, Array)) {
    this.#promptPrinter.purchaseCount([...lottoList].length);
    this.#promptPrinter.purchaseLottoInfo([...lottoList]);
  }

  #announceLottoDrawResult(
    drawDetails,
    profitRate,
    _1 = paramType(drawDetails, Object),
    _2 = paramType(profitRate, 'string'),
  ) {
    this.#promptPrinter.drawResult(drawDetails);
    this.#promptPrinter.profitRate(profitRate);
  }
}

export default App;
