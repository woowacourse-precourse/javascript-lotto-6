import { MissionUtils } from "@woowacourse/mission-utils";
import GameView from "./GameView";
import { GameText } from "../Message";
import GameUtil from "./GameUtil";
import GameModel from "./GameModel";

export default class GameController {
  constructor() {
    this.view = new GameView();
    this.util = new GameUtil();
    this.model = new GameModel();
  }
  async start() {
    this.view.printGameMessage(GameText.GET_BUYING_MONEY);
    const buyingMoney = await this.getUserInput();
    MissionUtils.Console.print(`사용자 입력 금액 ${buyingMoney}`);
    this.util.buyingMoneyValidator(buyingMoney);

    this.model.lottoCount(buyingMoney);
    this.model.generateLotto(this.model.LOTTO_COUNT);
    this.view.printLottos(this.model.LOTTOS, this.model.LOTTO_COUNT);
  }

  async getUserInput() {
    const userInput = await MissionUtils.Console.readLineAsync();
    return userInput;
  }
}
