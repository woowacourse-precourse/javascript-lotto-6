import { GAME_MESSAGE } from "./Constant.js";

const { Console } = require("@woowacourse/mission-utils");
const LottoGame = require("./LottoGame.js");

class App {
  constructor() {
    this.game = new LottoGame();
  }

  async play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLineAsync(GAME_MESSAGE.BUY_AMOUNT, (money) => {
      this.game.setLottoCount(money);
      this.game.printLottoCount();
      this.game.printLottoList();
    });
  }
}

export default App;
