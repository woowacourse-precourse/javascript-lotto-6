class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers === '') throw new Error('[ERROR] 로또 번호를 입력하세요.');
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const arrayLength = this.checkRange(numbers);
    if (arrayLength !== 0)
      throw new Error('[ERROR] 1~45 사이의 숫자를 입력하세요.');
  }

  checkRange(numbers) {
    const numberArray = numbers.split(', ');
    return numberArray.filter(value => 1 <= value && value <= 45).length;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
