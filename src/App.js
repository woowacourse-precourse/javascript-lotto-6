import Request from './request.js';
import calculate from './calculate.js';
import lottoMachine from './lottoMachine.js';
import notice from './notice.js';

class App {
  #money;

  #lottoQuantity;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #prizeResult;

  #profit;

  constructor() {
    this.#money = 0;
    this.#lottoQuantity = 0;
    this.#lottos = [];
    this.#winningNumbers = 0;
    this.#bonusNumber = 0;
    this.#prizeResult = {};
    this.#profit = 0;
  }

  async play() {
    await this.makeLotto();

    notice.totalLotto(this.#lottos, this.#lottoQuantity);

    await this.getWinningNumbers();
    await this.getBonusNumber();
    this.makeResult();

    notice.finalProfit(this.#profit, this.#prizeResult);
  }

  async makeLotto() {
    this.#money = await Request.money();
    this.#lottoQuantity = calculate.countFrom(this.#money);
    this.#lottos = lottoMachine.make(this.#lottoQuantity);
  }

  async getWinningNumbers() {
    this.#winningNumbers = await Request.winningNumbers();
  }

  async getBonusNumber() {
    this.#bonusNumber = await Request.bonusNumber();
  }

  makeResult() {
    const result = this.getResult(this.#lottos, this.#winningNumbers);
    this.#prizeResult = lottoMachine.read(result, this.#bonusNumber);
    this.#profit = calculate.profitFrom(this.#prizeResult, this.#money);
  }

  getResult(lottos, winningNumbers) {
    return lottos.map((lotto) => lottoMachine.find(lotto, winningNumbers));
  }
}

export default App;
