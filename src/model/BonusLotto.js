import { Console } from '@woowacourse/mission-utils';

class BonusLotto {
  #number;

  constructor(number, answerTicket) {
    const bonusLotto = Number(number);
    this.#validate(bonusLotto, answerTicket);
    this.#number = bonusLotto;
  }

  #validate(number, answerTicket) {
    if (Number.isNaN(number)) {
      throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
    }
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 보너스 번호는 정수여야 합니다.");
    }
    if (number < 1 ||
      number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1~45 범위의 숫자여야 합니다.");
    }
    if (answerTicket.includes(number)) {
      throw new Error("[ERROR] 보너스 번호는 당첨번호와 중복되면 안됩니다.");
    }
  }

  getNumber() {
    return this.#number;
  }
}

export default BonusLotto;