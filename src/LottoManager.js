import Lotto from './Lotto.js';
import { MESSAGE } from './constants/messages.js';
import { numberCheck, numbersCheck } from './validation.js';
import { LOTTO_NUMBER } from './constants/policy.js';
import { Console } from '@woowacourse/mission-utils';

class LottoManager extends Lotto {
  bonusNumber = 0;

  constructor(luckyNumber) {
    super(luckyNumber);
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

  setBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;
  }

  getBonusNumber() {
    return this.bonusNumber;
  }

  static async readLuckyNumber() {
    const luckyNumber = await Console.readLineAsync(
      MESSAGE.LOTTO.setLuckyNumber,
    );
    return luckyNumber.split(',').map((v) => Number(v));
  }

  static async readSetLuckyNumber() {
    try {
      return new LottoManager(await LottoManager.readLuckyNumber());
    } catch (err) {
      Console.print(err.message);
      await LottoManager.readSetLuckyNumber();
    }
  }

  static async readBonusNumber() {
    return await Console.readLineAsync(MESSAGE.LOTTO.setBonusNumber);
  }

  async readAndSetBonusNumber(luckyNumber) {
    try {
      const bonusNumber = await LottoManager.readBonusNumber();
      this.#bonusNumberValidation(luckyNumber, bonusNumber);
      this.setBonusNumber(bonusNumber);
    } catch (err) {
      Console.print(err.message);
      await this.readAndSetBonusNumber(luckyNumber);
    }
  }
}

export default LottoManager;
