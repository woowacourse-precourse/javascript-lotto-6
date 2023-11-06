/* eslint-disable class-methods-use-this */

import NumOfBuy from './numofbuy.js';
import MakeLottoNum from './makelottonum.js';
import Bonus from './bonus.js';
import CalculationOfResult from './result_calculate.js';
import LottoCycle from './LottoCycle.js';

class App {
  #numOfBuy;

  #arrayOfLotto;

  #winningNum;

  #bounusNum;

  #yeild;

  constructor() {
    this.#numOfBuy = new NumOfBuy();
    this.#arrayOfLotto = new MakeLottoNum();
    this.#winningNum = new LottoCycle();
    this.#bounusNum = new Bonus();
    this.#yeild = new CalculationOfResult();
  }

  async play() {
    const numOfBuy = await this.#numOfBuy.run();
    const arrayofLotto = await this.#arrayOfLotto.makeArrayOfLottoNum(numOfBuy);
    const winningNum = await this.#winningNum.run();
    const bonusNum = await this.#bounusNum.run(winningNum);
    this.#yeild.run(numOfBuy, arrayofLotto, winningNum, bonusNum);
  }
}

export default App;
