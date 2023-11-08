import Lotto from '../Lotto';
import { DELIMITER } from '../utils/constants/constants';
import { lottoBonusNumberValidator } from '../utils/validators/LottoNumberValidator';

class WinngingLotto {
  #lotto;
  #bonusNumber;

  constructor(numbersInput, bonusNumberInput) {
    const splitNumbers = numbersInput.split(DELIMITER.splitDelimiter).map(Number);
    this.#lotto = new Lotto(splitNumbers);

    const bonusNumber = Number(bonusNumberInput);
    lottoBonusNumberValidator(bonusNumber, this.#lotto.getNumbers());
    this.#bonusNumber = bonusNumber;
  }

  getNumbers() {
    return this.#lotto.getNumbers();
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinngingLotto;
