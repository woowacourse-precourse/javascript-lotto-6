import { Console } from '@woowacourse/mission-utils';
import { printMessage } from './utils/printMessage.js';
import MESSAGES from './constants/messages.js';
import NUMBERS from './constants/numbers.js';
import isValidPerchaseAmount from './utils/validator.js';
import Lotto from './Lotto.js';
import makeLottoNumbers from './utils/makeLottoNumbers.js';
import BonusNumber from './BonusNumber.js';
import WinningResult from './WinningResult.js';

class App {
  async play() {
    const purchaseAmount = await Console.readLineAsync(MESSAGES.purchaseAmount);

    await isValidPerchaseAmount(purchaseAmount);

    const perchaseQuentity = parseInt(
      purchaseAmount / NUMBERS.perchaseUnit,
      10,
    );

    printMessage(`${perchaseQuentity}${MESSAGES.purchaseQuantity}`);

    const winningNumbers = await makeLottoNumbers(perchaseQuentity);

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

    const result = new WinningResult(
      purchaseAmount,
      userBonusNumberInput,
      userLottoNumberInput,
      winningNumbers,
    );
  }
}

export default App;
