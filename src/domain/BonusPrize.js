import Prize from './Prize.js';

class BonusPrize extends Prize {
  canReceive(lotto, winningLotto) {
    const hasBonusNumber = lotto.contain(winningLotto.getBonusNumber());
    return hasBonusNumber && super.canReceive(lotto, winningLotto);
  }
}

export default BonusPrize;
