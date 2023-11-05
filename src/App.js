import { Console } from '@woowacourse/mission-utils';
import { printMessage } from './utils/printMessage.js';
import MESSAGES from './constants/messages.js';
import NUMBERS from './constants/numbers.js';
import {
  isValidPerchaseAmount,
  isValidLottoNumber,
  isValidBouseNumber,
} from './utils/validator.js';
import Lotto from './Lotto.js';
import makeLottoNumbers from './utils/makeLottoNumbers.js';
import BonusNumber from './BonusNumber.js';

class App {
  constructor() {}

  async play() {
    const purchaseAmount = await Console.readLineAsync(MESSAGES.purchaseAmount);
    isValidPerchaseAmount(purchaseAmount);
    const perchaseQuentity = parseInt(
      purchaseAmount / NUMBERS.perchaseUnit,
      10,
    );
    printMessage(`${perchaseQuentity}${MESSAGES.purchaseQuantity}`);
    makeLottoNumbers(perchaseQuentity);
    const userNumber = await Console.readLineAsync(
      MESSAGES.userLottoNumberInput,
    );
    const userLottoNumberInput = userNumber.split(',');
    const lotto = new Lotto(userLottoNumberInput);
    const userBonusNumberInput = await Console.readLineAsync(
      MESSAGES.askBonusNumber,
    );
    const bonusNumber = new BonusNumber(
      userBonusNumberInput,
      userLottoNumberInput,
    );
  }
}

export default App;
