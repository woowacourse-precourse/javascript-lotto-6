import { MissionUtils } from '@woowacourse/mission-utils';

class LottoInput {
  static async getLottoAmount() {
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
    const USER_INPUT_PRICE = parseInt(USER_INPUT, 10);
    return USER_INPUT_PRICE;
  }

  static validateAmount(lottoAmount) {
    if (
      isNaN(lottoAmount) ||
      !lottoAmount ||
      lottoAmount < 1000 ||
      lottoAmount % 1000 !== 0
    ) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.');
    }
  }

  static async getWinningNumbers() {
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');

    if (typeof USER_INPUT !== 'string' || USER_INPUT.trim() === '') {
      throw new Error('올바른 당첨 번호를 입력해야 합니다.');
    }

    const USER_INPUT_NUMBERS = USER_INPUT.split(',')
      .map((number) => parseInt(number.trim(), 10))
      .sort((a, b) => a - b);
    return USER_INPUT_NUMBERS;
  }

  // 숫자들 배열의 유효성 검사
  static validateNumbersArray(numbers) {
    const areAllnumbersValid = numbers.every(
      (number) => !isNaN(number) && number >= 1 && number <= 45,
    );
    const hasCorrectLength = numbers.length === 6;
    const hasAllUniqueNumbers = new Set(numbers).size === 6;
    if (!areAllnumbersValid || !hasCorrectLength || !hasAllUniqueNumbers) {
      throw new Error(
        '[ERROR] 입력은 1~45사이의 숫자이고, 6개의 숫자여야 합니다.',
      );
    }
  }

  // 단일 숫자의 유효성 검사
  static validateNumber(number) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error('[ERROR] 입력은 1~45사이의 숫자여야 합니다.');
    }
  }

  static async getBonusNumber() {
    const USER_INPUT =
      await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
    const USER_INPUT_BONUS_NUMBER = parseInt(USER_INPUT, 10);
    return USER_INPUT_BONUS_NUMBER;
  }
}

export default LottoInput;
