import { GAME_MESSAGE } from "./Constant.js";

const { Console } = require("@woowacourse/mission-utils");
const validate = require("./LottoGame.js");

class App {
  constructor() {
    this.validate = new validate();
  }

  async play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLineAsync(GAME_MESSAGE.BUY_AMOUNT, (money) => {
      this.validate.setLottoCount(money);
    });
  }
}

export default App;
