import { MissionUtils } from '@woowacourse/mission-utils';
import { LottoMachine } from './LottoMachine.js';
import { CashCount } from './CashCount.js';
import { Lotto } from './Lotto.js';
import { CommonError } from './CommonError.js';

export class LottoGame {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.playerLottos;
    this.bonusNumber;
    this.winningNumbers;
  }

  async buyLottos() {
    try {
      const cash = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
      const cashCount = new CashCount(cash);
      this.playerLottos = this.lottoMachine.buyLottos(cashCount.count);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.buyLottos();
      return;
    }
  }

  async winLottos() {
    try {
      const winningNumber = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
      const winningNumbers = new Lotto(winningNumber.split(',').map((number) => Number(number)));
      this.winningNumbers = winningNumbers.numbers;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.winLottos();
      return;
    }
  }

  async isBonusNumber() {
    try {
      const bonusNumber = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
      this.#bonusNumberValidate(bonusNumber.split(','));
      this.bonusNumber = Number(bonusNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.isBonusNumber();
      return;
    }
  }

  #bonusNumberValidate(number) {
    this.#validateSingleNumber(number);
    const isNumber = Number(number[0]);
    this.#validateBonusNumber(isNumber);
  }

  #validateSingleNumber(number) {
    if (number.length !== 1) {
      throw new Error('[ERROR] 하나의 입력이 아닙니다.');
    }
  }

  #validateBonusNumber(isNumber) {
    if (this.winningNumbers.includes(isNumber)) {
      throw new Error('[ERROR] 당첨 번호와 중복된 숫자가 있습니다.');
    }

    const numberError = new CommonError();
    numberError.numberError(isNumber);
  }
}
