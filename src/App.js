import { MissionUtils } from "@woowacourse/mission-utils";
import UserInput from "./UserInput.js";
import PlayGame from "./PlayGame.js";

class App {
  constructor() {
    this.UserInput = new UserInput();
    this.PlayGame = new PlayGame();
  }
  async play() {
    const ticketAmount = await this.UserInput.purchaseAmount();
    MissionUtils.Console.print(`\n${ticketAmount}개를 구매했습니다.\n`);
    const RandomArray = await this.PlayGame.getRandomNumber(ticketAmount);
  }
}

export default App;
