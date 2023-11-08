import { MissionUtils } from '@woowacourse/mission-utils';
import { LottoMachine } from './LottoMachine.js';
import { Lotto } from './Lotto.js';
import { BonusNumberValidate, CashValidate } from './Validate.js';

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
      CashValidate.cashValidate(Number(cash));
      const lottoCount = Number(cash) / 1000;
      this.playerLottos = this.lottoMachine.buyLottos(lottoCount);
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
      BonusNumberValidate.bonusNumberValidate(bonusNumber.split(','), this.winningNumbers);
      this.bonusNumber = Number(bonusNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.isBonusNumber();
      return;
    }
  }
}
