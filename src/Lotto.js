import CheckNumber from './Domain/NumberCheck.js';
import Create from './Controller/Create.js';
import CustomError from './Utils/CustomError.js';
import ERROR from './Constant/Error.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new CustomError(ERROR.NUMBER_LENGTH);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new CustomError(ERROR.NUMBER_DUPLICATE);
    }
  }

  // TODO: 추가 기능 구현

  async compareWith(randomNum) {
    // 보너스 번호 비교및 중복체크(올바른지 여부도 체크)
    const bonus = await new Create().userBonusNumber();
    const userNum = { user: this.#numbers, bonus };

    const check = new CheckNumber({ randomNum, userNum });

    const matchResult = this.checkMatching(check);
    const marginResult = this.calculateMargin(check, matchResult);

    return { matchResult, marginResult };
  }

  checkMatching(check) {
    const matchResult = check.getSameResult(check.sameCount());

    return matchResult;
  }

  calculateMargin(check, matchResult) {
    const margin = check.getMargin(check.totalAmount(matchResult));

    return margin;
  }
}

export default Lotto;
