import { MissionUtils } from "@woowacourse/mission-utils";
import PlayGame from "./PlayGame.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.PlayGame = new PlayGame();
    this.Lotto = new Lotto();
  }
  async play() {
    const ticketAmount = await this.Lotto.inputPurchaseAmount();
    MissionUtils.Console.print(`\n${ticketAmount}개를 구매했습니다.`);
    const RandomArray = await this.PlayGame.getRandomNumber(ticketAmount);
    const inputWinningNumber = await this.Lotto.inputWinningNumber();
    const inputBonusNumber = await this.Lotto.inputBonusNumber(inputWinningNumber);
    MissionUtils.Console.print(`\n당첨 통계\n---\n`);
    await this.PlayGame.execution(RandomArray, inputWinningNumber, inputBonusNumber, ticketAmount);
    MissionUtils.Console.print(`---\n`);
  }
}

export default App;
