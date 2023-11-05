import { WINNING_ERROR } from "../constants/errorMessage.js";
import BonusInput from "../view/input/BonusInput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const regex = /^(?!.*(\d).*\1)(?:(?:[1-9]|[1-4][0-5])(?:, ?|$)){6}$/;
    if (!regex.test(numbers)) {
      throw new Error(`${WINNING_ERROR.error}`);
    }
  }

  async bonus() {
    const bonus = new BonusInput();
    const bonusNumber = await bonus.number(this.#numbers);
    return bonusNumber;
  }
}

export default Lotto;

// 해당 클래스에서는 어떤걸 하는게 좋을까..
// 1. 로또 번호를 보내고 검증한 다음에 보너스 번호를 받는 방법.
// 2.
