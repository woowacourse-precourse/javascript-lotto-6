/* eslint-disable class-methods-use-this */
import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Input from './input.js';

class Bonus {
  #bonusNum;

  constructor() {
    this.#bonusNum = new Input();
  }

  async run(winningNum) {
    const bonusNum = await this.validCheck(winningNum);
    return bonusNum;
  }

  async validCheck(winning) {
    let bonus;
    let valid = true;
    while (valid) {
      bonus = Number(await this.#bonusNum.getBonusNum());
      try {
        if (this.#isNumCheck(bonus)) throw new Error(`[ERRPR] 보너스 입력값은 숫자여야 합니다.`);
        if (this.#duplCheckOfBonus(winning, bonus)) throw new Error(`[ERRPR] 보너스 숫자는 중복될 수 없습니다.`);
        if (this.#validateNumRange(bonus)) throw new Error(`[ERROR] 숫자 범위는 1~45 사이입니다.`);

        valid = false;
      } catch (error) {
        continue;
      }
    }

    return bonus;
  }

  #isNumCheck(bonusNum) {
    const NumTypeBonus = Number(bonusNum);
    if (Number.isNaN(NumTypeBonus)) {
      Console.print('[ERRPR] 보너스 번호 입력값은 숫자여야 합니다.\n');
      return true;
    }
  }

  #duplCheckOfBonus(winningNum, bonusNum) {
    if (winningNum.includes(bonusNum)) {
      Console.print('[ERRPR] 보너스 번호는 중복될 수 없습니다.\n');
      return true;
    }
  }

  // 정답 숫자 입력 범위 확인, 정답, 보너스 둘 다 사용 가능
  #validateNumRange(inputNum) {
    const MIN_NUM = 1;
    const MAX_NUM = 45;

    if (inputNum < MIN_NUM || MAX_NUM < inputNum) {
      Console.print('[ERRPR] 보너스 번호 범위는 1~45 사이입니다.\n');
      return true;
    }
  }
}

export default Bonus;
