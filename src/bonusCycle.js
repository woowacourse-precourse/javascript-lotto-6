/* eslint-disable class-methods-use-this */
import { Console } from '@woowacourse/mission-utils';
import Input from './input.js';
import Bonus from './bonus.js';

class BonusCycle {
  #bonusNum;

  constructor() {
    this.#bonusNum = new Input();
  }

  async run(winningNum) {
    const bonusNum = await this.validCheck(winningNum);
    return bonusNum;
  }

  async validCheck(winning) {
    let newBonus;
    let bonus = await this.#bonusNum.getBonusNum();
    let valid = true;
    while (valid) {
      newBonus = Number(bonus);

      try {
        new Bonus(winning, newBonus);
        valid = false;
      } catch (error) {
        Console.print(`에러 발생: ...`);
        bonus = await this.#bonusNum.getBonusNum();
        continue;
      }
    }

    return newBonus;
  }
}

export default BonusCycle;
