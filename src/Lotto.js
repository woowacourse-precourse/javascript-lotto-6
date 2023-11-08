import MyConsole from './Console.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.console = new MyConsole();
    this.#validate(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    return this;
  }

  // TODO: 추가 기능 구현
  printLotto() {
    this.console.log(this.#numbers);
  }
}

export default Lotto;
