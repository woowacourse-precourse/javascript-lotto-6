const MAX_NUMBER = 45;
const MIN_NUMBER = 1;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  validateNumbers(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(Number(number))) {
        throw new Error('[ERROR] 숫자를 입력해주세요.');
      }

      if (Number(number) < MIN_NUMBER || Number(number) > MAX_NUMBER) {
        throw new Error('[ERROR] 1부터 45 사이의 숫자를 입력해주세요.');
      }
    });
  }
}
export default Lotto;
