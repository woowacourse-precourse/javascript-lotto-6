class Lotto {
  #numbers;

  constructor(numbers) {
    try {
      this.#validate(numbers);
      this.#numbers = numbers;
    } catch (error) {
      throw new Error(error);
    }
  }

  #validate(numbers) {
    if (!this.isValidSize(numbers) || this.isOverlapped(numbers) || !this.isEveryNumsInRange(numbers)) {
      throw new Error('[ERROR] : 조건에 맞는 로또 번호가 생성되지 않았습니다.');
    }
  }

  // TODO: 추가 기능 구현
  get numbers() {
    return Array.from(this.#numbers);
  }

  isOverlapped(numbers) {
    const set = new Set(numbers);
    return set.size !== 6;
  }

  isValidSize(numbers) {
    if (numbers.length !== 6) return false;
    return true;
  }

  isValidRangeNum(num) {
    return num >= 1 && num <= 45;
  }

  isEveryNumsInRange(numbers) {
    return numbers.every((num) => this.isValidRangeNum(num));
  }
}

export default Lotto;
