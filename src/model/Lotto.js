class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    try {
      this.#validate(numbers);
      this.#numbers = numbers;
    } catch (error) {
      throw error;
    }
  }

  getLottoNumber() {
    return this.#numbers;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
