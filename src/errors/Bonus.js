import { ERROR_MESSAGE } from "../Constants.js";
class Bonus {
  #lottoArr;

  constructor(lottoArr) {
    this.#validate(lottoArr);
    this.#lottoArr = lottoArr;
  }

  #validate(lottoArr) {
    const mainLottoArr = lottoArr[0];
    const bonusLotto = lottoArr[1];

    if (this.hasText(bonusLotto)) throw new Error(ERROR_MESSAGE.CONTAIN_TEXT);

    if (bonusLotto.includes(" ") || bonusLotto === "")
      throw new Error(ERROR_MESSAGE.CONTAIN_SPACES);

    if (this.hasSpecialCharacter(bonusLotto))
      throw new Error(ERROR_MESSAGE.CONTAIN_SPECIAL_CHARACTER);

    if (mainLottoArr.includes(Number(bonusLotto)))
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);

    if (Number(bonusLotto) > 45 || Number(bonusLotto) < 1 || isNaN(bonusLotto))
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_IN_1_TO_45);
  }

  hasSpecialCharacter(item) {
    const specialCharacter = /[^A-Za-z가-힣0-9\s]/;
    return specialCharacter.test(item);
  }
  hasText(item) {
    const regex = /[A-Za-z가-힣]/;
    return regex.test(item);
  }
}

export default Bonus;
