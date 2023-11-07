import { Console } from '@woowacourse/mission-utils';
import CheckNumber from './Domain/NumberCheck.js';
import User from './Domain/User.js';
import Print from './View/Output.js';
import Read from './View/Input.js';
import MESSAGE from './Constant/message.js';
import Create from './Controller/Create.js';

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

  async compareWith(randomNum) {
    const bonus = await new Create().userBonusNumber();
    const userNum = { user: this.#numbers, bonus };

    const check = new CheckNumber({ randomNum, userNum });

    this.checkNumberMatching(check);
  }

  checkNumberMatching(check) {
    const matchResult = check.getSameResult(check.sameCount());

    Print.repeatResult(matchResult); // 숫자 비교결과 출력

    // 수익률 계산
    const margin = check.getMargin(check.totalAmount(matchResult));
    Console.print(`총 수익률은 ${margin}%입니다.`);
  }
}

export default Lotto;
