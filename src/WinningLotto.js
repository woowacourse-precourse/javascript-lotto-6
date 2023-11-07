import Lotto from './Lotto.js';

export default class WinningLotto extends Lotto {
  #bonusNumber;
  constructor(winningNumbers, bonusNumber) {
    super(winningNumbers);
    this.bonusNumber = bonusNumber;
  }
}
