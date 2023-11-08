// LottoGame.js
import { LottoMachine } from './LottoMachine.js';
import { Lotto } from '../Validate/Lotto.js';
import { BonusNumberValidate, CashValidate } from '../Validate/Validate.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export class LottoGame {
  constructor() {
    this.lottoMachine = new LottoMachine();
    this.playerLottos;
    this.bonusNumber;
    this.winningNumbers;
  }

  buyLottos(cash) {
    CashValidate.cashValidate(Number(cash));
    const lottoCount = Number(cash) / 1000;
    this.playerLottos = this.lottoMachine.buyLottos(lottoCount);
  }

  winLottos(winningNumber) {
    const winningNumbers = new Lotto(winningNumber.split(',').map(Number));
    this.winningNumbers = winningNumbers.numbers;
  }

  isBonusNumber(bonusNumber) {
    BonusNumberValidate.bonusNumberValidate(bonusNumber.split(','), this.winningNumbers);
    this.bonusNumber = Number(bonusNumber);
  }
}
