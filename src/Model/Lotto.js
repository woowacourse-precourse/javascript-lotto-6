import { Random } from "@woowacourse/mission-utils";
import { ERRORS } from "../Utilities/Constant.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERRORS.INPUT_LOTTO_NOT_ENOUGH);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error(ERRORS.INPUT_LOTTO_DUPLICATED);
    }
  }

  // TODO: 추가 기능 구현
  static generateNumbers(count) {
    const lottoNumbers = [];
    for (let i = 0; i < count; i++) {
      let uniqueNumbers;
      do {
        uniqueNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      } while (
        lottoNumbers.some((numbers) =>
          numbers.every((num) => uniqueNumbers.includes(num))
        )
      );
      const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
      lottoNumbers.push(sortedNumbers);
    }
    return lottoNumbers;
  }
}

export default Lotto;
