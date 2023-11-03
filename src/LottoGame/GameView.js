import { MissionUtils } from "@woowacourse/mission-utils";

export default class GameView {
  async printGameMessage(message) {
    await MissionUtils.Console.print(message);
  }
}
