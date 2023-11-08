import { WINNING_ERROR } from "../constants/errorMessage.js";
import BonusInput from "../view/input/BonusInput.js";

const { error } = WINNING_ERROR;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(`${error}`);
    }
    const regex = /^(?:(?:[1-9]|[1-3][0-9]|4[0-5])(?:, ?|$)){6}$/;
    if (!regex.test(numbers)) {
      throw new Error(`${error}`);
    }
  }

  async bonus() {
    const bonus = new BonusInput();
    const bonusNumber = await bonus.number(this.#numbers);
    return bonusNumber;
  }
}

export default Lotto;
