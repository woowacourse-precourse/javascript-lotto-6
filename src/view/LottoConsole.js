import { Console } from '@woowacourse/mission-utils';
import { isNumber, isThousands } from '../utils/validation.js';
import { parseNumber } from '../utils/index.js';

class LottoConsole {
  static async getPurchaseAmount() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    LottoConsole.#validateEmtpyInput(input);
    this.printEmptyLine();

    const purchaseAmount = parseNumber(input);
    isNumber(purchaseAmount);
    isThousands(purchaseAmount);

    return purchaseAmount;
  }

  static #validateEmtpyInput(input) {
    if (input.trim().length === 0)
      throw new Error('[ERROR] 입력값이 비어있습니다.');
  }
}

export default LottoConsole;
