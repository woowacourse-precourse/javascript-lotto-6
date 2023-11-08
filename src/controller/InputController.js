import UserInput from '../view/UserInput.js';
import Validator from '../model/Validator.js';
import { print } from '../utils/missionUtils.js';
import Lotto from '../Lotto.js';

class InputController {
  static async getPriceControl() {
    let ticketPrice = 0;
    while (ticketPrice === 0) {
      try {
        const getTicketPrice = await UserInput.getLottoTickets();
        ticketPrice = Validator.throwPurchaseAmountError(getTicketPrice);
      } catch (error) {
        print(error.message);
      }
    }
    return ticketPrice;
  }

  static async getWinningNumbersControl() {
    let lotto = null;
    while (lotto === null) {
      try {
        const getWinningNumbers = await UserInput.getWinningNumbers();
        const winningNumbers =
          Validator.throwWinningNumbersError(getWinningNumbers);
        lotto = new Lotto(winningNumbers);
      } catch (error) {
        print(error.message);
      }
    }
    return lotto.getLottoNumbers();
  }

  static async getBonusNumberControl(winningNumbers) {
    let bonusNumber = 0;
    while (bonusNumber === 0) {
      try {
        const getBonusNumber = await UserInput.getBonusNumber();
        const validBonusNumber =
          Validator.throwBonusNumberError(getBonusNumber);
        bonusNumber = Validator.compareWinningAndBonusNumbers(
          winningNumbers,
          validBonusNumber,
        );
      } catch (error) {
        print(error.message);
      }
    }
    return bonusNumber;
  }
}

export default InputController;
