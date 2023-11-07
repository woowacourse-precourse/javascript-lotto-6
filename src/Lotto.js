import { MissionUtils } from "@woowacourse/mission-utils";

//입력받은 값을 검증하고, 해당 값을 가지고 연산을 수행해서 결과값을 도출하는 것을 도메인 로직으로 함.
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate(numbers) {
    const NUMBER_SET = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (NUMBER_SET.size !== numbers.length) {
      console.log(NUMBER_SET.length);
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  printLottoNumber() {
    MissionUtils.Console.print(this.#numbers.sort((a, b) => a - b));
  }

  compareLottoNumber(winningNumber, bonusNumber) {
    let correctCount = 0;
    let bonusFlag = false;
    const MATCHING_NUMBER = winningNumber.filter((element) =>
      this.#numbers.includes(element)
    );
    if (MATCHING_NUMBER.length >= 3) {
      correctCount += MATCHING_NUMBER.length;
    }
    if (MATCHING_NUMBER.length === 5 && this.#numbers.includes(bonusNumber)) {
      bonusFlag = true;
    }
    return { correctCount, bonusFlag };
  }
}

export default Lotto;
