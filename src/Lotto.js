import { INFO_MESSAGE } from './constants/messages.js';
import Validator from './utils/Validator.js';
import View from './View.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.checkLottoNumbers(numbers);
    this.#numbers = numbers;
  }

  static async getBonusNumber(lottoNumbersArray) {
    const bonusNumber = Number(
      await View.getUserInput(INFO_MESSAGE.BONUS_NUMBER_ASK_MESSAGE),
    );
    Validator.checkBonusNumber(bonusNumber, lottoNumbersArray);
    return bonusNumber;
  }
}

export default Lotto;
