import { readUserInput } from "../UI/inputView.js";

class UserLottoNumber {
  constructor() {
    this.lottoNumbers = { baseNumbers: [], bonusNumber: null };
  }

  async userLotto() {
    const baseInput = await readUserInput();
    this.lottoNumbers.baseNumbers = this.setUserLottoNumbers(baseInput);

    const bonusInput = await readUserInput();
    const bonusNumber = this.setUserLottoNumbers(bonusInput)[0];
    this.lottoNumbers.bonusNumber = bonusNumber;

    return this.lottoNumbers;
  }

  #validate(number) {
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
