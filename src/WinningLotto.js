import { MissionUtils } from '@woowacourse/mission-utils';
import { repeatAskingWithErrorHandling } from './repeatAskingWithErrorHandling';
import { LOTTO_NUMBER_AMOUNT, LOTTO_NUMBER_RANGE } from './utils';

class WinningLotto {
  numbers;
  bonus;

  async askNumbers() {
    const numbers = await WinningLotto.#inputNumbers();
    WinningLotto.#validateNumbers(numbers);
    this.numbers = numbers.split(',');
  }

  static async #inputNumbers() {
    return await MissionUtils.Console.readLineAsync(
      '당첨 번호를 입력해 주세요.'
    );
  }

  static #validateNumbers(numbers) {
    if (numbers === '') {
      throw new Error(
        '[ERROR] Invalid winning numbers. 아무것도 입력하지 않았습니다.'
      );
    }

    if (numbers.includes(',,')) {
      throw new Error(
        '[ERROR] Invalid winning numbers. 쉼표를 연속하여 입력하였습니다.'
      );
    }

    const numbersArray = numbers.split(',').map((number) => Number(number));

    if (numbersArray.some((number) => Number.isNaN(number))) {
      throw new Error(
        '[ERROR] Invalid winning numbers. 문자를 포함하여 입력하였습니다.'
      );
    }

    if (numbersArray.length !== LOTTO_NUMBER_AMOUNT) {
      throw new Error(
        '[ERROR] Invalid winning numbers. 쉼표를 연속하여 입력하였습니다.'
      );
    }
    if (numbersArray.length !== new Set(numbersArray).size) {
      throw new Error(
        `[ERROR] Invalid winning numbers. 입력한 수 중 중복이 있습니다.`
      );
    }
    if (
      numbersArray.some(
        (number) =>
          Number(number) < LOTTO_NUMBER_RANGE.MIN ||
          Number(number) > LOTTO_NUMBER_RANGE.MAX
      )
    ) {
      throw new Error(
        `[ERROR] Invalid winning numbers. 입력한 수 중 유효한 숫자 범위를 벗어난 수가 있습니다.`
      );
    }
  }

  async askBonus() {
    const bonus = await WinningLotto.#inputBonus();
    WinningLotto.#validateBonus(bonus, this.numbers);
    this.bonus = Number(bonus);
  }

  static async #inputBonus() {
    return await MissionUtils.Console.readLineAsync(
      '보너스 번호를 입력해 주세요.'
    );
  }

  static #validateBonus(bonus, numbers) {
    if (bonus === '') {
      throw new Error(
        '[ERROR] Invalid winning bonus. 아무것도 입력하지 않았습니다.'
      );
    }

    if (Number.isNaN(Number(bonus))) {
      throw new Error(
        '[ERROR] Invalid winning bonus. 문자를 포함하여 입력하였습니다.'
      );
    }

    if (numbers.includes(bonus)) {
      throw new Error(
        '[ERROR] Invalid winning bonus. 입력한 숫자가 당첨 번호 중 하나와 같습니다.'
      );
    }

    if (
      Number(bonus) < LOTTO_NUMBER_RANGE.MIN ||
      Number(bonus) > LOTTO_NUMBER_RANGE.MAX
    ) {
      throw new Error(
        `[ERROR] Invalid winning bonus. 입력한 수 중 유효한 숫자 범위를 벗어난 수가 있습니다.`
      );
    }
  }
}

export default WinningLotto;
