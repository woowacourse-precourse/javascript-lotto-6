import { Console } from "@woowacourse/mission-utils";

class UserLottoNumber {
  constructor() {
    this.lottoNumbers = { baseNumbers: [], bonusNumber: null };
  }

  async setUserLottoNumbers() {
    const input = await Console.readLineAsync();
    return input.split(",").map((numStr) => parseInt(numStr.trim(), 10));
  }

  async userLotto() {
    this.lottoNumbers.baseNumbers = await this.setUserLottoNumbers();
    const bonusNumberArray = await this.setUserLottoNumbers();
    this.lottoNumbers.bonusNumber = bonusNumberArray[0];
    return this.lottoNumbers;
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
