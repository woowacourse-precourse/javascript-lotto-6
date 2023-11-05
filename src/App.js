import { MissionUtils } from "@woowacourse/mission-utils";
// import UserInput from "./UserInput.js";
import PlayGame from "./PlayGame.js";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    // this.UserInput = new UserInput();
    this.PlayGame = new PlayGame();
    this.Lotto = new Lotto();
  }
  async play() {
    const ticketAmount = await this.Lotto.inputPurchaseAmount();
    MissionUtils.Console.print(`\n${ticketAmount}개를 구매했습니다.\n`);
    const RandomArray = await this.PlayGame.getRandomNumber(ticketAmount);
    const inputWinningNumber = await this.Lotto.inputWinningNumber()
  }
}

export default App;
