import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';

class OutputView {
  static async printNewLine() {
    Console.print('');
  }

  static async printPurchaseLottoCount(count) {
    Console.print(count + OUTPUT_MESSAGE.purchaseLottoCount);
  }

  static async printLottoNumbers(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);

    Console.print(sortedNumbers);
  }
}

export default OutputView;
