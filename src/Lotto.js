import { Console } from '@woowacourse/mission-utils';
import CheckNumber from './Domain/NumberCheck.js';
import Result from './Domain/Result.js';
import User from './Domain/User.js';
import Print from './View/Output.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 중복된 번호는 입력할 수 없습니다.');
    }
  }

  // TODO: 추가 기능 구현
  async getResult(randomNum) {
    const bonus = await new User().selectBonusNumber();
    const userNum = { user: this.#numbers, bonus };

    const matchedNumber = new CheckNumber({ randomNum, userNum }).sameCount();

    const matchResult = CheckNumber.sameResult(matchedNumber);
    Print.repeatResult(Result.objToString(matchResult));

    // 수익률 계산
    CheckNumber.calculateMargin(matchedNumber);
  }
}

export default Lotto;
