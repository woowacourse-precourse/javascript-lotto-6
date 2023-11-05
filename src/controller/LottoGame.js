import Input from "../view/Input.js";
import Output from "../view/Output.js";
import Player from "../model/Player.js";
import WinningLotto from "../model/WinningLotto.js";

class LottoGame {
  async initGame() {
    await this.setPlayer();
    await this.setWinningLotto();
  }

  async setPlayer() {
    const money = await Input.getMoney();
    Output.printNewLine();

    this.player = new Player(money);
    Output.printLotto(this.player);
    Output.printNewLine();
  }

  async setWinningLotto() {
    const winningNumbers = await Input.getWinningNumber();
    this.winningLotto = new WinningLotto(winningNumbers);
    Output.printNewLine();

    const bonusNumber = await Input.getBonusNumber();
    this.winningLotto.setBonusNumber(bonusNumber);
    Output.printNewLine();
  }

  saveLottoRank() {
    const ranks = Array.from({ length: 6 }, () => 0);
    this.player.playerLottos.forEach((lotto) => {
      const rank = this.compareLotto(lotto.lottoNumbers, this.winningLotto);
      ranks[rank] += 1;
    });
    return ranks;
  }

  compareLotto(lottoNumbers, winningLotto) {
    let count = 0;
    let bonusCheck = false;

    count = winningLotto.lottoNumbers.reduce((acc, currentNumber) => {
      if (lottoNumbers.includes(currentNumber)) {
        return acc + 1;
      }
      return acc;
    }, count);
    if (lottoNumbers.includes(winningLotto.getBonusNumber())) {
      bonusCheck = true;
    }

    return this.getRank(count, bonusCheck);
  }

  getRank(count, bonusCheck) {
    switch (count) {
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        if (bonusCheck) {
          return 2;
        }
        return 3;
      case 6:
        return 1;
      default:
        return 0;
    }
  }
}

export default LottoGame;
