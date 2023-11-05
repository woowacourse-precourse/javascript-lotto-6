import Lotto from './Lotto.js';
import Validator from './validator/Validator.js';

class WinningLotto extends Lotto {
  #bonusNumber;

  setBonusNumber(number, winningNumbers) {
    this.#validate(number, winningNumbers);
    this.#bonusNumber = number;
  }

  #validate(number, winningNumbers) {
    Validator.range([number]);

    if (winningNumbers.includes(number)) {
      throw new Error(
        '[ERROR] 보너스 번호는 당첨 번호에 포함되지 않은 숫자여야 합니다.'
      );
    }
  }
}

export default WinningLotto;
