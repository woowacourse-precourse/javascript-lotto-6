import PublishedLottos from "./PublishedLottos.js";
import WinningNumbers from "./WinningNumbers.js";
import BonusNumber from "./BonusNumber.js";
import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./libs/Constant.js";

class App {
  constructor() {
    this.lottos = null;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }

  async play() {
    this.requestMoney();
  }

  async requestMoney() {
    const money = await Console.readLineAsync(GAME_MESSAGE.MONEY);
    this.lottos = new PublishedLottos(money);

    this.lottos.printCount();
    this.lottos.printList();

    await this.requestWinningNumbers;
  }

  async requestWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      GAME_MESSAGE.WINNING_NUM
    );
    this.winningNumbers = new WinningNumbers(
      winningNumbers.split(",").map((item) => item)
    );

    await this.requestBonusNumber();
  }

  async requestBonusNumber() {
    const bonusNumber = await Console.readLineAsync(GAME_MESSAGE.BONUS_NUM);
    this.bonusNumber = new BonusNumber(bonusNumber, this.winningNumbers.value);

    this.printWinningStats();
  }

  printWinningStats() {
    Console.print(GAME_MESSAGE.STATIC);
    const lottoResultArray = this.lottos.getResult(
      this.winningNumbers.value,
      this.bonusNumber.value
    );
    this.lottos.printWinningHistory(lottoResultArray);
    this.lottos.printRate(lottoResultArray);
  }
}

export default App;
