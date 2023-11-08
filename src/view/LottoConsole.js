import { Console } from '@woowacourse/mission-utils';
import { CONSTANTS } from '../constants/lotto.js';

class LottoConsole {
  static async getBudget() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    LottoConsole.#validateEmtpyInput(input);
    LottoConsole.printEmptyLine();

    const budget = LottoConsole.#parseNumber(input);
    LottoConsole.#isNumber(budget);
    LottoConsole.#validateThousands(budget);

    return budget;
  }

  static async getLottoNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    LottoConsole.#validateEmtpyInput(input);
    LottoConsole.printEmptyLine();

    const numbers = LottoConsole.#parseNumbers(input);
    LottoConsole.#validateArrayLength(numbers);

    return numbers;
  }

  static async getBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    LottoConsole.#validateEmtpyInput(input);
    LottoConsole.printEmptyLine();

    const bonusNumber = LottoConsole.#parseNumber(input);

    return bonusNumber;
  }

  static async getBudgetUntilSuccess() {
    const budget = await this.runFunctionUntilSuccess(LottoConsole.getBudget);
    return budget;
  }

  static async getLottoNumbersUntilSuccess() {
    const lottoNumbers = await this.runFunctionUntilSuccess(
      LottoConsole.getLottoNumbers
    );
    return lottoNumbers;
  }

  static async getBonusNumberUntilSuccess() {
    const bonusNumber = await this.runFunctionUntilSuccess(
      LottoConsole.getBonusNumber
    );
    return bonusNumber;
  }

  static async runFunctionUntilSuccess(func) {
    let returnedValue;
    let isValid = false;
    while (!isValid)
      try {
        returnedValue = await func();
        isValid = true;
      } catch (error) {
        Console.print(`${error.message}\n`);
      }
    return returnedValue;
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

  static printRateOfReturn(prize, budget) {
    Console.print(`총 수익률은 ${((prize / budget) * 100).toFixed(1)}%입니다.`);
  }

  static printLottoNumbers(lottoNumbers) {
    lottoNumbers.forEach((lottoNumber) =>
      Console.print(`[${lottoNumber.join(', ')}]`)
    );
    LottoConsole.printEmptyLine();
  }

  static printEmptyLine() {
    Console.print('');
  }

  static #parseNumber(string) {
    const parsedNumber = Number(string);
    LottoConsole.#isNumber(parsedNumber);
    return parsedNumber;
  }

  static #parseNumbers(string) {
    const lottoNumbers = string.split(',').map(Number);
    lottoNumbers.forEach(LottoConsole.#validateLottoNumber);
    return lottoNumbers;
  }

  static #validateEmtpyInput(input) {
    if (input.trim().length === 0)
      throw new Error('[ERROR] 입력값이 비어있습니다.');
  }

  static #isNumber(number) {
    if (Number.isNaN(number)) throw new Error('[ERROR] 숫자를 입력해주세요.');
  }

  static #validateNumberBetweenRange(number) {
    if (number < CONSTANTS.MINIMUM_BOUNDARY)
      throw new Error(
        `[ERROR] 로또 숫자는 ${CONSTANTS.MINIMUM_BOUNDARY}과 ${CONSTANTS.MAXIMUM_BOUNDARY}사이어야 합니다.`
      );
    if (number > CONSTANTS.MAXIMUM_BOUNDARY)
      throw new Error(
        `[ERROR] 로또 숫자는 ${CONSTANTS.MINIMUM_BOUNDARY}과 ${CONSTANTS.MAXIMUM_BOUNDARY}사이어야 합니다.`
      );
  }

  static #validateLottoNumber(number) {
    LottoConsole.#isNumber(number);
    LottoConsole.#validateNumberBetweenRange(number);
  }

  static #validateThousands(number) {
    if (number % CONSTANTS.BASE_PRICING_UNIT !== 0)
      throw new Error('[ERROR] 입력값은 1000원 단위입니다.');
  }

  static #validateArrayLength(arr) {
    if (arr.length !== CONSTANTS.LENGTH_OF_LOTTO)
      throw new Error('[ERROR] 로또는 6자리 숫자이어야 합니다.');
  }
}

export default LottoConsole;
