import { checkValue } from './libs/checkValue';
import { throwError } from './libs/throwError';

class BonusNumber {
  constructor(bonusNumber, winningNumbers) {
    this.validate(bonusNumber, winningNumbers);
    this.value = bonusNumber;
  }

  validate(bonusNumber, winningNumbers) {
    const { errorMessage } = checkValue.bonusNumber(
      bonusNumber,
      winningNumbers,
    );

    if (errorMessage) throwError(errorMessage);
  }
}

export default BonusNumber;
