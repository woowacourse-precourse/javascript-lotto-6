const { GAME_MESSAGE } = require("./Constant.js");
const { Console } = require("@woowacourse/mission-utils");
const winningNumbers = require("./winningNumbers.js");
const BonusNumber = require("./BonusNumber.js");
const PublishedLottos = require("./PublishedLottos.js");

class App {
  constructor() {
    this.lottos = null;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  async play() {
    this.inputMoney();
  }

  inputMoney() {
    Console.readLineAsync(GAME_MESSAGE.MONEY, (money) => {
      this.lottos = new PublishedLottos(money);
      this.lottos.printCount();
      this.lottos.printList();
      this.game.inputWinningNumbers();
    });
  }

  inputwinningNumbers() {
    Console.readLineAsync(GAME_MESSAGE.WINNING_NUM, (winningNumbers) => {
      winningNumbers = winningNumbers.split(",").map((item) => Number(item));
      this.winningNumbers = new winningNumbers(winningNumbers);

      this.inputBonusNum();
    });
  }

  inputBonusNum() {
    Console.readLineAsync(GAME_MESSAGE.BONUS_NUM, (bonusNumber) => {
      this.bonusNumber = new BonusNumber(
        Number(bonusNumber),
        this.winningNumbers.value
      );
      this.inputWinningStats();
    });
  }

  inputWinningStats() {
    Console.print(GAME_MESSAGE.STATIC);
    const lottoResultArray = this.lottos.getResult(
      this.winningNumbers.value,
      this.bonusNumber.value
    );
    this.lottos.printWinningHistory(lottoResultArray);
    this.lottos.printRate(lottoResultArray);
    this.gameEnd();
  }

  gameEnd() {
    Console.close();
  }
}

export default App;
