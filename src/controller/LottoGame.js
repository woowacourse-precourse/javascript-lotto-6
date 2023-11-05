import Input from "../view/Input.js";
import Player from "../model/Player.js";
import WinningLotto from "../model/WinningLotto.js";
import { MONEY_CONSTANT } from "../constants/game.js";

class LottoGame {
  async initGame() {
    await this.setPlayer();
    await this.setWinningLotto();
  }

  getResult() {
    const ranks = this.saveLottoRank();
    const returnRate = this.getReturnRate(ranks);
  }

  getReturnRate(ranks) {
    const returnRate = this.getWinningAmount(ranks) / this.player.playerMoney;
    return returnRate.toFixed(1);
  }

  getWinningAmount(ranks) {
    let amount = 0;
    amount += MONEY_CONSTANT.REWARD.FIRST * ranks[1];
    amount += MONEY_CONSTANT.REWARD.SECOND * ranks[2];
    amount += MONEY_CONSTANT.REWARD.THIRD * ranks[3];
    amount += MONEY_CONSTANT.REWARD.FOURTH * ranks[4];
    amount += MONEY_CONSTANT.REWARD.FIFTH * ranks[5];
    return amount;
  }

  async setPlayer() {
    const money = await Input.getMoney();

    this.player = new Player(money);
    this.player.print();
  }

  async setWinningLotto() {
    const winningNumbers = await Input.getWinningNumber();
    this.winningLotto = new WinningLotto(winningNumbers);

    const bonusNumber = await Input.getBonusNumber();
    this.winningLotto.setBonusNumber(bonusNumber);
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
