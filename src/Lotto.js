class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length === 0) throw new Error('[ERROR] 로또 번호를 입력하세요.');
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (this.checkRange(numbers))
      throw new Error('[ERROR] 1~45 사이의 숫자를 입력하세요.');
    const numbersSet = getNumbersSet(numbers);
    if ([...numbersSet].length !== 6)
      throw new Error('[ERROR] 중복되지 않는 숫자를 입력하세요');
  }

  checkRange(numbers) {
    return numbers.filter(value => 1 <= value && value <= 45).length;
  }

  getNumbersSet(numbers) {
    return new Set(numbers.split('').map(Number));
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
