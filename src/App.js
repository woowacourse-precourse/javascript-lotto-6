import { printMessage } from './utils/printMessage.js';
import MESSAGES from './constants/messages.js';
import NUMBERS from './constants/numbers.js';
import isValidPerchaseAmount from './utils/validator.js';
import Lotto from './Lotto.js';
import makeLottoNumbers from './utils/makeLottoNumbers.js';

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
  }
}

export default App;
