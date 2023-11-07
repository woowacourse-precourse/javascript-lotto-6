import { LOTTO_CONSTANT } from "./utils";

const MESSAGES = Object.freeze({
  ERROR: {
    MUST_SAME_LENGTH: `[ERROR] 로또 번호는 ${LOTTO_CONSTANT.LOTTO_LENGTH}개여야 합니다.`,
    NO_DUPLICATE_NUMBER: "[ERROR] 중복된 숫자를 입력하셨습니다.",
    MUST_NUMBER: "[ERROR] 숫자만 입력해주세요.",
    NO_SPACE: "[ERROR] 공백을 입력하셨습니다.",
    MUST_IN_RANGE: `[ERROR] 숫자의 범위는 ${LOTTO_CONSTANT.MIN_LOTTO_NUMBER}~${LOTTO_CONSTANT.MAX_LOTTO_NUMBER} 이어야 합니다.`,
  },
});

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONSTANT.LOTTO_LENGTH) {
      throw new Error(MESSAGES.ERROR.MUST_SAME_LENGTH);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(MESSAGES.ERROR.NO_DUPLICATE_NUMBER);
    }
    numbers.forEach((number) => {
      this.#validLottoNumber(number);
    });
  }

  // TODO: 추가 기능 구현
  #validLottoNumber(number) {
    if (Number.isNaN(number)) {
      throw new Error(MESSAGES.ERROR.MUST_NUMBER);
    }
    if (!number) {
      throw new Error(MESSAGES.ERROR.NO_SPACE);
    }
    const IS_NUMBER_IN_RANGE =
      number >= LOTTO_CONSTANT.MIN_LOTTO_NUMBER &&
      number <= LOTTO_CONSTANT.MAX_LOTTO_NUMBER;
    if (!IS_NUMBER_IN_RANGE) {
      throw new Error(MESSAGES.ERROR.MUST_IN_RANGE);
    }
  }

  getLottoResult({ winNumbers, bonusNumber }) {
    let numberOfCorrect = 0;
    let isBonusCorrect = false;
    this.#numbers.forEach((lottoNumber) => {
      winNumbers.forEach((winNumber) => {
        if (winNumber === lottoNumber) numberOfCorrect += 1;
      });
      if (lottoNumber === bonusNumber) isBonusCorrect = true;
    });

    if (numberOfCorrect === 6) return 1;
    if (numberOfCorrect === 5 && isBonusCorrect) return 2;
    return 8 - numberOfCorrect;
  }
}

export default Lotto;
