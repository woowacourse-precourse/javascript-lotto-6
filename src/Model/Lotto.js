import { validateLotto } from '../Validator/Validate.js';
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    const [check, message] = validateLotto(numbers.sort((a, b) => a - b));
    if (check) {
      throw new Error(message);
    }
  }

  calculateCorrectNumber(lottoArray, bonusNumber) {
    const correctArray = [];
    lottoArray.forEach((lotto) => {
      correctArray.push(this.#compareLottoAndGoal(lotto, Number(bonusNumber)));
    });
    return correctArray;
  }

  #compareLottoAndGoal(lotto, bonusNumber) {
    const correctCount = 13 - new Set([...lotto.getNumbers(), ...this.#numbers, bonusNumber]).size;
    return [correctCount, lotto.getNumbers().indexOf(bonusNumber) !== -1 ? true : false];
  }
}

export default Lotto;
