import Lotto from './Lotto.js';
import { MESSAGE } from './constants/messages.js';
import { numberCheck, numbersCheck } from './validation.js';
import { LOTTO_NUMBER } from './constants/policy.js';
import { Console } from '@woowacourse/mission-utils';

class LuckyNumber extends Lotto {
  #bonusNumber = 0;

  constructor(luckyNumber, bonusNumber) {
    super(luckyNumber);
    this.#bonusNumber = bonusNumber;
  }

  #luckyNumberValidation(luckyNumber) {
    numbersCheck.length(LOTTO_NUMBER.lottoLength, MESSAGE.ERROR.length);
    luckyNumber.forEach((number) => {
      numbersCheck.duplicate(luckyNumber, number, MESSAGE.ERROR.duplicate);
      numberCheck.number(number, MESSAGE.ERROR.number);
      numberCheck.rangeCheck(
        number,
        LOTTO_NUMBER.startNumber,
        LOTTO_NUMBER.endNumber,
        MESSAGE.ERROR.lottoRange,
      );
    });
  }

  #bonusNumberValidation(luckyNumber, bonusNumber) {
    numberCheck.rangeCheck(
      bonusNumber,
      LOTTO_NUMBER.startNumber,
      LOTTO_NUMBER.endNumber,
      MESSAGE.ERROR.lottoRange,
    );
    numberCheck.number(bonusNumber, MESSAGE.ERROR.number);
    numbersCheck.duplicate(
      [...luckyNumber, bonusNumber],
      MESSAGE.ERROR.duplicate,
    );
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  static async readLuckyNumber() {
    try {
      const luckyNumber = await Console.readLineAsync(
        MESSAGE.LOTTO.setLuckyNumber,
      )
        .split(',')
        .map((v) => Number(v));
      this.#luckyNumberValidation(luckyNumber);
      return luckyNumber;
    } catch (err) {
      Console.print(err.message);
      await LuckyNumber.readLuckyNumber();
    }
  }

  static async readBonusNumber(luckyNumber) {
    try {
      const bonusNumber = Number(
        await Console.readLineAsync(MESSAGE.LOTTO.setBonusNumber),
      );
      this.#bonusNumberValidation(luckyNumber, bonusNumber);
      return bonusNumber;
    } catch (err) {
      Console.print(err.message);
      await LuckyNumber.readBonusNumber(luckyNumber);
    }
  }
}

export default LuckyNumber;
