import WinningLotto from './WinningLotto.js';

class WinningMachine {
  generateWinningLotto({ numbers, bonusNumber }) {
    return new WinningLotto({ numbers, bonusNumber });
  }
}

export default WinningMachine;
