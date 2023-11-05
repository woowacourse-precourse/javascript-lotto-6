import { Random } from "@woowacourse/mission-utils";
import { LOTTO_ERROR } from "./constants/ErrorMsg";

class Lotto {
  #numbers;

  constructor(numbers = []) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length === 0) {
      return;
    }
    //1. 로또 번호가 6개가 아닌 경우
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LOTTO_LENGTH_ERROR);
    }

    //2. 로또번호가 1부터 45의 수가 아닌 경우
    if (numbers.some(number => number < 1 || number > 45)) {
      throw new Error(LOTTO_ERROR.LOTTO_RANGE_ERROR);
    }

    //3. 로또번호중 중복이 있는 경우
    const setNumbers = new Set(numbers);
    if (setNumbers.size !== numbers.length) {
      throw new Error(LOTTO_ERROR.LOTTO_DUPLICATE_ERROR);
    }
  }

  generateLottoNumbers(lottoCount) {
    //lottoCount만큼의 로또 생성
    for(let i = 0; i < lottoCount; i++) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottoNumbers.sort((a, b) => a - b);
      this.#numbers.push(lottoNumbers);
    }
    return this.#numbers;
  }
}

export default Lotto;
