class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#checkNumber(numbers);
    this.#checkSameNumber(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #checkNumber(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < 1 || numbers[i] > 45 || !Number.isInteger(numbers[i])) {
        throw new Error('[ERROR] 자연수');
      }
    }
  }

  #checkSameNumber(numbers) {
    const set = new Set(numbers);
    if (set.size() !== numbers.length) {
      throw new Error('[ERROR] 숫자 중복');
    }
  }

  compareNumbers(winningNumbers, bonusNumber) {
    // 로또번호 6자리 배열 vs 사용자 입력 7자리
    // [1,2,3,4,5,6] vs [2,3,5,6,7,8] + 4
    const winningCount = winningNumbers.filter((number) =>
      this.#numbers.includes(number)
    );
    if (this.#numbers.some(bonusNumber)) {
    }
  }
}

export default Lotto;
