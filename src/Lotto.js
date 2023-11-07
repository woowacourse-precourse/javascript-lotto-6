import {MissionUtils} from "@woowacourse/mission-utils";

/**
 * 사용자에게 당첨 번호 입력받기
 */

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  /**
   * 사용자에게 입력받는 당첨 번호 에러 처리
   */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.some(isNaN) || numbers.some(number => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.")
    }
  }

  /**
   * 1에서 45 사이의 중복되지 않는 숫자 6개 출력
   */
  getRandomLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
  }
}

export default Lotto;
