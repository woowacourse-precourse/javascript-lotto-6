import Lotto from "../Lotto.js";
import { LOTTO_NUMBER_END, LOTTO_NUMBER_START } from "./lottoConstants.js";

class LottoValidator {
  validateWinningNumbers(winningNumbers) {
    new Lotto(winningNumbers); // 생성 과정에서 유효성 검사가 수행됨
  }

  validateBonusNumbers(bonusNumber, winningNumbers) {
    this.validateBonusNumberIsNumeric(bonusNumber);
    this.validateBonusNumberInRange(bonusNumber);
    this.validateBonusNumberNotInWinningNumbers(bonusNumber, winningNumbers);
  }

  validateBonusNumberIsNumeric(bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 숫자만 입력 가능합니다.");
    }
  }

  validateBonusNumberInRange(bonusNumber) {
    if (
      !(bonusNumber >= LOTTO_NUMBER_START && bonusNumber <= LOTTO_NUMBER_END)
    ) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45까지 가능합니다.");
    }
  }

  validateBonusNumberNotInWinningNumbers(bonusNumber, winningNumbers) {
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호가 당첨 번호와 중복됩니다.");
    }
  }
}

export default LottoValidator;
