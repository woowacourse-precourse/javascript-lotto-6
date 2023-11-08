// 로또 한줄 만들기
// numbers, bonus 저장

// import UserInput from './models/userInput.js';
import modifiers from './utils/modifiers.js';

class Lotto {
  #numbers;

  #bonus;

  constructor(numbers, bonus) {
    this.#validate(numbers);
    this.#numbers = modifiers.composeLists(numbers);
    this.#bonus = Number(bonus);
  }

  #validate(numbers) {
    // if (numbers.length !== 6) {
    //   throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    // }
  }

  getNumbers() {
    return this.#numbers;
  }

  getBonus() {
    return this.#bonus;
  }
}

export default Lotto;
