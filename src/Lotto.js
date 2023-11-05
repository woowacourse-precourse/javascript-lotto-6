import { validLottoNumber } from "./Valid";

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
    validLottoNumber(numbers);
  }

  // TODO: 추가 기능 구현
  getLottoResult({ winNumbers, bonusNumber }) {
    let numberOfCorrect = 0;
    let isBonusCorrect = false;
    this.#numbers.forEach((lottoNumber) => {
      winNumbers.forEach((winNumber) => {
        if (winNumber === lottoNumber) numberOfCorrect += 1;
      });
      if (lottoNumber === bonusNumber) isBonusCorrect = true;
    });

    if (numberOfCorrect === 6) return 1;
    if (numberOfCorrect === 5 && isBonusCorrect) return 2;
    return 8 - numberOfCorrect;
  }
}

export default Lotto;
