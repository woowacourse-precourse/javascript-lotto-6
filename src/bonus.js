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

  // 보너스 넘버
  // async #getBonusNum() {
  //  // Console.print('\n');
  //  const bonusNum = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  //  const NumTypeBonus = Number(bonusNum);
  //  if (Number.isNaN(NumTypeBonus)) {
  //    throw new Error(`보너스 입력값은 숫자여야 합니다.`);
  //  }
  //  return NumTypeBonus;
  // }

  async validCheck(winning) {
    let bonus;
    let valid = true;
    while (valid) {
      bonus = Number(await this.#bonusNum.getBonusNum());
      try {
        // Console.print(bonus);
        // Console.print(typeof bonus);
        if (this.#isNumCheck(bonus)) throw new Error(`[ERRPR] 보너스 입력값은 숫자여야 합니다.`);
        if (this.#duplCheckOfBonus(winning, bonus)) throw new Error(`[ERRPR] 보너스 숫자는 중복될 수 없습니다.`);
        if (this.#validateNumRange(bonus)) throw new Error(`[ERROR] 숫자 범위는 1~45 사이입니다.`);

        valid = false;
      } catch (error) {
        Console.print('[ERRPR] 올바른 값을 입력해주세요.\n');
        continue;
      }
    }

    return bonus;
  }

  #isNumCheck(bonusNum) {
    // Console.print(bonusNum);
    // Console.print(typeof bonusNum);
    const NumTypeBonus = Number(bonusNum);
    if (Number.isNaN(NumTypeBonus)) {
      // throw new Error(`보너스 입력값은 숫자여야 합니다.`);
      return true;
    }
  }

  #duplCheckOfBonus(winningNum, bonusNum) {
    // Console.print(bonusNum);
    // Console.print(typeof bonusNum);
    // Console.print(winningNum);
    // Console.print(typeof winningNum);
    if (winningNum.includes(bonusNum)) {
      // throw new Error(`[ERRPR] 보너스 숫자는 중복될 수 없습니다.`);

      return true;
    }
  }

  // 정답 숫자 입력 범위 확인, 정답, 보너스 둘 다 사용 가능
  #validateNumRange(inputNum) {
    // Console.print(inputNum);
    // Console.print(typeof inputNum);
    const MIN_NUM = 1;
    const MAX_NUM = 45;

    if (inputNum < MIN_NUM || MAX_NUM < inputNum) {
      // throw new Error(`[ERROR] 숫자 범위는 1~45 사이입니다.`);

      return true;
    }
  }
}

export default Bonus;

// const run = new Bonus();
// run.run();
