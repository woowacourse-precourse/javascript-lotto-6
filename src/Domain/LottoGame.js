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
    //cash => string -> int
    CashValidate.cashValidate(Number(cash));
    const lottoCount = Number(cash) / 1000;
    this.playerLottos = this.lottoMachine.buyLottos(lottoCount);
  }

  winLottos(winningNumber) {
    //winningNumber => string -> array(el-> Number)
    const winningNumbers = new Lotto(winningNumber.split(',').map(Number));
    this.winningNumbers = winningNumbers.numbers;
  }

  isBonusNumber(bonusNumber) {
    // bonusNumber => string -> array-예외처리를 위해 잠시 변환 -> int
    BonusNumberValidate.bonusNumberValidate(bonusNumber.split(','), this.winningNumbers);
    this.bonusNumber = Number(bonusNumber);
  }
}
