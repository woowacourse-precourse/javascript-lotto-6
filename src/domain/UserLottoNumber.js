import { Console } from "@woowacourse/mission-utils";

class UserLottoNumber {
  constructor() {
    this.baseNumbers = [];
    this.bonusNumber = null;
  }

  async userBaseNumber() {
    const input = await Console.readLineAsync();
    this.baseNumbers = input.split(",").map((number) => parseInt(number.trim(), 10));
    return this.baseNumbers;
  }

  async userBonusNumber() {
    const input = await Console.readLineAsync();
    const number = parseInt(input.trim(), 10);

    this.#bonusValidate(number);
    this.bonusNumber = number;
    return this.bonusNumber;
  }

  #bonusValidate(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.ONLY_NUMBER);
    }

    if (number < 1 || number > 45) {
      throw new Error(ERROR.NUMBER_RANGE);
    }

    if (this.baseNumbers.includes(number)) {
      throw new Error(ERROR.NO_DUPLICATES);
    }
  }
}

export default UserLottoNumber;
