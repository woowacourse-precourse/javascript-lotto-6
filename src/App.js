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
    Console.readLineAsync(GAME_MESSAGE.MONEY, (money) => {
      this.game.setLottoCount(money);
      this.game.printLottoCount();
      this.game.printLottoList();
    });
  }

  inputWinningNums() {
    Console.readLineAsync(GAME_MESSAGE.WINNING_NUM, (winningNums) => {
      this.game.setWinningNums(winningNums);
      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLineAsync(GAME_MESSAGE.BONUS_NUM, (bonusNum) =>
      this.game.setBonusNum(bonusNum)
    );
  }

  inputWinningStats() {
    Console.print(GAME_MESSAGE.STATIC);
    this.game.setWinningStats();
  }
}

export default App;
