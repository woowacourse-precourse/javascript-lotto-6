/* eslint-disable class-methods-use-this */

import NumOfBuy from './numofbuy.js';
import MakeLottoNum from './makelottonum.js';
import Winning from './winning.js';
import Bonus from './bonus.js';
import CalculationOfResult from './result_calculate.js';

import Lotto from './Lotto.js';
import Input from './input.js';

class App {
  #numOfBuy;

  #arrayOfLotto;

  #winningNum;

  #bounusNum;

  #yeild;

  #input;

  // constructor() {
  //  this.#numOfBuy = new NumOfBuy();
  //  this.#arrayOfLotto = new MakeLottoNum();

  //  // this.#winningNum = new Winning();
  //  // this.#winningNum = new Lotto();

  //  this.#bounusNum = new Bonus();
  //  this.#yeild = new CalculationOfResult();

  //  this.#input = new Input();
  // }

  async play() {
    const numOfBuy = await this.#numOfBuy.run();
    const arrayofLotto = await this.#arrayOfLotto.makeArrayOfLottoNum(numOfBuy);

    const inputWinning = await this.#input.getWinningNum();
    // const winningNum = await this.#winningNum.run(inputWinning);
    const winningNum = new Lotto(inputWinning);

    const bonusNum = await this.#bounusNum.run(winningNum);
    this.#yeild.run(numOfBuy, arrayofLotto, winningNum, bonusNum);
  }
}

export default App;
