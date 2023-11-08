class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a-b, 0);
    this.#bonusNumber = bonusNumber;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  getCompareCount (lottoNumber) {
    let count = 0;
    this.#numbers.forEach(number => {
      if (lottoNumber.includes(Number(number))) {
        count++;
      }
    });
    return count;
  }

  getIsBonus (lottoNumber) {
    if (lottoNumber.includes(this.#bonusNumber)) {
      return true;
    }
  }
}

export default Lotto;
