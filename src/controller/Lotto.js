import NUMBERS from "../constants/numbers.js";
import WinningValid from "../utils/WinningValid.js";
import BonusInput from "../view/input/BonusInput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const valid = new WinningValid();
    const integerNumber = numbers.filter((number) =>
      Number.isInteger(Number(number))
    );
    const outOfRangeNumber = numbers.filter(
      (number) => number < NUMBERS.start_number || number > NUMBERS.end_number
    );
    valid.winningIsValid(numbers, integerNumber, outOfRangeNumber);
  }
  async bonus() {
    const bonus = new BonusInput();
    const bonusNumber = await bonus.number(this.#numbers);
    return bonusNumber;
  }
}

export default Lotto;
