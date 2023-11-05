import { MissionUtils } from "@woowacourse/mission-utils";

class LottoNumberGenerator {
  static #RANGE_START = 1;
  static #RANGE_END = 45;
  static #QUANTITY = 6;

  static generate() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      this.#RANGE_START,
      this.#RANGE_END,
      this.#QUANTITY
    );
  }

  static isValidLottoNumber(number) {
    if(number < this.#RANGE_START || number > this.#RANGE_END) {
        return false;
    }
    return true;
  }

  static isValidNumberQuantity(numbers) {
    if(numbers.length != this.#QUANTITY) {
        return false;
    }
    return true;
  }
}

export default LottoNumberGenerator;
