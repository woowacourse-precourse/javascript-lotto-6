import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "./constants/message.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.SIX_NUMBER);
    }
    if (numbers.filter((num) => !isNaN(num)).length !== 6) {
      throw new Error(ERROR_MESSAGES.SIX_ONLY_NUMBER);
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error(ERROR_MESSAGES.UNIQUE_SIX_NUMBER);
    }
    if (!numbers.every((num) => num <= 45 && num >= 1)) {
      throw new Error(ERROR_MESSAGES.VALID_RANGE_NUMBER);
    }
  }

  get numbers() {
    return this.#numbers;
  }

  static makeRandomNumber() {
    let numberList = [];
    numberList = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return numberList;
  }

  static getLottoNum(lottoCnt) {
    const lottoList = [];
    while (lottoList.length < lottoCnt) {
      lottoList.push(Lotto.makeRandomNumber().sort((a, b) => a - b));
    }
    return lottoList;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
