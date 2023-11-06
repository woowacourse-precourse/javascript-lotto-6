import { MissionUtils } from '@woowacourse/mission-utils';
import LottoList from './LottoList.js';
import Validation from './validation.js';
import { readLineLottoCount, consoleError } from './utils.js';

class App {
  #lottoApp;

  constructor() {
    this.#lottoApp = new LottoList();
  }

  async play() {
    const isLottoGenerated = await this.initializeAndPurchaseLotto();
    if (isLottoGenerated) {
      await this.printLottoList();
      await this.userInputNumbers();
    }
  }

  async initializeAndPurchaseLotto() {
    await this.#lottoApp.purchaseLotto.initialize();
    const purchaseResult =
      await this.#lottoApp.purchaseLotto.alertPurchaseLotto();

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
    const lottoList = await this.#lottoApp.viewLottoList();
    MissionUtils.Console.print(lottoList);
  }

  async userInputNumbers() {
    try {
      const inputNumbers = await this.getUserInput();
      this.validateInputNumbers(inputNumbers);
      console.log(inputNumbers);
      return inputNumbers;
    } catch (error) {
      consoleError(error);
      return this.userInputNumbers();
    }
  }

  async getUserInput() {
    const input = await readLineLottoCount();
    return input.split(',').map((num) => parseInt(num.trim()));
  }

  validateInputNumbers(inputNumbers) {
    Validation.isNumber(inputNumbers);
    Validation.numberCountLength(inputNumbers);
    Validation.dupliCatedNum(inputNumbers);
    Validation.numberRange(inputNumbers);
  }
}

export default App;
