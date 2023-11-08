import Validation from "./libs/Validation.js";
import Error from "./libs/Error.js";

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.Validation(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }

  validation(bonusNumber, winningNumbers) {
    try {
      Validation.checkBonusNumber(bonusNumber, winningNumbers);
    } catch (error) {
      Error(error.message);
    }
  }
}

export default BonusNumber;
