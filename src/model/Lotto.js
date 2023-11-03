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
      (number) => number < 1 || number > 45
    );
    valid.winningIsValid(numbers, integerNumber, outOfRangeNumber);
  }
  async bonus() {
    const bonus = new BonusInput();
    const bonusNumber = await bonus.number();
    return bonusNumber;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
