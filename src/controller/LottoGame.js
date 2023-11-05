import Input from "./view/Input.js";
import Output from "./view/Output.js";
import Player from "./model/Player.js";

class LottoGame {
  initGame() {
    const input = new Input();
    const money = input.getMoney();

    this.player = new Player(money);
  }

  async setPlayer() {
    const money = await Input.getMoney();

    this.player = new Player(money);
    Output.printLotto(this.player);
  }
}
