import { RANK } from "./lib/constants/rank";
import WORD from "./lib/constants/word";
import InputError from "./lib/utils/error";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.Error = new InputError();
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate(numbers) {
    this.Error.validateLottoInput(numbers);
  }

  getLottoNumber() {
    return this.#numbers.join(`${WORD.DELIMITER} `);
  }

  raffleNumber(lottoNumber, bonusNumber) {
    const matchingLottoCount = this.raffleLottoNumber(lottoNumber);
    if (matchingLottoCount === WORD.BONUSCONDITION)
      return this.raffleBonusNumber(bonusNumber);
    return RANK[matchingLottoCount];
  }

  raffleLottoNumber(lottoNumber) {
    const count = lottoNumber.filter((value) =>
      this.#numbers.includes(value)
    )?.length;
    return count;
  }

  raffleBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) return RANK.SECONDRANK;
    return RANK.THIRDRANK;
  }
}

export default Lotto;
