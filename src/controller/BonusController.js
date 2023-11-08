import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { ERROR_MESSEGE } from '../constant/messages.js';

class BonusController {
  async inputBonus() {
    let bonusNumber;
    while (true) {
      try {
        bonusNumber = await InputView.inputBonusNumber();
        // this.#validateBonusNumber(bonusNumber);
        break;
      } catch (error) {
        OutputView.printError(error.message);
      }
    }
    return bonusNumber;
  }

  #validateBonusNumber(bonusNumber) {
    //
  }

  #isDuplicates(array) {}
}

export default BonusController;
