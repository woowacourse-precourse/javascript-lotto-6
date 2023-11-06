import { Console } from '@woowacourse/mission-utils';
import {
  isNumber,
  isThousands,
  validateArrayLength,
} from '../utils/validation.js';
import { parseNumber, parseNumbers } from '../utils/index.js';

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

  static async getLottoNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    LottoConsole.#validateEmtpyInput(input);
    this.printEmptyLine();

    const numbers = parseNumbers(input);
    validateArrayLength(numbers);

    return numbers;
  }

  static async getBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    LottoConsole.#validateEmtpyInput(input);
    this.printEmptyLine();

    const bonusNumber = parseNumber(input);

    return bonusNumber;
  }

  static printEmptyLine() {
    Console.print('');
  }

  static #validateEmtpyInput(input) {
    if (input.trim().length === 0)
      throw new Error('[ERROR] 입력값이 비어있습니다.');
  }
}

export default LottoConsole;
