import LottoError from './LottoError.js';
import {
  LOTTO_BONUS_NUMBER_REGEX,
  LOTTO_NUMBERS_REGEX,
  LOTTO_PRIZE,
  NUMBERS_REGEX,
} from './constants.js';

export default class Validator {
  static validatePurchaseAmount(purchaseAmount) {
    if (!NUMBERS_REGEX.test(purchaseAmount))
      throw new LottoError('구입 금액은 숫자만 입력해야합니다.');

    if (Number(purchaseAmount) % LOTTO_PRIZE != 0)
      throw new LottoError(`${LOTTO_PRIZE}원 단위로 입력해야 합니다.`);
  }

  static vaildateWinningNumbers(winningNumbers) {
    if (!LOTTO_NUMBERS_REGEX.test(winningNumbers))
      throw new LottoError('당첨번호를 잘못 입력하셨습니다.');

    const numbers = winningNumbers.split(',');
    if (new Set(numbers).size != numbers.length) {
      throw new LottoError('로또 번호는 중복되지 않아야 합니다.');
    }

    numbers.forEach((number) => {
      if (Number(number) < 1 || Number(number) > 45)
        throw new LottoError('로또 번호는 1~45 입니다.');
    });
  }

  static vaildateBonusNumber(bonusNumber, winningNumbers) {
    if (!LOTTO_BONUS_NUMBER_REGEX.test(bonusNumber))
      throw new LottoError('입력이 잘못되었습니다.');

    if (winningNumbers.includes(bonusNumber))
      throw new LottoError('로또 당첨번호와 중복됩니다.');
  }
}
