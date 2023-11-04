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

  constructor() {
    this.#money = 0;
    this.#lottoQuantity = 0;
    this.#lottos = [];
    this.#winningNumbers = 0;
    this.#bonusNumber = 0;
  }

  async play() {
    this.#money = await Request.money();
    this.#lottoQuantity = calculate.countFrom(this.#money);
    this.#lottos = lottoMachine.make(this.#lottoQuantity);
    notice.totalLotto(this.#lottos, this.#lottoQuantity);
    this.#winningNumbers = await Request.winningNumbers();
    this.#bonusNumber = await Request.bonusNumber();
    const result = App.getResult(this.#lottos, this.#winningNumbers);
    lottoMachine.read(result, this.#bonusNumber);
  }

  static getResult(lottos, winningNumbers) {
    const resultArray = [];

    lottos.forEach((lotto) => {
      const findResult = lottoMachine.find(lotto, winningNumbers);
      resultArray.push(findResult);
    });

    return resultArray;
  }
}

export default App;
