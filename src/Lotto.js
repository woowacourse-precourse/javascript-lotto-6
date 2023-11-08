import { WINNING_NUMBER } from './constants/Error.js';
import { GAME } from './constants/Setting.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== GAME.lottoNumber) {
      throw new Error(WINNING_NUMBER.notUnique);
    }
    uniqueNumbers.forEach((number) => {
      if (!(number >= GAME.minNumber && number <= GAME.maxNumber)) {
        throw new Error(WINNING_NUMBER.invalidRange);
      }
    });
  }

  get winningNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
