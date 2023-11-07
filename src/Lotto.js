class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  // eslint-disable-next-line class-methods-use-this
  #validate(numbers) {
    const SET_NUMBERS = new Set(numbers);
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (SET_NUMBERS.size !== numbers.length) {
      throw new Error('[ERROR] 중복되는 숫자가 존재합니다.');
    }
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > 45 || numbers[i] < 0) {
        throw new Error('[ERROR] 로또 숫자 범위는 1~45 까지 입니다.');
      }
    }
  }
}

export default Lotto;
