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
}

export default UserLottoNumber;
