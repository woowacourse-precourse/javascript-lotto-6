import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { ERROR_MESSEGE } from '../constant/messages.js';
import { OPTIONS } from '../constant/constants.js';

class BonusController {
  async inputBonus(winningNumber) {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await InputView.inputBonusNumber();
        this.validateBonusNumber(bonusNumber, winningNumber);
        break;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
    return Number(bonusNumber);
  }

  validateBonusNumber(bonusNumber, winningNumber) {
    if (!bonusNumber) throw new Error(ERROR_MESSEGE.notInput);
    if (isNaN(bonusNumber)) throw new Error(ERROR_MESSEGE.notNumber);
    if (bonusNumber <= 0) throw new Error(ERROR_MESSEGE.notPositive);
    if (bonusNumber < OPTIONS.minNumber || bonusNumber > OPTIONS.maxNumber)
      throw new Error(ERROR_MESSEGE.outOfRange);
    if (winningNumber.includes(bonusNumber)) throw new Error(ERROR_MESSEGE.duplicates);
  }
}

export default BonusController;
