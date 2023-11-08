import { Random } from '@woowacourse/mission-utils';
import NUMBERS from '../constants/numbers.js';
import OutputView from '../view/OutputView.js';

class WinningNumbers {
  static getWinningLottoNumbers(purchaseAmount) {
    const winningNumbers = [];
    const perchaseQuentity = parseInt(
      purchaseAmount / NUMBERS.purchaseUnit,
      10,
    );

    OutputView.printPurchaseHeader(perchaseQuentity);
    let count = 0;
    while (count < perchaseQuentity) {
      const lottoNumbers = Random.pickUniqueNumbersInRange(
        NUMBERS.minLottoNumber,
        NUMBERS.maxLottoNumber,
        NUMBERS.lottoNumberLength,
      );
      const winningNumber = lottoNumbers.sort((a, b) => a - b);
      winningNumbers.push(winningNumber);
      OutputView.printWinningNumber(winningNumber);
      count += 1;
    }
    return winningNumbers;
  }
}

export default WinningNumbers;
