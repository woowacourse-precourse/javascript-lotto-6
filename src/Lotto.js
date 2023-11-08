import { NUMBER } from "../utils/Constant.js";

const ERROR = {
  LIMIT_LOTTO_NUMBERS: `[ERROR] 로또 번호는 ${NUMBER.TOTAL_LOTTO_NUMBER}개여야 합니다.`,
  STRING_IN_LOTTO_NUMBERS: "[ERROR] 로또 번호에 문자가 있습니다.",
  AREA_OVER_LOTTO_NUMBERS: `[ERROR] 로또 번호는 ${NUMBER.MIN_LOTTO_NUMBER}부터 ${NUMBER.MAX_LOTTO_NUMBER}사이의 숫자여야 합니다.`,
  SAME_NUMBER_IN_LOTTO_NUMBERS: `[ERROR] 로또 번호에 중복된 숫자가 있습니다.`,
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== NUMBER.TOTAL_LOTTO_NUMBER) {
      throw new Error(ERROR.LIMIT_LOTTO_NUMBERS);
    } else if (this.findStringInNumbers(numbers)) {
      throw new Error(ERROR.STRING_IN_LOTTO_NUMBERS);
    } else if (this.findOverNumbers(numbers)) {
      throw new Error(ERROR.AREA_OVER_LOTTO_NUMBERS);
    } else if (this.findDuplicationInNumbers(numbers)) {
      throw new Error(ERROR.SAME_NUMBER_IN_LOTTO_NUMBERS);
    }
  }

  // TODO: 추가 기능 구현
  findStringInNumbers(numbers) {
    return numbers.some((item) => isNaN(item));
  }

  findOverNumbers(numbers) {
    return numbers.some(
      (item) => item < NUMBER.MIN_LOTTO_NUMBER || item > NUMBER.MAX_LOTTO_NUMBER
    );
  }

  findDuplicationInNumbers(numbers) {
    const duplication_numbers = new Set(numbers);
    return duplication_numbers.size !== numbers.length;
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  getLottoMathCount(lottoNumbersList) {
    const lottoMatchCountList = [];
    lottoNumbersList.forEach((lottoNumbers) => {
      lottoMatchCountList.push(this.#checkLottoNumberMatch(lottoNumbers));
    });
    return lottoMatchCountList;
  }

  #checkLottoNumberMatch(lottoNumbers) {
    return this.#numbers.filter((number) =>
      lottoNumbers.includes(Number(number))
    ).length;
  }
}

export default Lotto;
