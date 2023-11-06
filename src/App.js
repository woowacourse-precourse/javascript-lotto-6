/* eslint-disable class-methods-use-this */

import MoneyCycle from './moneyCycle.js';
import MakeLottoNum from './makelottonum.js';
import LottoCycle from './LottoCycle.js';
import BonusCycle from './bonusCycle.js';
import CalculationOfResult from './result_calculate.js';

class App {
  #numOfBuy;

  #arrayOfLotto;

  #winningNum;

  #bounusNum;

  #yeild;

  constructor() {
    this.#numOfBuy = new MoneyCycle();
    this.#arrayOfLotto = new MakeLottoNum();
    this.#winningNum = new LottoCycle();
    this.#bounusNum = new BonusCycle();
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
