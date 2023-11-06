import { Random } from '@woowacourse/mission-utils';
import { printMessage } from '../utils/printMessage.js';
import NUMBERS from '../constants/numbers.js';
import MESSAGES from '../constants/messages.js';

class WinningNumbers {
  static getWinningLottoNumbers(purchaseAmount) {
    const winningNumbers = [];
    const perchaseQuentity = parseInt(
      purchaseAmount / NUMBERS.purchaseUnit,
      10,
    );

    printMessage(`${perchaseQuentity}${MESSAGES.purchaseQuantity}`);
    let count = 0;
    while (count < perchaseQuentity) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        NUMBERS.minLottoNumber,
        NUMBERS.maxLottoNumber,
        NUMBERS.lottoNumberLength,
      );
      const winningNumber = lottoNumbers.sort((a, b) => a - b);
      winningNumbers.push(winningNumber);
      printMessage(`[${winningNumber.join(', ')}]`);
      count += 1;
    }
    return winningNumbers;
  }
}

export default WinningNumbers;
