import RANK from "./lib/constants/rank";
import WORD from "./lib/constants/word";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  getLottoNumber() {
    return this.#numbers;
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
