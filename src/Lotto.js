class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
  getRank(winningNumbers, bonusNumber) {
    const matched = this.#numbers.filter(x => winningNumbers.includes(x));
    switch (matched.length) {
      case 6:
        return 'rank1';
      case 5:
        if (this.#numbers.includes(bonusNumber)) return 'rank2';
        return 'rank3';
      case 4:
        return 'rank4';
      case 3:
        return 'rank5';
    }
    return false;
  }
}

export default Lotto;
