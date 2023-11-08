import {Console} from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.map((v) => parseInt(v)).sort((a, b) => a - b);
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      if (!/^\d+$/g.test(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자로 입력해야 합니다.");
      }
      if (+number < 1 || +number > 45) {
        throw new Error(
            "[ERROR] 로또 번호는 1~45 사이의 숫자를 입력해야 합니다."
        );
      }
    });

    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
    }
  }

  // TODO: 추가 기능 구현수
  getNumber() {
    return this.#numbers;
  }


  getRank(winningNumber, bonusNumber) {
    const isMatchedBonus = this.#numbers.includes(bonusNumber);
    let count = winningNumber.filter(n => this.#numbers.includes(n))?.length

    if (count === 6) {
      return 1;
    }
    if (count === 5) {
      return isMatchedBonus ? 2 : 3;
    }
    if (count === 4) {
      return 4;
    }
    if (count === 3) {
      return 5;
    }
    return 0;
  }
}

export default Lotto;
