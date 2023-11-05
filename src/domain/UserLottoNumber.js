import { Console } from "@woowacourse/mission-utils";

class UserLottoNumber {
  constructor() {
    this.baseNumbers = [];
    this.bonusNumber = null;
  }

  async setUserLottoNumbers() {
    const input = await Console.readLineAsync();
    return input.split(",").map((numStr) => parseInt(numStr.trim(), 10));
  }

  async userBaseNumber() {
    this.baseNumbers = await this.setUserLottoNumbers();
    return this.baseNumbers;
  }

  async userBonusNumber() {
    const bonusNumberArray = await this.setUserLottoNumbers();
    const bonusNumber = bonusNumberArray[0];
    this.#bonusValidate(bonusNumber);
    this.bonusNumber = bonusNumber;
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
