import Request from './views/Request.js';
import calculate from './utils/calculate.js';
import LottoMachine from './domains/LottoDomain.js';
import Notice from './views/Notice.js';
import { NUMBER } from './constants.js';

class App {
  #money;

  #lottoQuantity;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #prizeResult;

  #profit;

  constructor() {
    this.#money = NUMBER.DEFAULT;
    this.#lottoQuantity = NUMBER.DEFAULT;
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = NUMBER.DEFAULT;
    this.#prizeResult = [];
    this.#profit = NUMBER.DEFAULT;
  }

  async play() {
    await this.makeLotto();

    Notice.totalLotto(this.#lottos, this.#lottoQuantity);

    await this.getWinningNumbers();
    await this.getBonusNumber();
    this.makeResult();

    Notice.finalProfit(this.#profit, this.#prizeResult);
  }

  async makeLotto() {
    this.#money = await Request.money();
    this.#lottoQuantity = calculate.countFrom(this.#money);
    const lottoMachine = new LottoMachine();
    this.#lottos = lottoMachine.doMake(this.#lottoQuantity);
  }

  async getWinningNumbers() {
    this.#winningNumbers = await Request.winningNumbers();
  }

  async getBonusNumber() {
    this.#bonusNumber = await Request.bonusNumber();
  }

  makeResult() {
    const result = App.getResult(this.#lottos, this.#winningNumbers);
    this.#prizeResult = LottoMachine.read(result, this.#bonusNumber);
    this.#profit = calculate.profitFrom(this.#prizeResult, this.#money);
  }

  static getResult(lottos, winningNumbers) {
    return lottos.map((lotto) => LottoMachine.find(lotto, winningNumbers));
  }
}

export default App;
