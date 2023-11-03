import { MissionUtils } from "@woowacourse/mission-utils";
import GameView from "./GameView";
import { GameText } from "../Message";

export default class GameController {
  constructor() {
    this.view = new GameView();
  }
  async start() {
    this.view.printGameMessage(GameText.GET_BUYING_MONEY);
    const buyingMoney = await this.getUserInput();
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync();
    return userInput;
  }
}
