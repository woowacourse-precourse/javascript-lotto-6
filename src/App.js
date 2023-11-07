import { MissionUtils } from '@woowacourse/mission-utils';
import GameExport from './GameExport.js';
import Validation from './validation.js';
import {
  readLineLottoCount,
  readLineBonusCount,
  consoleError,
} from './utils.js';
import { INPUT_MESSAGE } from './constants.js';

class App {
  #gameExport;

  constructor() {
    this.#gameExport = new GameExport();
  }

  async play() {
    const isLottoGenerated = await this.initializeAndPurchaseLotto();
    if (isLottoGenerated) {
      await this.printLottoList();
      await this.compareLotto();
    }
  }

  async initializeAndPurchaseLotto() {
    await this.#gameExport.purchaseLotto.initialize();
    const purchaseResult =
      await this.#gameExport.purchaseLotto.alertPurchaseLotto();

    if (
      typeof purchaseResult === 'string' &&
      purchaseResult.includes('[ERROR]')
    ) {
      MissionUtils.Console.print(purchaseResult);
      return false;
    }

    return true;
  }

  async printLottoList() {
    const lottoList = await this.#gameExport.viewLottoList();
    MissionUtils.Console.print(lottoList);
  }

  async userInputNumbers() {
    const inputNumbers = await this.getUserInput();
    console.log(inputNumbers);

    try {
      Validation.validateUserInputNumbers(inputNumbers);

      return inputNumbers;
    } catch (error) {
      consoleError(error);
      return this.userInputNumbers();
    }
  }

  async getUserInput() {
    const input = await readLineLottoCount();
    return input.split(',').map((num) => Number(num.trim()));
  }

  async userInputBonusNumber(inputNumbers) {
    const inputBonusNumber = await readLineBonusCount();
    const bonusNumber = Number(inputBonusNumber);

    try {
      Validation.validateBonusNumbers(bonusNumber, inputNumbers);

      return bonusNumber;
    } catch (error) {
      consoleError(error);
      return this.userInputBonusNumber(inputNumbers);
    }
  }

  async compareLotto() {
    const inputNumbers = await this.userInputNumbers();
    const bonusNumber = await this.userInputBonusNumber(inputNumbers);
    const eachCompareResult = this.#gameExport.getEachCompareResult(
      inputNumbers,
      bonusNumber,
    );
    const statistics = this.#gameExport.getStatistics(eachCompareResult);
  }
}

export default App;
