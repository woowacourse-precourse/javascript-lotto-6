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
}
