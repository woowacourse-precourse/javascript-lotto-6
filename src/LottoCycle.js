/* eslint-disable class-methods-use-this */

import Input from './input.js';
import Lotto from './Lotto.js';

class LottoCycle {
  #winningNum; // 로또번호 입력값 배열, 여기가 필드

  constructor() {
    this.#winningNum = new Input();
  }

  async run() {
    const winningNum = await this.#validCheck();
    return winningNum;
  }

  async #validCheck() {
    let newWinning;
    let winning = await this.#winningNum.getWinningNum();
    let valid = true;

    while (valid) {
      // const winning = await this.winningNum.getWinningNum();
      newWinning = winning.map(Number);

      try {
        new Lotto(winning);
        valid = false;
      } catch (error) {
        winning = await this.#winningNum.getWinningNum();
        continue;
      }
    }

    return newWinning;
  }
}

export default LottoCycle;
