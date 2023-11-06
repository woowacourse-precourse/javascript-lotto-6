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
    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자를 입력하셨습니다.");
    }
    this.#validLottoNumbers(numbers);
  }

  // TODO: 추가 기능 구현
  #validLottoNumbers(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) throw new Error("[ERROR] 숫자만 입력해주세요.");
      if (!number) throw new Error("[ERROR] 공백을 입력하셨습니다.");
      if (number < 1 || number > 45)
        throw new Error("[Error] 숫자의 범위는 1~45 이어야 합니다.");
    });
  }

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
