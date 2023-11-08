import { NUMBER } from "../utils/Constant.js";

const ERROR = {
  UNDEFINED_BONUS_NUMBER: "[ERROR] 입력을 받지 않았습니다.",
  STRING_IN_BONUS_NUMBER: "[ERROR] 숫자 안에 문자가 있습니다.",
  AREA_OVER_BONUS_NUMBER: `[ERROR] 로또 번호는 ${NUMBER.MIN_LOTTO_NUMBER}부터 ${NUMBER.MAX_LOTTO_NUMBER}사이의 숫자여야 합니다.`,
  BONUS_NUMBER_IN_LOTTO_NUMBERS:
    "[ERROR] 당첨 번호에 포함된 번호를 뽑을 수 없습니다.",
};

class BonusLotto {
  #number;

  constructor(number, lotto) {
    this.#validation(number, lotto);
    this.#number = number;
  }

  #validation(number, lotto) {
    if (number.length === 0) {
      throw new Error(ERROR.UNDEFINED_BONUS_NUMBER);
    } else if (isNaN(number)) {
      throw new Error(ERROR.STRING_IN_BONUS_NUMBER);
    } else if (
      number < NUMBER.MIN_LOTTO_NUMBER ||
      number > NUMBER.MAX_LOTTO_NUMBER
    ) {
      throw new Error(ERROR.AREA_OVER_BONUS_NUMBER);
    } else if (lotto.includes(number)) {
      throw new Error(ERROR.BONUS_NUMBER_IN_LOTTO_NUMBERS);
    }
  }

  getLottoMatchBonusCount(lottoNumbersList) {
    const lottoMathBonusCountList = [];
    lottoNumbersList.forEach((lotttoNumbers) => {
      lottoMathBonusCountList.push(
        lotttoNumbers.includes(Number(this.#number))
      );
    });
    return lottoMathBonusCountList;
  }
}

export default BonusLotto;
