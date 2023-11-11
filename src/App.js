/* eslint-disable class-methods-use-this */
import { Console } from '@woowacourse/mission-utils';

import MoneyCycle from './moneyCycle.js';
import MakeLottoNum from './makelottonum.js';
import LottoCycle from './LottoCycle.js';
import BonusCycle from './bonusCycle.js';
import CalculationOfResult from './CalculationOfResult.js';

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
    await this.yeildPrint();
  }

  async yeildContents() {
    const numOfBuy = await this.#numOfBuy.run();
    const arrayofLotto = await this.#arrayOfLotto.makeArrayOfLottoNum(numOfBuy);
    const winningNum = await this.#winningNum.run();
    const bonusNum = await this.#bounusNum.run(winningNum);
    const calculateYield = this.#yeild.run(numOfBuy, arrayofLotto, winningNum, bonusNum);

    return calculateYield;
  }

  async yeildPrint() {
    const yeildContents = await this.yeildContents();
    // Console.print(yeildContents);
    // Console.print(yeildContents[0]);
    Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${yeildContents[0][4]}개
4개 일치 (50,000원) - ${yeildContents[0][3]}개
5개 일치 (1,500,000원) - ${yeildContents[0][2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${yeildContents[0][1]}개
6개 일치 (2,000,000,000원) - ${yeildContents[0][0]}개
총 수익률은 ${yeildContents[1]}%입니다.`);
  }
}

export default App;
