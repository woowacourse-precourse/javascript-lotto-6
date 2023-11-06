import { Console } from '@woowacourse/mission-utils';
import {
  isNumber,
  isThousands,
  validateArrayLength,
} from '../utils/validation.js';
import { parseNumber, parseNumbers } from '../utils/index.js';

class LottoConsole {
  static async getBudget() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    LottoConsole.#validateEmtpyInput(input);
    this.printEmptyLine();

    const budget = parseNumber(input);
    isNumber(budget);
    isThousands(budget);

    return budget;
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

  static printAmountOfLotto(amount) {
    Console.print(`${amount}개를 구매했습니다.`);
  }

  static printResult(winningTable) {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winningTable['5등']}개`);
    Console.print(`4개 일치 (50,000원) - ${winningTable['4등']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winningTable['3등']}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningTable['2등']}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winningTable['1등']}개`);
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
