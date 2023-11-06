/* eslint-disable class-methods-use-this */
import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Input from './input.js';
import Lotto from './Lotto.js';

class LottoCycle {
  #winningNum; // 로또번호 입력값 배열, 여기가 필드

  #resultWinningNum;

  constructor() {
    this.#winningNum = new Input();
  }

  async run() {
    const winningNum = await this.#validCheck();
    return winningNum;
  }

  result() {
    // bonus에 값 전달하기 위한 함수
    return this.#resultWinningNum;
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
    this.#resultWinningNum = newWinning;
    return this.#resultWinningNum;
  }
}

export default LottoCycle;

// const run = new LottoCycle();
// run.run();
