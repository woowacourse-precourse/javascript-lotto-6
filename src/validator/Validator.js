import { ERROR, LOTTO } from '../constant/index.js';

class Validator {
  static validateLottoNumbersLength(numbers) {
    if (numbers.length !== LOTTO.NUMBERS.LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBERS.LENGTH);
    }
  }

  static validateLottoNumberRange(number) {
    if (number < LOTTO.NUMBERS.MIN || number > LOTTO.NUMBERS.MAX) {
      throw new Error(ERROR.LOTTO_NUMBERS.RANGE);
    }
  }

  static validateUniqueLottoNumbers(numbers) {
    if (new Set(numbers).size !== LOTTO.NUMBERS.LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBERS.UNIQE);
    }
  }

  static validateGreaterThanZero(number) {
    if (number <= 0) {
      throw new Error('[ERROR] 0보다 커야 합니다.');
    }
  }

  static validateValidUnit(number) {
    if (number % 1000 !== 0) {
      throw new Error('[ERROR] 1,000원 단위로 입력하세요.');
    }
  }

  static validateUniqueBonusNumber(bonus, numbers) {
    if (numbers.includes(bonus)) {
      throw new Error(
        '[ERROR] 당첨 번호에 있는 숫자는 보너스 번호가 될 수 없습니다.'
      );
    }
  }
}

export default Validator;
