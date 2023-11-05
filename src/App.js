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
    this.#money = await Request.money();
    this.#lottoQuantity = calculate.countFrom(this.#money);
    this.#lottos = lottoMachine.make(this.#lottoQuantity);

    notice.totalLotto(this.#lottos, this.#lottoQuantity);

    this.#winningNumbers = await Request.winningNumbers();
    this.#bonusNumber = await Request.bonusNumber();
    const result = App.getResult(this.#lottos, this.#winningNumbers);
    this.#prizeResult = lottoMachine.read(result, this.#bonusNumber);
    this.#profit = calculate.profitFrom(this.#prizeResult, this.#money);

    notice.finalProfit(this.#profit, this.#prizeResult);
  }

  // static getResult(lottos, winningNumbers) {
  //   const resultArray = [];

  //   lottos.forEach((lotto) => {
  //     const findResult = lottoMachine.find(lotto, winningNumbers);
  //     resultArray.push(findResult);
  //   });

  //   return resultArray;
  // }

  static getResult(lottos, winningNumbers) {
    return lottos.map((lotto) => lottoMachine.find(lotto, winningNumbers));
  }
}

export default App;
